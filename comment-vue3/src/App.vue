<template>
  <div>
    <h1>{{ userInfo.username }}</h1>
    <button
      :class="{ active: userInfo.id === 1 }"
      @click="userInfoStore({ id: 1, username: '张三' })"
    >
      张三
    </button>
    <button
      :class="{ active: userInfo.id === 2 }"
      @click="userInfoStore({ id: 2, username: '李四' })"
    >
      李四
    </button>
    <button
      :class="{ active: userInfo.id === 3 }"
      @click="userInfoStore({ id: 3, username: '王五' })"
    >
      王五
    </button>
    <hr />
    <comment-one></comment-one>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import CommentOne from "./components/CommentOne.vue";

const store = useStore();

let userinfo = reactive({
  id: 1,
  username: "张三",
});
store.dispatch("setUserInfo", userinfo);

const userInfoStore = (userInfo) => {
  store.commit("setUserInfo", userInfo);
};

let userInfo = computed(() => {
  return store.state.userInfo;
});
</script>

<style lang="scss" scoped>
.active {
  background-color: #000;
  color: #fff;
}
</style>
