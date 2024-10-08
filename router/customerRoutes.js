const express = require("express");
const router = express.Router();

// Impor customerController
const customerController = require("../controller/customerController");

// Definisikan rute untuk pelanggan
router.post("/", customerController.createCustomer);
router.get("/", customerController.getCustomer);
router.get("/:id", customerController.getCustomerById);
router.patch("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

// Ekspor router
module.exports = router;
