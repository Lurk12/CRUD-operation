# HNG-TASK-2

# People API

A simple Express.js REST API for managing people. This project demonstrates basic CRUD operations and error handling in a Node.js application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Custom Errors](#custom-errors)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Postman or a similar tool for testing the API

### Installation

1. Clone the repository:

### Install dependencies:
npm install

- Create a .env file in the project root directory with your MongoDB connection URI:
.env
MONGO_URI=your-mongodb-connection-uri
PORT=1335

### Start the server:
npm start

### Usage
- API Endpoints
GET /api: Get a list of all people.
POST /api: Create a new person.
GET /api/:id: Get a single person by their ID.
PATCH /api/:id: Update a person by their ID.
DELETE /api/:id: Delete a person by their ID.

Examples:
### To create a new person, make a POST request to:
- http://localhost:1335/api
### Request Body:
json
{
  "name": "John Doe"

}

### To get a person by ID, make a GET request to:
http://localhost:1335/api/12345


### To update a person by ID, make a PATCH request to:
http://localhost:1335/api/12345

### Request Body:
json
{
  "name": "Updated Name"
}


### To delete a person by ID, make a DELETE request to:
http://localhost:1335/api/12345


### Error Handling
The API handles errors gracefully. It provides meaningful error messages and status codes for various scenarios, including invalid requests and resource not found.

### Custom Errors
You can extend the custom error handling by creating your custom error classes. For example, CustomAPIError is used to handle specific errors.

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = statusCode;
  }
}


