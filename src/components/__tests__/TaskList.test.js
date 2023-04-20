import { render, screen } from "@testing-library/react";
import TaskList from "../TaskList";

describe("TaskList", () => {
  //Caso de prueb
  test("Should render task List information", () => {
    const tasks = [
      { id: 1, name: "tarea 1", description: "Description mosk", done: false },
    ];
    //Con render virtualizo el componente
    render(<TaskList tasks={tasks} />);
    screen.getByText(/tarea 1/i);
  });

  test("Should render empty component", () => {
    const tasks = [];
    render(<TaskList tasks={tasks} />);
    screen.getByText(/no hay tareas para mostrar/i);
  });

  test("Shoul render basic component", () => {
    render(<TaskList />);
  });
});
