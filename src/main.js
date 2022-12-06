import Vue from 'vue'
import App from './App.vue'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faAngleDown, faCircle } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faClock, faFileLines, faUser } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faClock, faTwitter, faFacebookF, faInstagram, faLinkedin, faAngleDown, faCircle, faFileLines, faUser )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
