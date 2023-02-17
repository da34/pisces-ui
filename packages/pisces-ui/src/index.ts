import { createApp } from "vue/dist/vue.esm-browser";
import Yui from './entry'

createApp({
  template:`
            <div>
                <YButton>普通按钮</YButton>
                <YButton color="blue">蓝色按钮</YButton>
                <YButton color="green">绿色按钮</YButton>
                <YButton color="gray">灰色按钮</YButton>
                <YButton color="yellow">黄色按钮</YButton>
                <YButton color="red">红色按钮</YButton>
                <div style="margin-top: 1em;">
                                    <YButton plain>普通按钮</YButton>
                <YButton color="blue" plain>蓝色按钮</YButton>
                <YButton color="green" plain>绿色按钮</YButton>
                <YButton color="gray" plain>灰色按钮</YButton>
                <YButton color="yellow" plain>黄色按钮</YButton>
                <YButton color="red" plain>红色按钮</YButton>
                </div>
                <div style="margin-top: 1em;">
                <YButton size="small">小按钮</YButton>
                <YButton size="medium">中按钮</YButton>
                <YButton size="large">大按钮</YButton>
                </div>

 <div style="margin-top: 1em;">
         <YButton color="blue" round plain icon="search" ></YButton>
         <YButton color="green" round plain icon="edit" ></YButton>
         <YButton color="gray" round plain icon="check" ></YButton>
         <YButton color="yellow" round plain icon="message" ></YButton>
         <YButton color="red" round plain icon="delete" ></YButton>
     </div>
            </div>
        `
}).use(Yui).mount('#app')