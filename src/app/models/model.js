class MainModel extends Backbone.Model{
  constructor(){
    super();
  }
  initialize(){
    var detailText;
    detailText = "This should show you all of the basics of an App."
    this.set('detail', detailText);
  }
}

export default MainModel;