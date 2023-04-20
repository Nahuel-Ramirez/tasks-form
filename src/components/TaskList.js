const TaskList = ({ tasks }) => {
  return (
    <>
      <h2>Tareas</h2>
      {tasks?.length > 0 ? (
        tasks.map((task) => {
          return <h4>{task.name}</h4>;
        })
      ) : (
        <h4>No hay tareas para mostrar</h4>
      )}
    </>
  );
};

export default TaskList;
