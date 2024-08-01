// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';

const FilterModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Example Modal"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                },
            }}
        >
            <h2>Hello, I'm a Modal</h2>
            <p>This is a simple modal example.</p>
            <button onClick={onRequestClose}>Close Modal</button>
        </Modal>
    );
};

export default FilterModal;

