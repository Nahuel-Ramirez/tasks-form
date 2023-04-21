import { useState } from "react";
import { Button } from "react-bootstrap";
import TaskModal from "./TaskModal";

const TaskList = ({ tasks, deleteTask }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const newTasks = () => {
    deleteTask(tasks);
  };

  return (
    <>
      <h2>Tareas</h2>

      {tasks?.length > 0 ? (
        tasks.map((task) => {
          return (
            <div key={task.id}>
              <h4>{task.name}</h4>
              <Button onClick={handleShow} variant="success">
                Ver
              </Button>
              <Button onClick={newTasks} variant="danger">
                Borrar
              </Button>
              {showModal && (
                <TaskModal
                  tasks={task}
                  showModal={showModal}
                  handleClose={handleClose}
                />
              )}
            </div>
          );
        })
      ) : (
        <h4>No hay tareas para mostrar</h4>
      )}
    </>
  );
};

export default TaskList;
