import { useSelector, useDispatch } from "react-redux"
import modalActions from "../redux/actions/modals";

const useModal = (id: string): [{ show: boolean, meta?: any }, (show: boolean, meta?: any) => void] => {
  const dispatch = useDispatch()
  const modal = useSelector((state) => state.modals[id]);
  const setShow = (show: boolean, meta?: any) =>
    dispatch(modalActions.setModalShow({ id , show, meta }));

  return [modal, setShow]
}

export default useModal;
