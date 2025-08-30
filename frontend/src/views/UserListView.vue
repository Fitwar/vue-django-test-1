<template>
  <div>
    <NavBar></NavBar>
    <h1>Django 用户列表</h1>
    <div v-if="loading">加载中...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        ID: {{ user.id }} - 用户名: {{ user.username }} - 邮箱: {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import request from '../api/request'; // 引入封装的 Axios 实例
import NavBar from '../components/NavBar.vue';

const users = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchUsers = async () => {
  try {
    // 使用符合 RESTful 规范的 URL
    const response = await request.get('/api/users/');
    users.value = response.data;
  } catch (err) {
    console.error('获取用户数据失败:', err);
    error.value = '无法加载数据，请检查后端服务是否开启。';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUsers);
</script>