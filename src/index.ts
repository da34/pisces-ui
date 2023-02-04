import { createApp } from "vue/dist/vue.esm-browser";
import Yui from './entry'

createApp({
  template:`
            <div>
                <YButton>普通按钮</YButton>
            </div>
        `
}).use(Yui).mount('#app')