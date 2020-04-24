import { combineReducers } from "redux";
import modals, { ModalState } from "./modals";
import account, { AccountState } from "./account";

import "react-redux";

export type AppState = {
  modals: ModalState;
  account: AccountState;
};

declare module "react-redux" {
  interface DefaultRootState extends AppState {}
}

const reducer = combineReducers<AppState>({
  modals,
  account,
});

export default reducer;
