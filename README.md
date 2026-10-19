# 🚀 Express TypeScript MongoDB CRUD API

A clean, scalable, and production-ready RESTful API boilerplate built using **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, and **MongoDB**. This project provides a robust foundation for building full-stack applications with standardized error handling and database CRUD operations.

---

## 🛠️ Tech Stack

* **Language:** TypeScript
* **Runtime Environment:** Node.js
* **Web Framework:** Express.js
* **Database & ORM:** MongoDB & Prisma ORM
* **API Testing & Documentation:** Postman

---
## 🌐 Live Deployment
* **Live API URL:** [https://mern-backend-q43ep6ez6-disentra.vercel.app/](https://mern-backend-q43ep6ez6-disentra.vercel.app/)

## 📂 Project Structure

```text
mernBackend/
├── assets/
│   ├── delete.png
│   ├── get all users.png
│   ├── get data by id.png
│   ├── post.png
│   └── put-update data.png
├── node_modules/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   └── index.ts
│   ├── generated/
│   │   └── prisma/
│   ├── interface/
│   │   └── error.ts
│   ├── middleware/
│   │   ├── AppError.ts
│   │   ├── globalErrorHandler.ts
│   │   └── notFound.ts
│   ├── modules/
│   │   └── user/
│   │       ├── user.controller.ts
│   │       ├── user.route.ts
│   │       └── user.service.ts
│   ├── routes/
│   │   └── routes.ts
│   ├── utlis/
│   │   ├── catchAsync.ts
│   │   ├── prisma.ts
│   │   └── sendResponse.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── prisma.config.ts
├── README.md
└── tsconfig.json

```

---

## 📌 API Endpoints Overview

**Base URL:** `http://localhost:3000/api/v1`

| HTTP Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/v1/users` | Create a new user record |
| `GET` | `/api/v1/users` | Retrieve all user records |
| `GET` | `/api/v1/users/:id` | Retrieve a specific user by ID |
| `PATCH` | `/api/v1/users/:id` | Update an existing user record |
| `DELETE` | `/api/v1/users/:id` | Delete a specific user record |

---

## 🧪 Postman API Test Results & Screenshots

### 1. Create User (`POST /api/v1/users`)
* **Description:** Creates a new user entry in the database.
![Create User Output](./assets/post.png)

### 2. Get All Users (`GET /api/v1/users`)
* **Description:** Fetches all recorded users.
![Get All Users Output](./assets/get%20all%20users.png)

### 3. Get Single User (`GET /api/v1/users/:id`)
* **Description:** Fetches a user record by their unique ObjectId.
![Get Single User Output](./assets/get%20data%20by%20id.png)

### 4. Update User (`PATCH /api/v1/users/:id`)
* **Description:** Updates existing user properties (e.g., `name`, `age`).
![Update User Output](./assets/patch.png)

### 5. Delete User (`DELETE /api/v1/users/:id`)
* **Description:** Deletes a user record permanently from the database.
![Delete User Output](./assets/delete.png)

---

## ⚙️ Quick Start & Setup Guide

### 1. Repository Setup

```bash
git clone https://github.com/hanjala2P/-Express-TypeScript-MongoDB-CRUD-API.git
cd mernBackend

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Environment Configuration

Create a `.env` file in the root directory and configure your variables:

```env
PORT=3000
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/your-database-name?retryWrites=true&w=majority"

```

### 4. Database & Prisma Setup

Push your Prisma schema to MongoDB and generate the Prisma Client:

```bash
npx prisma db push
npx prisma generate

```

### 5. Run Development Server

Start the development server:

```bash
npm run start:dev

```

> Server running at: `http://localhost:3000`

