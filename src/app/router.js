class Router extends Backbone.Router {
  constructor () {
    var options = {
      routes: {
        '' : 'home'
      }
    }
    super(options);
  }
  home(){
    Backbone.trigger('route:home');
  }
}

export default Router;