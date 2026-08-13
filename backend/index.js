const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const { connect } = require("./config/database");
connect();

const user = require("./Routes/route");
app.use("/api/v1", user);

app.get("/", (req, res) => {
    res.send("<h1>backend API is running</h1>");
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
