// let nextTodoId = 0;
export const addComment = (text) => ({
  /**
   * Note: Why aren't you adding every field you expect in the reducers? Is this just unfinished?
   */
  type: "ADD_COMMENT",
  userComment: text,
});
