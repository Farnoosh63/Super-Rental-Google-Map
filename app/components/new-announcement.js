import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save() {
      var params = {
        title: this.get('title'),
        info: this.get('info'),

      };

      this.set('addNewAnnouncement', false);
      this.sendAction('save', params);
    }
  }
});
