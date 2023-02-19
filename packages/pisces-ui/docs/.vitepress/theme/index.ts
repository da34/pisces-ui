import DefaultTheme  from 'vitepress/theme'
// @ts-ignore
import PiscesUI from 'pisces-ui'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import {useComponents} from "./useComponents";

export default {
  ...DefaultTheme ,
  enhanceApp({ app }) {
    // DefaultTheme.enhanceApp(ctx)
    app.use(PiscesUI)
    useComponents(app)
  },
}