import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import app from './app.vue' //fichier app.vue local
import routes from './routes.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueRouter);
Vue.use(Vuetify, {
  theme: {
    primary: "#bb2d35"
  }
});
const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})