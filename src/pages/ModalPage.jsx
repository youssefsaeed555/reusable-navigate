import React, { useState } from "react";
import Modal from "../components/Modal";
import Buttons from "../components/Buttons";

function ModalPage() {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const actionBar = (
    <div>
      <Buttons primary onClick={handleClose}>
        Ok
      </Buttons>
    </div>
  );
  const modal = (
    <Modal handleClose={handleClose} actionBar={actionBar}>
      <p>Here is some import info</p>
    </Modal>
  );
  return (
    <>
      <Buttons primary onClick={handleClick}>
        Open Modal !
      </Buttons>
      {openModal && modal}
    </>
  );
}

export default ModalPage;
