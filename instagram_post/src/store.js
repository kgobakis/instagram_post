import { createStore } from "redux";
import rootReducer from "./reducers";

/**
 * Note: Where's your initial state? And more importantly... what should your state look like? It can't just be the mockData array, of course.
 */
const store = createStore(rootReducer);

export default store;
