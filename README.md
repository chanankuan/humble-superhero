# Humble Superhero API

### Team Player Attitude

As a team player, I believe collaboration is key to improving the product and streamlining development processes. If I were to work on this project with a teammate, we would divide responsibilities such as frontend development, backend logic, and database implementation. We would communicate regularly to ensure both parts of the project are well-integrated. For example, while one person focuses on improving the API (adding more endpoints and optimizing the database), the other could work on building a user-friendly frontend and handling user interactions.

### Eagerness to Learn

If I had more time, I would explore the following improvements:

- **Enhance Database Integration**: I would implement a proper relational database like PostgreSQL or MongoDB, along with database migrations. This would make the project more scalable and better suited for real-world applications.
- **Frontend Development**: I would create a user-friendly React interface to interact with the superhero API. Users would be able to dynamically add superheroes and see the list sorted in real-time, making the app more engaging.
- **Implementing Unit and Integration Tests**: I'd expand the testing suite by adding more coverage, particularly for edge cases (e.g., invalid superhero data). This would ensure the API functions correctly under all conditions.
- **Authentication and Authorization**: I would implement authentication so that only authorized users can add superheroes to the system, improving the overall security of the application.

## Humility and Communication

I strive to keep my code simple, clear, and easy to understand. I've made sure to include comments where necessary, explaining the logic behind certain decisions and outlining any assumptions. I also want to emphasize the importance of good communication throughout the development process, as it ensures that everyone is aligned and that the project runs smoothly.

## Overview

## Backend

This API allows users to manage superheroes, each with a name, superpower, and a humility score. The superheroes are stored in an SQLite database, and the API provides endpoints to add and fetch superheroes.

### Endpoints

#### 1. `GET /api/superheroes`

**Response**:

```json
[
  {
    "id": 1,
    "name": "Superhero Name",
    "superpower": "Superpower Description",
    "humility": 5,
    "createdAt": "2025-02-10T22:00:00Z"
  }
]
```

#### 2. `POST /api/superheroes`

This endpoint allows you to add a new superhero.

**Request Body**:

```json
{
  "name": "Superhero Name",
  "superpower": "Superpower Description",
  "humility": 5
}
```

**Response**:

```json
{
  "id": 1,
  "name": "Superhero Name",
  "superpower": "Superpower Description",
  "humility": 5,
  "createdAt": "2025-02-10T22:00:00Z"
}
```

### Setup and Installation

#### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- SQLite (The database is already included)

#### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chanankuan/humble-superhero.git
   cd humble-superhero/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run start
   ```

4. The API will be available at http://localhost:3000

### Testing

This project uses **Jest** for testing.

#### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

## Frontend

The frontend is built using React with TypeScript and connects to the backend API. It allows users to:

- Add new superheroes with name, superpower, and humility score
- View a list of superheroes displayed dynamically

The frontend provides a user-friendly form and displays a grid of superheroes, showing their name, superpower, and humility score. It also includes validation to ensure that data is entered correctly.

#### Installation

1. Clone the repository (if not cloned before):

   ```bash
   git clone https://github.com/chanankuan/humble-superhero.git
   cd humble-superhero/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run dev
   ```

4. The API will be available at http://localhost:5173
