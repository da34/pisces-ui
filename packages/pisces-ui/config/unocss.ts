import { presetUno, presetIcons, presetAttributify } from "unocss";
import Unocss from 'unocss/vite'

const colors = [
  'white',
  'black',
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink'
]

const safelist = [
  ...colors.map(v => `bg-${v}-500`),
  ...colors.map(v => `bg-${v}-100`),
  ...colors.map(v => `hover:bg-${v}-700`),
  ...colors.map(v => `text-${v}-500`),
  ...colors.map(v => `border-${v}-500`),
  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...["rounded-full", "rounded-lg"],
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),
]

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()]
  })