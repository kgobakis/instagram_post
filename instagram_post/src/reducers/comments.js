import { mockData } from "../mockData/mock";

/**
 * Note: I would not recommend using an array as your state like you are here. It would be better to do { comments: mockData } instead of mockData itself. 
 * Why? This is how Redux works: if your combineReducers looks like this: 
 * combineReducers({ comments, likes }) 
 * then you store will look like this: 
 * {
 *   comments: ....,
 *   likes: ....
 * }
 */

const comments = (state = mockData, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        /**
         * Note: It looks like you repeat this code block several times. Maybe you could abstract it out?
         */
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
