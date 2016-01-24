// vendor
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

// Components and Pages
import App from './pages/App.vue'
import Index from './pages/Index.vue'

// Debug
Vue.config.debug = (process.env.NODE_ENV !== 'production');

// Install plugins
Vue.use(Router);
Vue.use(VueResource);
// Vue.http.headers.common['Authorization'] = 'Bearer ' + API.APP_TOKEN;
Vue.http.options.emulateJSON = true;

// Routing
export let router = new Router;

router.map({
  '/index': {
    name: 'index',
    component: Index
  },
  // TODO other pages
});

// Default router
router.redirect({
  '*': '/'
});

router.alias({
  '/': '/index'
});

// Listen router events
router.beforeEach(function ({ to, next }) {
  Vue.config.debug && console.log('Router Event: Going to ' + to.path);
  next();
});

// Let's begin
router.start(App, '#app');
