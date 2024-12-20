const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const chartDataRoutes = require("./routes/ChartData");
dotenv.config();

const app = express();
const corsOptions = {
    origin: 'https://quiet-blancmange-0f5af0.netlify.app/', // Replace with your Netlify site's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();
app.get("/", async (req, res) => {
    res.send("hello")
})
// Routes
app.use('/api/auth', authRoutes);
app.use("/api/chart", chartDataRoutes);

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));