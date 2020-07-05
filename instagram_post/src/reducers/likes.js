const likes = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          username: action.username,
          userComment: action.userComment,
        },
      ];

    default:
      return state;
  }
};

export default likes;
