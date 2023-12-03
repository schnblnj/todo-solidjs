# Solid.js Todo App
#### Video Demo:  <URL HERE>
#### Description:
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
- Mark a todo as completed
- Delete a todo
- Clear all completed todos
- Persist todos in local storage

## Stack

- [Solid.js](https://www.solidjs.com/)
  - After looking at Javascript, React, Angular, and other frameworks, I decided to use Solid.js because it is a new framework that is based on React and has a similar API. I wanted to learn something new and Solid.js seemed like a good choice.
- [Tailwind CSS](https://tailwindcss.com/)
  - I used Tailwind CSS because it is a utility-first CSS framework that is easy to use and has a lot of features.
- [Vite](https://vitejs.dev/)
  - Vite was built for Solid.js and is a fast build tool by default on the template project.
- [TypeScript](https://www.typescriptlang.org/)
  - Starting with C programming, I have always liked static typing. I used TypeScript because it is a superset of JavaScript that adds static typing to the language.

## Directory Structure

### assets

Contains static assets such as images for the stack or my profile picture.

### features

#### todo

Contains the main features of the app. Here we only have the simple todo,
but I would consider adding a folder called "login" if I add authentication.

#### shared


Contains shared components as a CheckListItem or the app Footer.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
