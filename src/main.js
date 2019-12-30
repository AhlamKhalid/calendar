import Vue from 'vue'
import App from './App.vue'
// bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false

// bootstrap-vue
Vue.use(BootstrapVue);

// icons
library.add(faPlus);
library.add(faPen);
library.add(faTrashAlt);
// component "font-awesome-icon"
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')

