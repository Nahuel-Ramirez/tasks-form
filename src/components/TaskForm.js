import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { v1 as uuidv1 } from "uuid";

const TaskForm = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createTask = (object) => {
    addTask({ ...object, id: uuidv1().slice(1, 6) });
  };
  return (
    <>
      <Form
        className="form-task__container"
        onSubmit={handleSubmit(createTask)}
      >
        {/*Handle submit agarra las validaciones del hook, y si pasan, ejecuta la funcion createTask*/}
        <Form.Group className="mb-3">
          <Form.Label>Nombre de la tarea</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {/* Register lo que hace es asignar un name, un onChange y un ref. */}
          {errors?.name && <span>*El campo es obligatorio</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion de la tarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Descripcion..."
            {...register("description", { required: true, maxLength: 120 })}
          />
          {errors?.description && <span>*El campo es obligatorio</span>}
        </Form.Group>
        <Button variant="success" type="submit">
          Agregar tarea
        </Button>
      </Form>
    </>
  );
};

export default TaskForm;
