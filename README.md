# Redis Caching with Node.js 🚀

This repository contains a simple Express.js application integrated with **Redis** (using the `ioredis` package) to demonstrate **caching**, **TTL (time-to-live)**, and basic **get/set** operations.

---

## 📌 What is Redis?

**Redis** (Remote Dictionary Server) is an in-memory data structure store, commonly used as a **cache**, **message broker**, and **database**. It supports key-value pairs and data structures like lists, sets, and hashes.

---

## 📁 Project Structure
.
├── client.js # Redis client setup using ioredis
├── index.js # Main Express.js server using Redis for API caching
├── ttl.js # Manual example of setting and retrieving a key with TTL
├── package.json # Project metadata and dependencies
├── package-lock.json # Lock file for npm dependencies
└── README.md # Documentation for the project

### 🔍 File Descriptions

- **client.js**
  - Initializes and exports a Redis client using the `ioredis` package.
  - Can be reused across multiple files.

- **index.js**
  - A simple Express server that:
    - On GET `/`, checks if `todos` is cached.
    - If cached → returns it.
    - If not → fetches from `jsonplaceholder.typicode.com`, caches it in Redis with a TTL of 30 seconds, then responds.

- **ttl.js**
  - Demonstrates how to:
    - Set expiry (TTL) manually on a Redis key (`msg:6`).
    - Retrieve and log the value.
    - Useful for learning and testing TTL behavior in Redis.

---

## 🚀 How to Run This Project

### 1. Start Redis Server

If Redis is installed locally:
```bash
redis-server
Or use Docker:

bash
Copy code
docker run --name redis-learn -p 6379:6379 -d redis
 Install Node.js Dependencies
bash
Copy code
npm install
 Start the Express Server
bash
Copy code
node index.js
Visit: http://localhost:9000
🧠 What I Learned
How to use Redis for caching in a Node.js app.

How to connect Redis using ioredis.

The benefits of setting a TTL on cache data.


Using Redis to reduce API calls and improve performance.


---

![Screenshot 2025-05-24 183129](https://github.com/user-attachments/assets/cb88527c-5558-437c-826e-0f98842e82cf)
![Screenshot 2025-05-24 183119](https://github.com/user-attachments/assets/6cfd6f05-fd71-4924-98f8-081dfc1eddf4)






