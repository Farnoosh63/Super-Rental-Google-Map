import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('city');
    }
  }
});
