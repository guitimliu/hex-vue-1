import products from './data.js';

const app = {
    data() {
        return {
            products,
            temp: {},
        }
    },
    methods: {
        showDetail(item) {
            this.temp = item;
        }
    }
}
Vue.createApp(app).mount('#app');