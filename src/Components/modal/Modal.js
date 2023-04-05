import React, { useState } from "react";







export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return(
       <>

    <button 
    className="btn-modal"
    onClick= 
    {toggleModal}
    >
        Open
    </button>
        {modal && ( 
    <div className="modal">
        <div className="overlay">
        <div className="modal-content">
            <h2>Nice Choice!</h2>
            <p> Your game was added to your cart.</p>
            <button 
            className="close-modal"
            onClick={toggleModal}>Close</button>
        </div>
        </div>
    </div>
    )}
     </>

    );
}