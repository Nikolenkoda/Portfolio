import React from "react";


const Modal = () => {
  const [show, setShow] = React.useState();

  const showModal = () => setShow(true);


  const modal1 = (
    <div className="modal">
      <div id="open">
        <a class="modal__close" href="#close">X</a>
        <h1>21 age <br />Saratov<br />Front end Developer</h1>
      </div>
    </div>
  );
  return (
    <>
      <a onClick={showModal} href="#open">
        <img className='about-me__image' src="components/image/me.jpg"></img></a>
      {modal1}

    </>

  );
}


export default Modal;