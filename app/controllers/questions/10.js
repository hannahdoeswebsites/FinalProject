import Ember from 'ember';

export default Ember.ArrayController.extend({
  zoom: 19,
  centerLat: 34.845071,
  centerLng: -82.401989,
  type: 'road',
  markers: [
    {title: 'one', centerLat: 34.845071, centerLng: -82.401989, description: 'Statue!', isDraggable: true, isVisible: true},
  ],

  actions: {
    didClickMap: function (view, event) {
      var latLng = event.latLng;
      this.get('markers').pushObject({lat: latLng.lat(), lng: latLng.lng()});
    },
  }
});
