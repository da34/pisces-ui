import DefaultTheme  from 'vitepress/theme'
import YUI from '../../../pisces-ui/src/entry'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import {useComponents} from "./useComponents";

export default {
  ...DefaultTheme ,
  enhanceApp({ app }) {
    // DefaultTheme.enhanceApp(ctx)
    app.use(YUI)
    useComponents(app)
  },
}