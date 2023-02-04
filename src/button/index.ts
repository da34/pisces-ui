import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'YButton',
  
  render() {
    return h('button', null, 'myButton')
  }
})