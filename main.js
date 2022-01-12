import products from './data.js';

const app = {
    data() {
        return {
            products,
        }
    }
}
Vue.createApp(app).mount('#app');