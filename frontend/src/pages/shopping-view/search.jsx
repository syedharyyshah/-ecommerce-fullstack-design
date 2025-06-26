import ProductDetailsDialog from "@/components/shopping-view/product-details";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { fetchProductDetails } from "@/store/shop/products-slice";
import {
  getSearchResults,
  resetSearchResults,
} from "@/store/shop/search-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { categoriesWithBrands } from "@/config"; // Import categories

function SearchProducts() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { searchResults, isLoading, error } = useSelector((state) => state.shopSearch);
  const { productDetails } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);

  // Initialize state from URL parameters
  useEffect(() => {
    const keywordParam = searchParams.get("keyword") || "";
    const categoryParam = searchParams.get("category") || "all";
    setKeyword(keywordParam);
    setCategory(categoryParam);
  }, [searchParams]);

  // Debounced search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (keyword.trim().length > 2) {
        const searchParams = {
          keyword,
          ...(category !== "all" && { category }),
        };
        setSearchParams(
          new URLSearchParams(
            category !== "all"
              ? `keyword=${encodeURIComponent(keyword)}&category=${encodeURIComponent(category)}`
              : `keyword=${encodeURIComponent(keyword)}`
          )
        );
        dispatch(getSearchResults(searchParams));
      } else {
        setSearchParams(new URLSearchParams());
        dispatch(resetSearchResults());
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [keyword, category, dispatch, setSearchParams]);

  function handleAddtoCart(getCurrentProductId, getTotalStock) {
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast.error(`Only ${getTotalStock} items available`);
          return;
        }
      }
    }

    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast.success("Product added to cart");
      } else {
        toast.error("Failed to add product to cart");
      }
    });
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  return (
    <div className="container mx-auto md:px-6 px-4 py-8">
      <div className="flex flex-col md:flex-row justify-center mb-8 gap-4">
        <div className="w-full md:w-1/2 flex items-center">
          <Input
            value={keyword}
            name="keyword"
            onChange={(event) => setKeyword(event.target.value)}
            className="py-6"
            placeholder="Search Products..."
          />
        </div>
        <div className="w-full md:w-1/4">
          <select
            className="w-full py-2 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categoriesWithBrands.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isLoading && (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">Loading...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-10 text-red-500">
          <p>Error: {error}</p>
        </div>
      )}

      {!isLoading && !error && searchResults.length === 0 && keyword.trim().length > 2 && (
        <div className="text-center py-10">
          <h1 className="text-2xl font-semibold text-gray-500">No results found for "{keyword}"</h1>
          <p className="text-gray-400 mt-2">Try a different keyword or category.</p>
        </div>
      )}

      {!isLoading && !error && keyword.trim().length <= 2 && (
        <div className="text-center py-10">
          <h1 className="text-2xl font-semibold text-gray-500">Please enter at least 3 characters to search.</h1>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {searchResults.map((item) => (
          <ShoppingProductTile
            key={item._id}
            handleAddtoCart={handleAddtoCart}
            product={item}
            handleGetProductDetails={handleGetProductDetails}
          />
        ))}
      </div>

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default SearchProducts;