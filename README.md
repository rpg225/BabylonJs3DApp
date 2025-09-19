---

# Babylon.js 3D Application

A foundational web-based 3D application built using the powerful Babylon.js engine. This project serves as an interactive demonstration or a starting point for creating immersive 3D experiences directly in the browser, showcasing how to render scenes, objects, and implement basic camera controls.

## ✨ Features

*   **Interactive 3D Scene:** Renders a dynamic 3D environment that users can explore.
*   **Babylon.js Integration:** Leverages the robust capabilities of the Babylon.js framework for 3D graphics rendering.
*   **Web-Based:** Runs entirely in modern web browsers without any plugins or installations.
*   **Basic Camera Controls:** Allows users to navigate the 3D space (e.g., orbit, pan, zoom).
*   **Customizable Objects & Lighting:** Easy to modify scene elements, materials, and light sources.
*   **Pure Web Technologies:** Built with HTML, CSS, and JavaScript alongside the Babylon.js library.

## 💻 Technologies Used

*   **Babylon.js:** A complete JavaScript framework for building 3D games and experiences with HTML5, WebGL, WebGPU, and WebXR.
*   **HTML5:** Provides the structure for the web page and the canvas element for rendering the 3D scene.
*   **CSS3:** For basic styling of the web page and canvas.
*   **JavaScript (ES6+):** For all application logic, scene creation, user interaction, and integrating Babylon.js.

## ⚙️ Local Setup

To get this Babylon.js 3D application running on your local machine, follow these steps:

### Prerequisites

*   **Web Browser:** Any modern web browser that supports WebGL (Chrome, Firefox, Edge, Safari, etc.).
*   **Git:** For cloning the repository.
*   **(Optional) Local Web Server:** While you can often open `index.html` directly, some browsers might impose security restrictions (CORS) when loading local assets, especially textures or models. Using a simple local web server is recommended.

    *   **Python (if installed):**
        ```bash
        python -m http.server 8000
        ```
    *   **Node.js (if installed, install `serve` globally):**
        ```bash
        npm install -g serve
        serve -p 8000
        ```

### 1. Clone the Repository

```bash
git clone https://github.com/rpg225/BabylonJs3DApp.git
cd BabylonJs3DApp
```

### 2. Run the Application

#### Option A: Direct Open (Simplest)

1.  Simply open the `index.html` file in your preferred web browser.

    ```bash
    # Example (on macOS, might vary by OS)
    open index.html
    ```

#### Option B: Using a Local Web Server (Recommended)

1.  Navigate into the `BabylonJs3DApp` directory in your terminal.
2.  Start your local web server (e.g., `python -m http.server 8000`).
3.  Open your web browser and go to `http://localhost:8000` (or the port your server is running on).

## 🚀 How to Use

1.  **Launch the App:** Open the `index.html` file directly or via a local web server.
2.  **Explore the Scene:**
    *   **Orbit/Rotate:** Click and drag with your mouse.
    *   **Pan:** Hold down a specific key (e.g., `Shift` or `Ctrl`) and drag, or use the middle mouse button.
    *   **Zoom In/Out:** Use your mouse scroll wheel.
