# back-end

# 🧠 SATIM Backend API

A modular and scalable Express.js + MongoDB backend built with an MVC architecture. This API powers core functionalities like user authentication, transactions, biometric verification, chat guidance, dashboards, and more.

---

## 🚀 Features

- 🧑‍💼 User login and face authentication
- 💳 Transaction processing and prediction
- 🤖 Chatbot interface for guiding users
- 🧬 Biometric authentication (face scanning simulation)
- 📊 Dashboard statistics and recommendations
- 🔔 Notifications with custom messages
- 📝 Feedback submission system
- 🧱 Organized with MVC folder structure

---

## 📁 Project Structure

├── controllers/
├── models/
├── routes/
├── db.js
├── app.js
├── server.js
├── .env
└── README.md


---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/satim-challenge/back-end.git
cd back-end
```
### 2\. Install dependencies

bash

CopierModifier

`npm install`

### 3\. Configure environment variables

Create a `.env` file in the root with the following content:

env

CopierModifier

`PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority`

Replace `<username>`, `<password>`, and `<cluster>` with your actual MongoDB Atlas credentials.

* * * * *

### 4\. Run the server

bash

CopierModifier

`npm run dev`

or

bash

CopierModifier

`npx nodemon server.js`

* * * * *

📡 API Endpoints
----------------

### 🔐 Users

-   `POST /api/users/login`

-   `POST /api/users/authenticate`

### 💰 Transactions

-   `POST /api/transactions/process`

-   `GET /api/transactions/predict`

### 🤖 Chatbot

-   `GET /api/chatbot/start`

-   `GET /api/chatbot/guide`

### 🧬 BiometricAuth

-   `GET /api/biometric/scan`

-   `GET /api/biometric/verify`

### 📊 Dashboard

-   `GET /api/dashboard/stats`

-   `GET /api/dashboard/recommend`

### 🔔 Notification

-   `POST /api/notifications/alert`

### 📝 Feedback

-   `POST /api/feedback/submit`

* * * * *

📦 Tech Stack
-------------

-   **Node.js** / **Express.js**

-   **MongoDB Atlas** / **Mongoose**

-   **MVC Architecture**

-   **REST API**

-   **dotenv** for environment management

-   **morgan** & **cors** for dev experience

* * * * *

👑 Author
---------

Made with love by **data wizards team ** 
