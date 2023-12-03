/* @refresh reload */
import './index.css';
import {render} from 'solid-js/web';

import App from './App';
import {Route, Router, Routes} from "@solidjs/router";
import TodoPage from "./features/todo/ui/pages/TodoPage";
import {TodoProvider} from "./features/todo/domain/services/TodoService";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(
    () => (
        <TodoProvider>
            <Router>
                <Routes>
                    <Route path="/" component={App} />
                    <Route path={"/todos"} component={TodoPage} />
                </Routes>
            </Router>
        </TodoProvider>
    ),
    root!
);
