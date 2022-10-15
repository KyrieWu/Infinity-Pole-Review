import { reactive } from "vue";

export default class Comment {
  constructor(field) {
    this.field = field;

    this.state = reactive({
      commentText: "",
      commentTree: this.commentTree,
    });
  }

  get commentTree() {
    return Comment.formatTree(
      JSON.parse(localStorage.getItem(this.field) || "[]")
    );
  }

  static formatTree(data) {
    const result = [];
    const map = {};

    data.forEach((item) => {
      map[item.id] = item;
    });

    data.forEach((item) => {
      const parent = map[item.pid];

      if (parent) {
        (parent.children || (parent.children = [])).unshift(item);
      } else {
        result.unshift(item);
      }
    });

    return result;
  }

  addComment = ({ id, username }) => {
    const commentInfo = {
      id: new Date().getTime(),
      pid: 0,
      uid: id,
      username,
      comment: this.state.commenttext,
    };

    this.setCommnetList(commentInfo);
    this.setCmment(commentInfo);
  };

  setCmment(comment) {
    this.state.commentTree.unshift(comment);
    this.state.commentText = "";
  }

  setCommnetList(comment) {
    const commentList = JSON.parse(localStorage.getItem(this.field) || "[]");
    commentList.unshift(comment);
    localStorage.setItem(this.field, JSON.stringify(commentList));
  }

  addReply = (item, replyText, { id, username }) => {
    const replyInfo = {
      id: new Date().getTime(),
      pid: item.id,
      uid: id,
      username,
      comment: replyText,
    };

    this.setCommnetList(replyInfo);
    this.setReply(item, replyInfo);
  };

  setReply(item, reply) {
    (item.children || (item.children = [])).unshift(reply);
  }
}
