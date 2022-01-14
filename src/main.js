import Vue from 'vue';
import App from './App.vue';
import Test from './components/Test';

Vue.config.productionTip = false
Vue.component('Test', Test);

new Vue({
  render: h => h(App),
}).$mount('#app')
