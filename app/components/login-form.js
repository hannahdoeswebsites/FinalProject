import Ember from 'ember';
import LogIontrollerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Component.extend(LogIontrollerMixin, {
 authenticator: 'authenticator:parse-username'
});
