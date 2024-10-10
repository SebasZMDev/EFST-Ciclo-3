import '../components/ComStyles.css'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import CustomBtn from '../components/CustomBtn';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');
  const openModal = (content:string) => {
    setModalContent(content);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalContent('');
  };
  const Modal = () => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-general">
            <div className="modal-bg">
            </div>
            <div className="modal-div">
                <div className="modal-text">{modalContent}</div>
                <CustomBtn text='Cerrar' onClick={closeModal}/>
            </div>
        </div>,
      document.body
    );
  };
  return { openModal, closeModal, Modal };
};
export default useModal;