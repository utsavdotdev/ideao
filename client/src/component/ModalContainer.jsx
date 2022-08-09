import React from 'react'
import "../css/ModalContainer.css"
const ModalContainer = ({children,style}) => {
  return (
    <>
    <div className="modal_container">
        <div className="modal" style={style}>
             {children}
        </div>
    </div>
    </>
  )
}

export default ModalContainer