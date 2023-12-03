import {makePersisted} from "@solid-primitives/storage";
import {createStore} from "solid-js/store";
import {createContext, useContext} from "solid-js";

/**
 * Interface for representing a Todo item.
 *
 * @property {string} id - Unique identifier for the Todo item.
 * @property {string} text - The task description.
 * @property {boolean} completed - Indicates whether the task is completed.
 */
export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}
interface TodoProviderProps {
    children: any;
}

/**
 * Interface representing the context value for managing Todo items.
 *
 * @property {Todo[]} tasks - Array of Todo items.
 * @property {object} actions - Object containing functions to manipulate Todo items.
 * @property {function} actions.addTodo - Function to add a new Todo item.
 * @property {function} actions.removeTodo - Function to remove a Todo item by its ID.
 * @property {function} actions.toggleTodo - Function to toggle the completion status of a Todo item.
 * @property {function} actions.removeAllCompleted - Function to remove all completed Todo items.
 */
interface TodoContextValue {
    tasks: Todo[];
    actions: {
        addTodo: (newTodo: Todo) => void;
        removeTodo: (taskId: string) => void;
        toggleTodo: (taskId: string) => void;
        removeAllCompleted: () => void;
    };
}

const TodoContext = createContext<TodoContextValue>();

/**
 * Solid context provider for managing Todo items.
 *
 * @param {TodoProviderProps} props - Props for the TodoProvider component.
 * @param {any} props.children - Child elements to be rendered.
 *
 * This allows us to use the context in any component by using the `useTodo` hook.
 */
export function TodoProvider(props: TodoProviderProps) {
    const [tasks, setTodos] = makePersisted(
        createStore<Todo[]>(JSON.parse(localStorage.getItem("tasks")) || [])
    );

    const tasker: TodoContextValue = {
        tasks,
        actions: {
            addTodo: (newTodo: Todo) => {
                setTodos((currentTodos) => [
                    ...currentTodos,
                    {id: Date.now().toString(), completed: false, ...newTodo},
                ]);
            },
            removeTodo: (taskId: string) => {
                setTodos((currentTodos) =>
                    currentTodos.filter((task) => task.id !== taskId)
                );
            },
            toggleTodo: (taskId: string) => {
                setTodos((currentTodos) =>
                    currentTodos.map((task) => {
                        if (task.id === taskId) {
                            return {
                                ...task,
                                completed: !task.completed,
                            };
                        }
                        return task;
                    })
                );
            },
            removeAllCompleted: () => {
                setTodos((currentTodos) =>
                    currentTodos.filter((task) => !task.completed)
                );
            },
        },
    };

    return (
        // Registering the context provider with the context value
        <TodoContext.Provider value={tasker}>
            {props.children}
        </TodoContext.Provider>
    );
}

export function useTodo(): TodoContextValue {
    return useContext(TodoContext);
}
