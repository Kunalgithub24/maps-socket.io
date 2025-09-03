# Socket.io Map Tracker

This project is a real-time map tracker using [Express](https://expressjs.com/), [Socket.io](https://socket.io/), [Leaflet.js](https://leafletjs.com/), and [EJS](https://ejs.co/). It displays the live location of connected users on a map and updates their positions as they move.

## Features

- Tracks user location using browser geolocation API.
- Real-time location updates via Socket.io.
- Displays all users on a Leaflet map.
- Removes markers when users disconnect.

## Packages Used

- **express**: Web server framework for Node.js.
- **socket.io**: Enables real-time, bidirectional communication.
- **ejs**: Templating engine for rendering HTML views.
- **nodemon**: Utility for automatically restarting the server during development.

## How It Works

1. **Client Side** ([public/js/script.js](public/js/script.js)):
    - Checks if geolocation is supported.
    - Uses `watchPosition` to get live location updates.
    - Emits location to the server via Socket.io.
    - Initializes a Leaflet map centered at (0,0) with max zoom.
    - Receives location data from the server and updates/creates markers for each user.
    - Removes markers when users disconnect.

2. **Server Side** ([app.js](app.js)):
    - Sets up Express and Socket.io.
    - Serves static files and renders the main view.
    - Listens for location updates from clients and broadcasts them to all connected users.
    - Notifies clients when a user disconnects.

## How to Run

1. **Clone or Fork the Repository**
    ```sh
    git clone https://github.com/yourusername/socket.io-map-tracker.git
    cd socket.io-map-tracker
    ```

2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Start the Server**
    ```sh
    node app.js
    ```
    Or for development with auto-restart:
    ```sh
    npx nodemon app.js
    ```

4. **Open in Browser**
    - Visit [http://localhost:3000](http://localhost:3000)

## Notes

- Make sure your browser allows location access.
- Multiple users can open the site and see each other's locations in real time.

