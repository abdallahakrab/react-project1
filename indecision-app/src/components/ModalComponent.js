import React from 'react';
import Modal from 'react-modal';

const ModalComponent = (props) => (
    <div>
     <Modal
      isOpen={!!props.optionSelected}
      contentLabel={"Option decided"}
      onRequestClose={props.closeModal}
     
     >
        <h2>Computer decided:</h2>
        <h1>{props.optionSelected}</h1>
        <button onClick={props.closeModal}>Okay</button>
     </Modal>
    
    </div>
);

export default ModalComponent;