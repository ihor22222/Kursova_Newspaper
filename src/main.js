import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu} from "element-plus";
import {ArrowDown} from "@element-plus/icons-vue";
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
const app = createApp(App);
import store from './store';
// Регистрация компонентов Element Plus
app.use(router)
    .component('el-button', ElButton)
    .component('el-dropdown', ElDropdown)
    .component('el-dropdown-menu', ElDropdownMenu)
    .component('el-dropdown-item', ElDropdownItem)
    .component('arrow-down', ArrowDown);

// Регистрация компонентов из ElementPlusIconsVue
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
//pp.use(store);
app.mount('#app');
