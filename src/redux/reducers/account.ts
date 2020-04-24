import { reducerWithInitialState } from "typescript-fsa-reducers";
import accountActions from "../actions/account";

export type AccountState = {
  id: string;
  name?: string;
} | null;

const initialState = null as AccountState;

const accountReducer = reducerWithInitialState(initialState)
  .case(accountActions.setAccount, (state, payload) => {
    return payload ? { ...payload } : null;
  })
  .case(accountActions.getCurrentUserAction.done, (state, payload) => {
    return { ...state, ...payload.result };
  })
  .case(accountActions.signupWithEmailAction.done, (state, payload) => {
    return {  ...state, ...payload.result }
  });

export default accountReducer;
