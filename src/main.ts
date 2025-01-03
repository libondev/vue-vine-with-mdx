import { MDXProvider } from '@mdx-js/vue'
import { createApp } from 'vue'

import App from './App.vine'

import './styles'

const app = createApp(App)

app.component('MDXProvider', MDXProvider)

app.mount('#app')
