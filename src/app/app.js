import Router from './router';
import MainView from './views/MainView'

class App {
  constructor(){
    new Router();
    new MainView();
    Backbone.history.start()
  }
}

$(() => {
  console.log('%cHello!', 'font-size:34px;background:pink;color:purple;');
  console.log('%cThis intializes the App when the DOM is ready.', 'font-size:34px;background:purple;color:pink;');
  new App();
});