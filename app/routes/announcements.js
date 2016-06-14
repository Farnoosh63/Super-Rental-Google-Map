import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    save(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcements');
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this?')) {
        rental.destroyRecord();
        this.transitionTo('announcements');
      }
    }
  }
});
