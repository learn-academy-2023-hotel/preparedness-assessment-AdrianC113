import React from "react";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const ModalComponent = ({toggle, name}) => {
  return (

        <Modal isOpen={toggle}>
        <ModalHeader toggle={toggle}>Hello there, {name}!</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        {/* <ModalFooter>
        <Button color="danger" onClick={() => {toggle(false)}}>Close</Button>
        </ModalFooter> */}
        </Modal>

  )
}

export default ModalComponent
