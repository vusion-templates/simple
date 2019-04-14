import Vue from 'vue';

import { install } from 'vusion-utils';
import * as ProtoUI from 'proto-ui.vusion';
install(Vue, ProtoUI);

import App from './index.vue';
new Vue(App).$mount('#app');
