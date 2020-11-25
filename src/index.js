import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

Vue.use(VeeValidate);

import { configureFakeBackend } from './_helpers';

// setup fake backend
if ('development' == process.env.NODE_ENV) {
    configureFakeBackend();
}

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});