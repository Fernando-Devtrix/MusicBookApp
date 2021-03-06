import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list');
  this.route('detail', {path: 'detail/:id'});
  this.route('author');
  this.route('author-detail', {path: 'author-detail/:id'});
});

export default Router;
