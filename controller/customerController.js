const { Customer } = require("../models");
const customer = require("../models/customer");

async function getCustomer(req, res) {
  try {
    const customers = await Customer.find();

    res.status(200).json({
      status: "success",
      totalData: customers.length,
      requestAt: req.requestTime,
      data: {
        customers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

async function getCustomerById(req, res) {
  const id = req.params.id;
  try {
    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(404).json({
        status: "404",
        message: "Car Not Found!",
      });
    }

    res.status(200).json({
      status: "200",
      message: "Success get cars data",
      isSuccess: true,
      data: customer,
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get cars data",
      isSuccess: false,
      error: error.message,
    });
  }
}
async function deleteCustomer(req, res) {
  const id = req.params.id;
  try {
    const customer = await Customer.findByPk(id);

    if (car) {
      await car.destroy();

      res.status(200).json({
        status: "200",
        message: "Success get cars data",
        isSuccess: true,
        data: customer,
      });
    } else {
      res.status(404).json({
        status: "404",
        message: "Car Not Found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get cars data",
      isSuccess: false,
      error: error.message,
    });
  }
}
async function updateCustomer(req, res) {
  const id = req.params.id;
  const { name, email, phone } = req.body;
  console.log("name", name);
  try {
    const customer = await Customer.findByPk(id);

    if (customer) {
      customer.name = name;
      customer.email = email;
      customer.phone = phone;

      await customer.save();

      res.status(200).json({
        status: "200",
        message: "Success get cars data",
        isSuccess: true,
        data: customer,
      });
    } else {
      res.status(404).json({
        status: "404",
        message: "Car Not Found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get cars data",
      isSuccess: false,
      error: error.message,
    });
  }
}

async function createCustomer(req, res) {
  const { name, email, phone } = req.body;
  try {
    const newCustomer = await Customer.create({ name, email, phone });
    res.status(200).json({
      status: "Success",
      message: "Ping successfully",
      isSuccess: true,
      data: newCustomer,
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get cars data",
      isSuccess: false,
      error: error.message,
    });
  }
}
module.exports = {
  createCustomer,
  getCustomer,
  getCustomerById,
  deleteCustomer,
  updateCustomer,
};
