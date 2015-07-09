import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions', function() {
    this.route('1');
    this.route('2');
    this.route('3');
    this.route('4');
    this.route('5');
    this.route('6');
    this.route('7');
    this.route('8');
    this.route('9');
    this.route('10');
    this.route('11');
    this.route('12');
  });

  this.route('correct', function() {
    this.route('1');
    this.route('2');
    this.route('3');
    this.route('4');
    this.route('5');
    this.route('6');
    this.route('7');
    this.route('8');
    this.route('9,');
    this.route('10');
    this.route('11');
    this.route('12');
  });

  this.route('incorrect', function() {
    this.route('1');
    this.route('2');
    this.route('3');
    this.route('4');
    this.route('5');
    this.route('6');
    this.route('7');
    this.route('8');
    this.route('9');
    this.route('10');
    this.route('11');
  });

  // 
  // this.resource('base', {
  //   path: '/'
  // }, function() {
  //
  //   this.path('application');
  //
  //   // the rest of the app
  // });
  //
  // this.resource('westEnd', {
  //   path: '/questions/1'
  // }, function() {
  //   // admin part
  // });

});

export default Router;
