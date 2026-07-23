const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
const sensorData = [];

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/status", (req, res) => {
    res.json({
        status: "Server is running",
        success: true
    });
});

app.get("/device/:name", (req, res) => {
    const deviceName = req.params.name;
    res.send(`Device: ${deviceName}`);
});

app.post("/device/sensor1/data", (req, res) => {

    const reading = req.body;

    sensorData.push(reading);

    res.json({
        message: "Sensor data received successfully.",
        data: reading
    });

});

app.get("/device/sensor1/data", (req, res) => {

    res.json(sensorData);

});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
