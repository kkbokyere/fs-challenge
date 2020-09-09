import Modal from '@material-ui/core/Modal';
import React, {ReactElement} from "react";
import styles from './SimpleModal.module.scss'

type Props = {
    children: ReactElement
    openModal: boolean
    handleClose: () => void
    title?: string
}

const SimpleModal = ({ children, openModal, handleClose, title }: Props) => {
    return(
        <Modal
            className={styles.modal}
            data-testid="new-device-modal"
            open={openModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >

            <div className={styles.modalContent}>
                <h3>{title}</h3>
                {children}
            </div>
        </Modal>
    )
};

export default SimpleModal;
