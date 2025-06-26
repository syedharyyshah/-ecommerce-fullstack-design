const express = require("express");
const { searchProducts } = require("../../controllers/shop/search-controller");

const router = express.Router();

// Updated to use query parameters
router.get("/", searchProducts);

module.exports = router;