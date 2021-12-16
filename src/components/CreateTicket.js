import React, { useState, useEffect } from 'react'

const CreateTicket = () => {
    const [activeModal, setActiveModal] = useState(false)

    const handleClick = () => {
        setActiveModal(true)
    };
    
    return (
      <div class="modal">
          <div class="modal-background"></div>
          <div class="modal-content">
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
    );
}

export default CreateTicket