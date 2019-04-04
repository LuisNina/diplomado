var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB

mongoose.connect('mongodb://40.113.236.81:27017/pizzas', function(err, res) {
  if(err) {
    console.log('ERROR: Connected to Database');
  } else{
    console.log('Connected to Database');
  };  
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'content-type');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE');

        return res.status(200).json({});
    }

    next();
});

// Import Models and controllers
var models = require('./models/pizza_shop')(app, mongoose);
var pizzaCtrl = require('./controllers/pizza_shop_controller');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Pizza Branch API. ok!!");
});
app.use(router);

// API routes
var pizzaRoute = express.Router();

pizzaRoute.route('/pizza_branch')
  .get(pizzaCtrl.getAllPoints)
  .post(pizzaCtrl.addPoints);

  pizzaRoute.route('/pizza_branch/:id')
  .delete(pizzaCtrl.deletePoint);

app.use('/api', pizzaRoute);

// Start server
app.listen(3000, '0.0.0.0', function() {
  console.log("Node server running on http://localhost:3000");
});
