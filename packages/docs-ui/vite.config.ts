import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../pisces-ui/config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
});