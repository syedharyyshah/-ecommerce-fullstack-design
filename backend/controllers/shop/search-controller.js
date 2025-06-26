const Product = require("../../models/Product");

const searchProducts = async (req, res) => {
  try {
    const { keyword, category } = req.query;

    // Validate keyword
    if (!keyword || typeof keyword !== "string" || keyword.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: "Keyword is required, must be a string, and at least 3 characters long",
      });
    }

    // Build search query
    const regEx = new RegExp(keyword.trim(), "i");
    const searchQuery = {
      $or: [
        { title: regEx },
        { description: regEx },
        { brand: regEx },
        // Removed category from $or to avoid matching category as a keyword
      ],
    };

    // Add category filter if provided and not "all"
    if (category && category !== "all") {
      searchQuery.category = category;
    }

    const searchResults = await Product.find(searchQuery);

    res.status(200).json({
      success: true,
      data: searchResults,
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during search",
    });
  }
};

module.exports = { searchProducts };