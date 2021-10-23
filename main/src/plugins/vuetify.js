import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
    breakpoint: {
        thresholds: {
            xs: 340,
            sm: 540,
            md: 800,
            lg: 1280
        },
        scrollBarWidth: 24
    },
    icons: {
        iconfont: 'mdiSvg'
    }
};

export default new Vuetify(opts);
