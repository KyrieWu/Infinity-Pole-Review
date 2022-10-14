<template>
  <div>
    <h1>{{ userInfoStore.userInfo.username }}</h1>
    <button
      :class="{ active: userInfoStore.userInfo.id === 1 }"
      @click="userInfoStore.setUserInfo({ id: 1, username: '张三' })"
    >
      张三
    </button>
    <button
      :class="{ active: userInfoStore.userInfo.id === 2 }"
      @click="userInfoStore.setUserInfo({ id: 2, username: '李四' })"
    >
      李四
    </button>
    <button
      :class="{ active: userInfoStore.userInfo.id === 3 }"
      @click="userInfoStore.setUserInfo({ id: 3, username: '王五' })"
    >
      王五
    </button>
  </div>
</template>

<script setup>
import userUserInfo from "./store/user";

const userInfoStore = userUserInfo();
</script>

<style lang="scss" scoped>
.active {
  background-color: #000;
  color: #fff;
}
</style>
