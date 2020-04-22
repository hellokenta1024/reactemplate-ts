import { reducerWithInitialState } from 'typescript-fsa-reducers';
import modalActions from '../actions/modals';

export type ModalState = {
  [key: string]: { show:boolean, meta?: any };
}

const initialState: ModalState = {
  login: { show: false },
};

const modalsReducer = reducerWithInitialState(initialState)
  .case(modalActions.setModalShow, (state, { id, show, meta }) => {
    return { ...state, [id]: { show, meta } }
  });

export default modalsReducer
