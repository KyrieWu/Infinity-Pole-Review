<template>
  <div>
    <p>
      <textarea v-model="state.commenttext"></textarea>
    </p>
    <p>
      <button @click="addComment(userinfo)">提交评论</button>
    </p>
  </div>
  <div>
    <ul>
      <comment-comp
        :data="state.commentTree"
        @add-Reply="addReply"
        :user-info="$store.state.userInfo"
      ></comment-comp>
    </ul>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import CommentComp from "./CommentComp";

import Comment from "./comment";

const { state, addReply, addComment } = new Comment("one");

const store = useStore();

const userinfo = computed(() => {
  return store.state.userInfo;
});

// const state = reactive({
//   commenttext: "",
//   commentTree: formatTree(getComment("one")),
// });

// const addComment = () => {
//   const { id, username } = store.state.userInfo;
//   const commentInfo = {
//     id: new Date().getTime(),
//     pid: 0,
//     uid: id,
//     username,
//     comment: state.commenttext,
//   };

//   setCommnet("one", commentInfo);
//   state.commentTree.push(commentInfo);
//   state.commenttext = "";
// };

// function getComment(field) {
//   return JSON.parse(localStorage.getItem(field) || "[]");
// }

// function setCommnet(field, comment) {
//   const commentList = JSON.parse(localStorage.getItem(field) || "[]");
//   commentList.unshift(comment);
//   localStorage.setItem(field, JSON.stringify(commentList));
// }

// const addReply = (item, replyText) => {
//   const { id, username } = store.state.userInfo;

//   const replyInfo = {
//     id: new Date().getTime(),
//     pid: item.id,
//     uid: id,
//     username,
//     comment: replyText,
//   };

//   (item.children || (item.children = [])).unshift(replyInfo);
//   setCommnet("one", replyInfo);
// };

// function formatTree(data) {
//   const result = [];
//   const map = {};

//   data.forEach((item) => {
//     map[item.id] = item;
//   });

//   data.forEach((item) => {
//     const parent = map[item.pid];

//     if (parent) {
//       (parent.children || (parent.children = [])).unshift(item);
//     } else {
//       result.unshift(item);
//     }
//   });

//   return result;
// }
</script>

<style lang="scss" scoped></style>
