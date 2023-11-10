import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useState } from "react";
import {
  type Todo as TodoType,
  type TodoId,
  type TodoTitle,
  type FilterValue,
} from "./types";
import { TODO_FILTERS } from "./consts";

const mockTodos = [
  { id: "1", title: "Ver la Champions", completed: true },
  { id: "2", title: "Aprender React con TS", completed: false },
  { id: "3", title: "Sacar Ticket para Luis Miguel", completed: false },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );
  const hanldeAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = { id: crypto.randomUUID(), title, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const hanldeCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todos) => !todos.completed);
    setTodos(newTodos);
  };
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });
  return (
    <div className="todoapp">
      <Header onAddTodo={hanldeAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={hanldeCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
