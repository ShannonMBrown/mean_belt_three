const restaurant = require('../controllers/restaurant_controller.js');
var path = require('path');

module.exports = function (app) {
    app.get('/api/restaurants', restaurant.retrieveAllRestaurants)
    app.get('/api/restaurants/:id', restaurant.retrieveOneRestaurant)
    app.post('/api/restaurants', restaurant.createRestaurant)
    app.put('/api/restaurants/:id', restaurant.updateRestaurant)
    app.delete('/api/restaurants/:id', restaurant.destroyRestaurant)
    app.post('/api/review/:restID', restaurant.postReview)
    app.get('/api/review/:restID', restaurant.getRestaurantReviews)
  
  app.all('*', (req, res) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  })
 

}
