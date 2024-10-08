const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
// Impor rute pelanggan
const customerRoutes = require("./router/customerRoutes"); // Pastikan jalur ini benar
app.use("/api/v1/customers", customerRoutes);
// Routes
app.use(customerRoutes);

// Middleware untuk menangani rute yang tidak ditemukan
app.use((req, res, next) => {
  res.status(404).json({
    status: "404",
    message: "API Not Exist",
  });
});

// Memulai server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
