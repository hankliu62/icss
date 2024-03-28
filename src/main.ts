import './styles/index.less'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getRoutePrefix } from '@/utils/route'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(router)

app.use(VueLazyload, {
  loading: getRoutePrefix() + '/common/loading.gif',
  error: getRoutePrefix() + '/common/error.png',
  attempt: 2,
  observer: true,
})

app.mount('#app')
