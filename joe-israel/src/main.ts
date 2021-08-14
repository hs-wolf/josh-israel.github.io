import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/css/props.css';
import './assets/css/reset.css';
import './assets/css/utils.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight, faMouse, faHome, faCode, faUserGraduate, faAddressCard, faServer, faUpload, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

library.add(faChevronLeft, faChevronRight, faMouse, faHome, faCode, faUserGraduate, faAddressCard, faServer, faUpload, faProjectDiagram, faLinkedin, faGithub, faStackOverflow);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('font-awesome-layers', FontAwesomeLayers);
app.component('font-awesome-layers-text', FontAwesomeLayersText);
app.use(router);
app.mount('#app');
