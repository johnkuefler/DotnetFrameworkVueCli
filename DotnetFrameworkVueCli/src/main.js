import Vue from 'vue'
Vue.config.productionTip = false

Vue.component('users-grid', require('./components/UsersGrid.vue').default);
Vue.component('user-card', require('./components/UserCard.vue').default);
Vue.component('users-card-grid', require('./components/UserCardGrid.vue').default);

window.Vue = Vue;
