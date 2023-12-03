// Import necessary dependencies and components
import type { Component } from 'solid-js';
import MyFooter from "./features/shared/MyFooter";
import CheckListItem from "./features/shared/CheckListItem";
import jadeJpg from "./assets/jade.jpg";

// Define the App component
const App: Component = () => {
    return (
        // Main container with flex column layout and background color
        <div class="min-h-screen flex flex-col bg-gray-100">
            {/* Centered content */}
            <div class="m-auto">
                <div class="min-h-full  flex items-center justify-center">
                    {/* Content container */}
                    <div class="">
                        {/* Page title */}
                        <h1 class="text-4xl font-bold mb-4">
                            {/* Gradient text effect */}
                            <span
                                class="bg-gradient-to-br text-transparent bg-clip-text from-green-400 to-blue-600">
                                Welcome to my CS50 Todo List!
                            </span>
                        </h1>

                        {/* Logo image */}
                        <img
                            class="mx-auto h-48 w-48 rounded-full"
                            src={jadeJpg}
                            alt="Todo List Logo"
                        />

                        {/* Features list */}
                        <h2 class="text-xl text-gray-600 mb-8 font-bold">
                            Features
                        </h2>
                        <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
                            {/* CheckListItem component for each feature */}
                            <CheckListItem text="Persistent storage" />
                            <CheckListItem text="Routing" />
                            <CheckListItem text="Add todo" />
                            <CheckListItem text="Toggle todo" />
                            <CheckListItem text="Remove todo" />
                            <CheckListItem text="Focus input field after submit" />
                            <CheckListItem text="Remove all completed todos" />
                            <CheckListItem text="Remove all feature only when completed todo" />
                        </ul>

                        {/* Explore Todo List button */}
                        <a href="/todos" class="flex justify-center">
                            {/* Stylish button */}
                            <button
                                class="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                {/* Button text */}
                                <span
                                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Explore Todo List
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer component */}
            <MyFooter/>
        </div>
    );
};

// Export the App component
export default App;
