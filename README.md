# Care Connects - Doctor Appointment Platform

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/rahyanakil/Care-Connects-client/tree/main)

<p align="center">
  <img src="https://i.ibb.co/WskKr7P/cover-img.jpg" alt="Care Connects Banner" />
</p>

<p align="center">
  <a href="https://careconnects-7b184.web.app/"><strong>🌐 Live Site</strong></a>
</p>

Care Connects is a modern, full-stack web application designed to bridge the gap between patients and healthcare providers. It provides a seamless platform for users to find doctors by specialty, view their profiles, and book appointments. The application features distinct dashboards for patients and "hosts" (doctors), enabling efficient management of bookings and services.

## ✨ Key Features

*   **Doctor Discovery:** Browse and filter doctors by medical specialty (e.g., Cardiologist, Dermatologist).
*   **Detailed Profiles:** View comprehensive doctor profiles, including qualifications, experience, consultation fees, and availability.
*   **Appointment Booking:** An intuitive booking system with a date range calendar and secure payment processing via Stripe.
*   **User Authentication:** Secure user registration and login system powered by Firebase, including Google Sign-In.
*   **Role-Based Dashboards:**
    *   **Patient Dashboard:** View and manage personal bookings.
    *   **Doctor (Host) Dashboard:** Add and manage service listings, view and manage incoming bookings from patients.
*   **Interactive Map:** A Leaflet-based map to visualize service locations.
*   **Responsive Design:** A fully responsive interface built with Tailwind CSS, ensuring a great user experience on all devices.

## 🛠️ Tech Stack

| Category          | Technology                                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| **Frontend**      | [React](https://react.dev/), [React Router](https://reactrouter.com/), [Vite](https://vitejs.dev/) |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/)                                                             |
| **State Management** | [TanStack Query](https://tanstack.com/query/), [React Context API](https://react.dev/learn/passing-data-deeply-with-context) |
| **Authentication** | [Firebase Authentication](https://firebase.google.com/docs/auth)                                     |
| **Payments**      | [Stripe](https://stripe.com/)                                                                        |
| **HTTP Client**   | [Axios](https://axios-http.com/)                                                                     |
| **UI Components** | [Headless UI](https://headlessui.com/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Map**           | [React-Leaflet](https://react-leaflet.js.org/)                                                       |

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm or yarn
*   A running instance of the [Care Connects Server](https://github.com/rahyanakil/Care-Connects-server)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rahyanakil/Care-Connects-client.git
    cd Care-Connects-client
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of your project and add the following environment variables.

    ```env
    # The base URL of your backend server
    VITE_API_URL=http://localhost:5000

    # Your public key from Stripe
    VITE_Payment_Gateway_PK=your_stripe_public_key

    # Your API key from ImgBB for image uploads
    VITE_IMGBB_KEY=your_imgbb_api_key

    # Firebase configuration
    VITE_apiKey=your_firebase_api_key
    VITE_authDomain=your_firebase_auth_domain
    VITE_projectId=your_firebase_project_id
    VITE_storageBucket=your_firebase_storage_bucket
    VITE_messagingSenderId=your_firebase_messaging_sender_id
    VITE_appId=your_firebase_app_id
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
