let nextTodoId = 0;
export const addComment = (text) => ({
  type: "ADD_COMMENT",
  userComment: text,
});
