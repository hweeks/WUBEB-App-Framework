import MainTemplate from '../templates/MainTemplate.html';
import MainModel from '../models/model'

class MainView extends Backbone.View {
  constructor(){
    var options = {
      el: $('#main'),
      events:{
        'click .save-button' : 'submit'
      },
      model: new MainModel()
    }
    super(options);
  }
  initialize(){
    this.listenTo(Backbone, 'route:home', this.render);
  }
  render(){
    var template, detailContent = {};
    detailContent['detail'] = this.model.get('detail');
    template = MainTemplate(detailContent);
    $(this.el).html(template);
  }
  submit(e){
    e.preventDefault();
    console.log('I even react to clicks.');
    console.log(e);
  }
}
export default MainView;