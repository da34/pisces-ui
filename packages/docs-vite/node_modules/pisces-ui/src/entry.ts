import { App } from "vue";
import MyButton from "./Button/Button";
import SFCButton from "./SFCButton.vue";


// 导出单独组件
export { MyButton, SFCButton };

// 导出全部组件
export default {
  install(app: App) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
  },
};
