import Vue from 'vue'
import App from './App.vue'
import Parent from "./components/parent/Parent.vue";

new Vue({
  el: '#app',
  render: h => h(Parent)
});
