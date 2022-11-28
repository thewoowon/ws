const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");
}