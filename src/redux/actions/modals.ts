import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

type ModalActionPayloadProps = {
  id: string;
  show: boolean;
  meta?: any;
}

const modalActions = {
  setModalShow: actionCreator<ModalActionPayloadProps>('SET_MODAL_SHOW')
};

export default modalActions;
