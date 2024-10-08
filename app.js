const express = require("express");
const app = express();

const port = 3000;

// Impor rute pelanggan
const customerRoutes = require("./router/customerRoutes"); // Pastikan jalur ini benar

app.use(express.json());
app.use("/api/v1/customers", customerRoutes); // Ganti ke "/api/v1/customers"

app.use((req, res, next) => {
  res.status(404).json({
    status: "404",
    message: "Api Not Exist",
  });
});

// Memulai server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
