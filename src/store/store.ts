import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import Thunk, { ThunkMiddleware } from "redux-thunk";

// Actions

// Reducers

// Root Reducer
const reducer = combineReducers({
  //   user: authReducer,
  //   messaging: messagingReducer,
  //   staticData: initReducer,
  //   application: applicationReducer,
  //   uploadContent: uploadContentReducer,
  //   chat: chatReducer,
  //   playlist: playlistReducer,
  //   postComment: postCommentReducer,
  //   explore: exploreReducer,
});

// App Actions
// export type AppActions =
//   | AuthActions
//   | MessagingActions
//   | InitActions
//   | ApplicationActions
//   | UploadContentActions
//   | ChatActions
//   | PlaylistActions
//   | PostCommentActions
//   | ExploreActions;
// App State
// export type AppState = ReturnType<typeof reducer>;

// export const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(Thunk as ThunkMiddleware<AppState, AppActions>)),
// );
