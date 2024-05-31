import ReactModal from "react-modal";
import styles from "./styles.module.css";

ReactModal.setAppElement("#root");

interface IProps {
  isOpen: boolean;
  closeModal?: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, closeModal, children }: IProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={styles.body}
      overlayClassName={styles.overlay}
      htmlOpenClassName={styles.html}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
