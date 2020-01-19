import Vue from 'vue';
import {
  Form,
  FormItem,
  Input,
  Button,
  Select,
  Option,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Button);

new Vue({
  render: h => h(App)
}).$mount('#app');
