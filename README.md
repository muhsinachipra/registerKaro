# Task Management Application

## Overview
This project is a Task Management Application built with React. It allows users to create, update, delete, and manage tasks efficiently. The application features a responsive design and includes drag-and-drop functionality for task reordering.

## Features
- Create, update, and delete tasks.
- Mark tasks as complete or incomplete.
- Filter tasks by status (All, Completed, Incomplete).
- Sort tasks by creation date or priority.
- Responsive design for both mobile and desktop screens.
- Drag-and-drop functionality for reordering tasks.
- Persistent storage of tasks using local storage.

## Technologies Used
- React
- React Router
- CSS
- Local Storage
- Jest and React Testing Library for unit testing

## File Structure
```
task-management-app
├── src
│   ├── components
│   │   ├── TaskCard.js
│   │   ├── TaskForm.js
│   │   ├── TaskList.js
│   │   └── TaskFilter.js
│   ├── pages
│   │   ├── Home.js
│   │   └── TaskDetail.js
│   ├── utils
│   │   └── localStorage.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── assets
│       └── logo.png
├── __tests__
│   ├── TaskCard.test.js
│   ├── TaskForm.test.js
│   ├── TaskList.test.js
│   └── Home.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd task-management-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage
- Navigate to the home page to view the task list.
- Use the form to create new tasks or edit existing ones.
- Use the filter and sort options to manage the task list.
- Drag and drop tasks to reorder them.

## Testing
Run the unit tests using:
```
npm test
```

## License
This project is licensed under the MIT License.