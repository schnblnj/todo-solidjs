import { useTodo } from "../../domain/services/TodoService";
import { createSignal } from "solid-js";

export default function AddTodoForm() {
    const { actions: { addTodo } } = useTodo();
    const [newTodo, setNewTodo] = createSignal<string>("");


    const handleSubmit = (event: Event) => {
        event.preventDefault();

        // Check if newTodo is not empty before adding the task
        if (newTodo().trim() !== "") {
            addTodo({
                id: Date.now().toString(),
                text: newTodo(),
                completed: false,
            });

            // Clear the input field after submitting
            setNewTodo("");

            // set focus on input field after submitting
            document.querySelector("input")?.focus();
        }
    };

    return (
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto">
            <h2 class="text-2xl mb-4 font-bold text-gray-800 dark:text-white">
                Add New Todo
            </h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-4">
                    <input
                        autofocus
                        class="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        name="description"
                        type="text"
                        placeholder="Todo description"
                        value={newTodo()}
                        onInput={(e) => setNewTodo(e.target.value)}
                    />
                </div>
                <button
                    class="bg-cyan-900 hover:bg-cyan-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
