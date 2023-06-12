<template>
  <meta name="theme-color" content="#712cf9">
  <!-- Favicons -->
  <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
  />

  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <h2 class="auth-title">Авторизація</h2>
    <div class="login" style="display: flex; flex-direction: column; align-items: center;">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Ім'я" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="Пароль" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item style="display: flex; justify-content: center;">
          <el-button type="primary" class="auth-button" @click="submitForm">Увійти</el-button>
          <el-button class="auth-button" @click="resetForm">Скинути</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style>
.auth-title {
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.auth-button {
  width: 120px;
  margin-right: 10px;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
</style>

<script>
import { reactive, ref } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import axios from 'axios';
import { createRouter, useRouter } from 'vue-router';
import store from '../store.js';

export default {
  name: 'Login',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  },
  setup() {
    const router = useRouter()
    const ruleFormRef = ref(null)

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        callback()
      }
    }

    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== ruleForm.pass) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    }

    const ruleForm = reactive({
      name: '',
      pass: '',
    })

    const rules = reactive({
      name: [{ required: true, message: 'Please input the name', trigger: 'blur' }],
      pass: [{ validator: validatePass, trigger: 'blur' }],
    })

    const submitForm = () => {
      if (!ruleFormRef.value) return;

      ruleFormRef.value.validate((valid) => {
        if (valid) {
          console.log(ruleForm);
          axios.post('http://localhost:3001/user', ruleForm)
              .then(response => {
                console.log('Server response:', response.data);
                // Обработка ответа от сервера
                if (response.data.login === true) {
                  //  store.commit('setAuthenticated', true);
                  router.push({ path: '/user_panel', query: { id: response.data.id } });
                }
              })
              .catch(error => {
                console.error('Error:', error);
                // Обработка ошибки
              });
        } else {
          console.log('error submit!');
          return false;
        }
      });
    };

    const resetForm = () => {
      if (!ruleFormRef.value) return
      ruleFormRef.value.resetFields()
    }

    return {
      ruleForm,
      rules,
      submitForm,
      resetForm,
      ruleFormRef,
    }
  },
}
</script>
  <style src="../assets/Appointments.css"></style>