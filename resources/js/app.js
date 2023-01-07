// import './bootstrap';
// import Vue from 'vue';
// import Index from './components/Index'
//
// new Vue({
//     el: '#app',
//
//     components: {
//         Index
//     }
// })

import './bootstrap';
import {createApp} from 'vue';
import Index from '@/components/Index'

console.log(1112);

createApp(Index).mount("#app")
