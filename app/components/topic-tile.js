import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(topic) {
      if (confirm('Are you sure you want to delete this topic?')) {
        this.sendAction('destroyTopic', topic);
      }
    }
  }
});
