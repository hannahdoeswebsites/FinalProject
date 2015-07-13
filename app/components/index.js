import Ember from 'ember';


Ember.$(document).ready(function(){
Ember.$(".footer").sticky({bottomSpacing:0});
});


(function (window, document, undefined) {

  'use strict';


  var btn = this.$('.button'),
      state = 'active';

  function buttonGlow(event, cname) {
    Ember.event.preventDefault();
    this.$.addClass(cname);
  }

  function buttonGlowEnd(event, cname) {
    this.$removeClass(cname);
  }


  btn.on('click', function() {
    Ember.buttonGlow.call(this, event, state);
  });

  btn.on('touchstart', function() {
    Ember.buttonGlow.call(this, event, state);
  });

  btn.on('webkitAnimationEnd', function() {
    Ember.buttonGlowEnd.call(this, event, state);
  });

  btn.on('mozAnimationEnd', function() {
    Ember.buttonGlowEnd.call(this, event, state);
  });

  btn.on('animationend', function() {
    Ember.buttonGlowEnd.call(this, event, state);
  });

})(window, document);
