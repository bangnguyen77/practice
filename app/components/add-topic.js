import Ember from 'ember';

export default Ember.Component.extend({
  addNewTopic: false,
  actions: {
    topicFormShow() {
      this.set('addNewTopic', true);
    },

    saveTopic() {
      var params = {
        title: this.get('title'),
        details: this.get('details'),
      };
      this.set('addNewTopic', false);
      this.sendAction('saveTopic', params);
    }
  }
});
