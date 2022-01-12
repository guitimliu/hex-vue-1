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
    },
    mounted() {
        AOS.init({
            duration: 600,
        });
    }
}
Vue.createApp(app).mount('#app');