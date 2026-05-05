# 🏥 Care Connects - Full-Stack Hospital Management & Telemedicine Platform

<p align="center">
  <img src="https://i.ibb.co/WskKr7P/cover-img.jpg" alt="Care Connects Banner" width="100%" />
</p>

<p align="center">
  <a href="https://care-connects.web.app"><strong>🌐 Live Site Demo</strong></a> |
  <a href="https://github.com/rahyanakil/Care-Connects-client"><strong>💻 Client Repo</strong></a> |
  <a href="https://github.com/rahyanakil/Care-Connects-server"><strong>🖥️ Server Repo</strong></a>
</p>

---

## 📝 Project Overview
**Care Connects** is a comprehensive **MERN Stack** healthcare solution. It bridges the gap between patients and doctors by offering an integrated **Hospital Management System (HMS)** and **Telemedicine** services. From managing Electronic Health Records (EHR) to secure virtual consultations, Care Connects ensures a seamless digital experience for both healthcare providers and patients.

### 🎯 Objective
- To streamline hospital workflows (Admissions to Discharge).
- To provide secure, encrypted telemedicine consultations.
- To implement a reliable multi-gateway payment system for medical billing.

---

## ✨ Key Features

### 👨‍⚕️ For Patients
- **Smart Appointment Booking:** Real-time scheduling with automated email reminders.
- **Virtual Consultations:** High-quality remote communication with specialized doctors.
- **Secure Payments:** Integrated payment support via **Stripe, bKash, and Nagad**.
- **Medical Dashboard:** Access to personal health records and appointment history.

### 🏥 For Administrators & Doctors
- **Role-Based Access Control (RBAC):** Distinct permissions for Admins, Doctors, and Staff.
- **EHR Management:** Digitized health records for improved diagnosis accuracy.
- **Revenue Analytics:** Detailed tracking of hospital earnings and patient flow.

---

## 🛠️ Tech Stack & Tools

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React.js, Tailwind CSS | UI/UX & Responsive Design |
| **Backend** | Node.js, Express.js | Scalable API & Server Logic |
| **Database** | MongoDB | Document-oriented Data Storage |
| **Auth** | Firebase & JWT | Secure Authentication & Session Mgmt |
| **State Mgmt** | TanStack Query | Efficient Server-state Fetching |
| **Payment** | Stripe, bKash, Nagad | Financial Transactions |

---

## 🏗️ System Architecture & Design
To ensure high performance and maintainability, this project utilizes:
- **Clean Architecture:** Separation of concerns between UI, Business Logic, and Data.
- **RESTful API Design:** Predictable and structured communication between client and server.
- **Security First:** Implementation of **Zod** for schema validation and **JWT** for protecting private routes.
- **Scalable Structure:** Folder structure organized by features to support future expansions.

---

## ⚙️ Installation & Local Setup

Follow these steps to set up the project locally:

### 1. Clone the Repository

2. Install Dependencies
Client Side:

npm install
Server Side:

Bash
cd server # or your server folder
npm install
3. Environment Variables (.env)
Create a .env file in the server directory and add your credentials:

Code snippet
PORT=5000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
JWT_ACCESS_TOKEN=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
FIREBASE_API_KEY=your_firebase_key
4. Run the Development Server
Start Backend:

Bash
npm run dev
Start Frontend:

Bash
# back in the root folder
npm run dev
Open http://localhost:5173 in your browser.

🤝 Contribution & License
Contributions make the open-source community an amazing place to learn and create.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

This project is licensed under the MIT License.

📞 Contact & Support
Rahyan Shamsi Akil

Email: rahyanakil89@gmail.com

Portfolio: rahyanakil.vercel.app

LinkedIn: linkedin.com/in/rahyanshamsi
```bash
git clone [https://github.com/rahyanakil/Care-Connects-client](https://github.com/rahyanakil/Care-Connects-client)
cd Care-Connects-client
