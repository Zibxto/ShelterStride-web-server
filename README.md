# ShelterStride API

Welcome to the ShelterStride API! This API serves as the backend for an innovative initiative addressing homelessness and providing housing solutions for disadvantaged individuals and families within society. ShelterStride is an NGO dedicated to giving homes to disadvantaged persons.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Error Handling](#error-handling)
- [Contributors](#contributors)

## Introduction

This API is built using Express.js, Passport.js for authentication, and Sequelize as the ORM for interacting with the database. It provides endpoints for user authentication, user management, donations, and property management.

## Installation

To run the ShelterStride API locally, follow these steps:

1. Clone this repository:

    ```bash
    git clone <https://github.com/Zibxto/ShelterStride-web-server.git>
    ```

2. Install dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the root directory and define the following environment variables:

    ```plaintext
    DB_HOST=
    DB_USER=
    DB_PASSWORD=
    DB_NAME=
    PORT=
    JWT_SECRET=
    ```

4. Run the server:

    ```bash
    npm start
    ```

## Usage

Once the server is running, you can access the API endpoints using tools like Postman or by integrating them into your frontend application. The API provides routes for user authentication, user management, donations, and property management.

## Routes

- **POST /api/v1/signup**: Sign up a new user.
- **POST /api/v1/login**: Log in a user and generate a JWT token.
- **GET /api/v1/users**: Get all users (authenticated).
- **GET /api/v1/users/:id**: Get a single user by ID (authenticated).
- **PUT /api/v1/users/:id**: Update a user's information (authenticated).
- **DELETE /api/v1/users/:id**: Delete a user (authenticated).
- **GET /api/v1/donations**: Get all donations (authenticated).
- **POST /api/v1/donations**: Create a new donation (authenticated).
- **GET /api/v1/properties**: Get all properties (authenticated).
- **POST /api/v1/properties**: Create a new property (authenticated).

## Error Handling

The API handles errors gracefully and returns appropriate error messages. For example, if a user tries to sign up with an email that already exists, they will receive a "Email already exists" message. Additionally, other error messages are returned for other types of errors.

## Contributors

Special thanks to the contributors who have helped make this project better!

- **[Christian Aziba](mailto:christianaziba@gmail.com)**
  - Email: christianaziba@gmail.com.com
  - [LinkedIn](https://www.linkedin.com/in/christianaziba)

- **[Abisola Majeed](mailto:abisola.majeed@gmail.com)**
  - Email: Abisola Majeed
  - [LinkedIn](https://www.linkedin.com/in/abisola-majeed-55a8a8192/)
