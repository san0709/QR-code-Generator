# 📷 QR Code Generator

A simple and responsive React application built with functional components and hooks that allows users to generate custom QR codes based on provided data (text, URL) and image size, using the public `qrserver.com` API.

## ✨ Features

* **Custom Data Input:** Generate a QR code for any string of text or URL.
* **Custom Size:** Specify the pixel size of the generated QR code image.
* **Real-time Generation:** Displays the generated QR code image instantly.
* **Download Functionality:** Allows users to download the generated QR code as an image file (e.g., `qr.jpg`).
* **Basic Styling:** Centered layout and custom styling using CSS.

---

## 🛠️ Technologies Used

* **React:** Frontend library for building the user interface.
* **Vite:** Used for blazing-fast development and bundling.
* **JavaScript (ES6+):** For component logic and API interaction.
* **CSS:** For application styling and layout.
* **`qrserver.com` API:** Used as the external service for generating the QR code image.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have **Node.js** and **npm** (or **yarn** / **pnpm**) installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd qr-code-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    ```

### Running the Application (Vite Commands)

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

2.  The application should automatically open in your browser (usually at `http://localhost:5173`).

3.  **To build for production:**
    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```

---

## ⚙️ How It Works

The application uses the following API structure to generate the QR code:
