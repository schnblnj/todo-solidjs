import {For, Show} from "solid-js";
import {useTodo} from "../../domain/services/TodoService";

export default function TodoList() {
    const {tasks, actions: {removeTodo, toggleTodo, removeAllCompleted}} = useTodo();

    return (
        <div
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto">
            <span class="text-2xl mb-4 font-bold text-gray-800 dark:text-white flex justify-between items-center">
                <h2>Task List</h2>
                <Show when={tasks.filter((task) => task.completed).length > 0}>
                    <span
                        class="text-sm text-gray-500 dark:text-gray-400 cursor-pointer"
                        onClick={removeAllCompleted}
                    >
                         Remove all completed
                    </span>
                </Show>
            </span>
            <ul>
                <For each={tasks}>{(task) => (
                    <li class="flex items-center justify-between border-b py-2">
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTodo(task.id)}
                                class="accent-cyan-900"
                            />
                            <span
                                class={`text-gray-700 dark:text-white ${task.completed ? 'line-through' : ''}`}
                            >
                            {task.text}
                          </span>
                        </div>
                        <button
                            class="text-red-500 hover:text-red-700 focus:outline-none"
                            onClick={() => removeTodo(task.id)}
                        >
                            Remove
                        </button>
                    </li>
                )}</For>
            </ul>
        </div>
    );
}
