
const socket = io()

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords
        socket.emit("sendLocation", { latitude, longitude })
    }, (error) => {
        console.log(error)
    },
        {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0 
        }
    )
}

const map = L.map("map").setView([0,0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "OpenStreetMap"
}).addTo(map);

const marjer = {}

socket.on("newLocation", (data) => {
    const { id, latitude, longitude } = data
    map.setView([latitude, longitude]);
    if(marjer[id]){
        marjer[id].setLatLng([latitude, longitude])
    } else {
        marjer[id] = L.marker([latitude, longitude]).addTo(map)
    }
})

socket.on("userDisconnected", (id) => {
    if(marjer[id]){
        map.removeLayer(marjer[id])
        delete marjer[id]
    }
})


