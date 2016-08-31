import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('topic');
  },

  actions: {
    saveTopic(params) {
      var newTopic = this.store.createRecord('topic', params);
      newTopic.save();
      this.transitionTo('index');
    }
  }
});
