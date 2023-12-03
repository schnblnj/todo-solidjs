import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

// Define the TodoPage component
export default function TodoPage() {
    return (
        // Main container with flex column layout
        <div class="flex flex-col items-center justify-start min-h-screen pt-8">
            {/* Page title */}
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Todo App
            </h1>

            {/* Todo input form and list */}
            <div class="w-full max-w-md">
                <AddTodoForm />
                <TodoList />

                {/* Button to go back home */}
                <a href="/" class="flex justify-center">
                    <button
                        // Styling for the button
                        class="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        {/* Button text */}
                        <span
                            // Styling for the button text
                            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Go back Home
                        </span>
                    </button>
                </a>
            </div>
        </div>
    );
}
