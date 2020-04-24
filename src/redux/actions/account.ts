import actionCreatorFactory from "typescript-fsa";
import { Action, Dispatch } from "redux";
import {
  signupWithEmail as signupWithEmailApi,
  updateProfile,
  signinWithEmail as signinWithEmailApi,
  logout as logoutApi,
  getCurrentUser as getCurrentUserApi,
} from "../../utils/api";

const actionCreator = actionCreatorFactory();

const signupWithEmailAction = actionCreator.async<
  { email: string; password: string; name: string },
  { id: string; email: string; name: string },
  { code: number; description: string }
>("SIGNUP");

export const signup = (email: string, password: string, name: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch(signupWithEmailAction.started({ email, password, name }));

  try {
    const result = await signupWithEmailApi(
      email,
      password
    );
    const { user } = result;

    if (!user) throw new Error("User id is null");

    await updateProfile(name, user);

    dispatch(
      signupWithEmailAction.done({
        params: { email, password, name },
        result: { id: user.uid, name, email },
      })
    );

    return result;
  } catch (error) {
    dispatch(
      signupWithEmailAction.failed({
        params: { email, password, name },
        error: { code: error.code, description: error.description },
      })
    );

    return error;
  }
};

const signinWithEmailAction = actionCreator.async<
  { email: string; password: string },
  { id: string },
  { code: number; description: string }
>("SIGNIN");

export const signin = (email: string, password: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch(signinWithEmailAction.started({ email, password }));

  try {
    const result = await signinWithEmailApi(email, password);
    dispatch(
      signinWithEmailAction.done({
        params: { email, password },
        result: { id: result.user?.uid },
      })
    );

    return result;
  } catch (error) {
    dispatch(
      signinWithEmailAction.failed({
        params: { email, password },
        error: { code: error.code, description: error.description },
      })
    );

    return error;
  }
};

const logoutAction = actionCreator.async<
  {},
  {},
  { code: number; description: string }
>("LOGOUT");

export const logout = () => async (dispatch: Dispatch<Action>) => {
  dispatch(logoutAction.started({}));

  try {
    const result = await logoutApi();
    dispatch(
      logoutAction.done({
        params: {},
        result: {},
      })
    );

    return result;
  } catch (error) {
    dispatch(
      logoutAction.failed({
        params: {},
        error: { code: error.code, description: error.description },
      })
    );

    return error;
  }
};

type SetAccountPayloadProps = {
  id: string;
  name: string;
};
export const setAccount = actionCreator<SetAccountPayloadProps | null>(
  "SET_ACCOUNT"
);

export const getCurrentUserAction = actionCreator.async<
  {},
  { name: string; id: string },
  { code: number; description: string }
>("GET_CURRENT_USER");

export const getCurrentUser = () => async (dispatch: Dispatch<Action>) => {
  dispatch(getCurrentUserAction.started({}));

  try {
    const result = await getCurrentUserApi();
    dispatch(
      getCurrentUserAction.done({
        params: {},
        result: {
          name: result.name,
          id: result.uid,
        },
      })
    );

    return result;
  } catch (error) {
    dispatch(
      getCurrentUserAction.failed({
        params: {},
        error: { code: error.code, description: error.description },
      })
    );

    return error;
  }
};

const accountActions = {
  setAccount,
  signupWithEmailAction,
  signinWithEmailAction,
  logoutAction,
  getCurrentUserAction,
};

export default accountActions;
