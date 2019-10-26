import Controller from '@ember/controller';
import { throttle } from '@ember/runloop';

export default Controller.extend({
  queryParams: ['term'],
  queryParams: ['location'],
  queryParams: ['price'],
  term: null,
  location: null,
  price:null,
  actions: {
    updateTerm() {
      throttle(() => {
        this.set('term');
      }, 1000);
    },
    updateLocation() {
      throttle(() => {
        this.set('location');
      }, 1000);
    }
  }
});
