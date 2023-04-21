import { Button, Modal } from "react-bootstrap";

const TaskModal = ({ tasks, showModal, handleClose }) => {
  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{tasks.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{tasks.description}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    </>
  );
};

export default TaskModal;
