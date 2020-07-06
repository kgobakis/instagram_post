import { mockData } from "../mockData/mock";

const comments = (state = mockData, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          id: randomId(),
          username: action.username,
          userComment: action.userComment,
          avatar: action.avatar,
          timePosted: action.timePosted,
          commentLikes: action.commentLikes,
          children: [],
        },
      ];
    case "ADD_REPLY":
      let oldState = Object.assign(state);
      // while(oldState.)
      //NEED SOME WAY TO DETECT WHICH COMMENT WAS CLICKED ON
      return [
        ...state,
        {
          id: randomId(),
          username: action.username,
          userComment: action.userComment,
          avatar: action.avatar,
          timePosted: action.timePosted,
          commentLikes: action.commentLikes,
          children: [],
        },
      ];
    case "REMOVE_COMMENT":
      return [
        ...state,
        {
          id: randomId(),
          username: action.username,
          userComment: action.userComment,
          avatar: action.avatar,
          timePosted: action.timePosted,
          commentLikes: action.commentLikes,
          children: [],
        },
      ];
    default:
      return state;
  }
};
var randomId = function () {
  return Math.round(Math.random() * 10);
};
export default comments;
