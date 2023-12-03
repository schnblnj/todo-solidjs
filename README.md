# Solid.js Todo App

### Video Demo: https://youtu.be/RnH5BY1ExK0

### Description:
A simple Todo app built with Solid.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

To run the app locally, follow these steps:

```bash
git clone https://github.com/schnblnj/todo-solidjs.git
cd solid-todo-app
npm install
npm run dev
```

## Usage

After completing the installation steps, you can run the app using the following command:

```bash
npm run dev
```

Visit http://localhost:3000 in your web browser to use the Todo app.

## Features

- Add a new todo
  - Rhis is the most basic feature, you can add a new item on the list. With the autofocus you can straight away start tiping when entering the app.
- Mark a todo as completed
    - You can complete one or multiple todos.
- Delete a todo
    - You can remove one todo at the time.
- Clear all completed todos
    - You can select multiple todos and remove all of them at the same time.
- Persist todos in local storage
    - You can close the app and go back, your todos that were not deleted are still there.

## Stack

- [Solid.js](https://www.solidjs.com/)
  - I'm working as a product manager in a tech company, and in a middle of discussion, the topic of solid.js came up and I decided to explore that for my final proejct as it sounded very interesting, it is a new framework that is based on React and has a similar API. We will potentially use it at work and hence it seemed like a good choice. This choice however was very bold of myself as I absolutely underestimated the time and effort, I got humbled very quickly, but I managed to do something simple and that works.
- [Tailwind CSS](https://tailwindcss.com/)
  - I used Tailwind CSS because it is a utility-first CSS framework that is easy to use and has a lot of features.
- [Vite](https://vitejs.dev/)
  - Vite was built for Solid.js and is a fast build tool by default on the template project.
- [TypeScript](https://www.typescriptlang.org/)
  - Starting with C programming, I have always liked static typing. I used TypeScript because it is a superset of JavaScript that adds static typing to the language.


## Directory Structure

### assets

Contains static assets such as images for the stack or my profile picture.

#### todo

Contains the main features of the app. Here we only have the todo,
but I would consider adding a folder called "login" if I add authentication.
You can add and delete items. The best feature in my opinion is the perstistence, as you can close the app, but when running it again, the todos that were not deleted are still tehre.

#### shared

Contains shared components as a CheckListItem or the app Footer.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
