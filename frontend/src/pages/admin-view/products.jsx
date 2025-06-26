import ProductImageUpload from "@/components/admin-view/image-upload";
import AdminProductTile from "@/components/admin-view/product-tile";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import { addProductFormElements, categoriesWithBrands } from "@/config";
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
} from "@/store/admin/products-slice";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [dynamicFormElements, setDynamicFormElements] = useState(addProductFormElements);

  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (formData.category) {
      const selectedCategory = categoriesWithBrands.find(
        cat => cat.id === formData.category
      );
      
      const updatedFormElements = [...addProductFormElements];
      const brandFieldIndex = updatedFormElements.findIndex(
        field => field.name === "brand"
      );
      
      if (brandFieldIndex !== -1 && selectedCategory) {
        updatedFormElements[brandFieldIndex] = {
          ...updatedFormElements[brandFieldIndex],
          options: selectedCategory.brands
        };
        
        // Reset brand when category changes
        setFormData(prev => ({ ...prev, brand: "" }));
        setDynamicFormElements(updatedFormElements);
      }
    }
  }, [formData.category]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const action = currentEditedId
      ? editProduct({ id: currentEditedId, formData })
      : addNewProduct({ ...formData, image: uploadedImageUrl });

    dispatch(action).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        setOpenCreateProductsDialog(false);
        setImageFile(null);
        setFormData(initialFormData);
        setCurrentEditedId(null);
        if (!currentEditedId) {
          toast.success("Product added successfully");
        }
      }
    });
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
      }
    });
  };

  const isFormValid = () => {
    return Object.keys(formData)
      .filter((key) => key !== "averageReview" && key !== "salePrice")
      .every((key) => formData[key] !== "");
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-end">
          <Button
            onClick={() => setOpenCreateProductsDialog(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Add New Product
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productList?.length > 0 ? (
            productList.map((product) => (
              <AdminProductTile
                key={product._id}
                setFormData={setFormData}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                setCurrentEditedId={setCurrentEditedId}
                product={product}
                handleDelete={handleDelete}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No products available
            </p>
          )}
        </div>

        <Sheet
          open={openCreateProductsDialog}
          onOpenChange={() => {
            setOpenCreateProductsDialog(false);
            setCurrentEditedId(null);
            setFormData(initialFormData);
            setImageFile(null);
            setUploadedImageUrl("");
          }}
        >
          <SheetContent
            side="right"
            className="w-full sm:max-w-md bg-white p-6 overflow-y-auto"
          >
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-gray-800">
                {currentEditedId ? "Edit Product" : "Add New Product"}
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6">
              <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                imageLoadingState={imageLoadingState}
                isEditMode={!!currentEditedId}
                className="mb-6"
              />
              <CommonForm
                onSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
                buttonText={currentEditedId ? "Update Product" : "Add Product"}
                formControls={dynamicFormElements}
                isBtnDisabled={!isFormValid()}
                className="space-y-4"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
}

export default AdminProducts;