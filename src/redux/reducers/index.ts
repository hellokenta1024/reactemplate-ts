import { combineReducers } from "redux";
import modals, { ModalState } from "./modals";

import "react-redux";

export type AppState = {
  modals: ModalState;
};

declare module "react-redux" {
  interface DefaultRootState extends AppState { }
}

const reducer = combineReducers<AppState>({
  modals,
});

export default reducer;
