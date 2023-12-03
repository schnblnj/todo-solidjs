import type { Component } from 'solid-js';
import solidLogo from '../../assets/solidjs-logo.png';
import tailwindcssLogo from '../../assets/tailwindcss-logo.png';
import viteLogo from '../../assets/vite-logo.png'
import typescriptLogo from '../../assets/typescript-logo.png';

export const MyFooter: Component = () => {
    return (
        <footer class="bg-gray-800 text-white py-4 text-center">
            <ul class="list-none pl-0">
                <li class="mb-2">
                    <img
                        class="inline-block h-5 w-5 mr-2"
                        src={solidLogo}
                        alt="Solid.js Logo"
                    />
                    Solid.js
                </li>
                <li class="mb-2">
                    <img
                        class="inline-block h-5 w-5 mr-2"
                        src={tailwindcssLogo}
                        alt="TailwindCSS Logo"
                    />
                    TailwindCSS
                </li>
                <li class="mb-2">
                    <img
                        class="inline-block h-5 w-5 mr-2"
                        src={viteLogo}
                        alt="Vite Logo"
                    />
                    Vite
                </li>
                <li class="mb-2">
                    <img
                        class="inline-block h-5 w-5 mr-2"
                        src={typescriptLogo}
                        alt="TypeScript Logo"
                    />
                    TypeScript
                </li>
            </ul>
        </footer>
    );
};

export default MyFooter;
