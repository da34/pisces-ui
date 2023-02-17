import {defineComponent, PropType} from 'vue'
import 'uno.css'

export type IColor = 'blank' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type ISize = 'small' | 'medium' | 'large'
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'pink'
  },
  size: {
    type: String as PropType<ISize>,
    default: 'medium'
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false,
  },
  
  icon: {
    type: String,
    default: "",
  },
}

const size = {
  small: {
    x: "2",
    y: "1",
    text: "sm",
  },
  medium: {
    x: "4",
    y: "2",
    text: "base",
  },
  large: {
    x: "6",
    y: "3",
    text: "lg",
  }
};

export default defineComponent({
  name: 'YButton',
  props,
  setup(props, {slots}) {
    const renderSize = size[props.size]
    return () => <button
      class={`
      py-${renderSize.y}
      px-${renderSize.x}
      ${props.round ? "rounded-full" : "rounded-lg"}
      text-${renderSize.text}
      bg-${props.color}-${props.plain ? "100" : "500"}
      hover:bg-${props.color}-700
      ${props.plain ? 'border-' + props.color + '-500' : 'border-transparent' }
      border-solid
      cursor-pointer
      text-white
      hover:text-white
      text-${props.plain ? props.color + "-500" : "white-500"}
      
      transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          
      `}
  >
      { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
      {slots.default ? slots.default() : ''}
    </button>
  }
})