import React from 'react';
import Modal from 'react-modal';

const ModalComponent = (props) => (
    <div>
     <Modal
      isOpen={!!props.optionSelected}
      contentLabel={"Option decided"}
      onRequestClose={props.closeModal}
      closeTimeoutMS={200}
      className="modal"
     
     >
        <h3 className="modal__title">Computer decided:</h2>
        <p className="modal__body">{props.optionSelected}</p>
        <button onClick={props.closeModal}>Okay</button>
     </Modal>
    
    </div>
);

export default ModalComponent;