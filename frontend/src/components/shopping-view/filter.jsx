import { categoriesWithBrands } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ProductFilter({ filters, handleFilter }) {
  // Create filter options from categoriesWithBrands
  const filterOptions = {
    category: categoriesWithBrands.map(category => ({
      id: category.id,
      label: category.label
    })),
    brand: categoriesWithBrands.reduce((brands, category) => {
      // Only show brands for selected categories
      if (!filters?.category || filters.category.includes(category.id)) {
        return [...brands, ...category.brands];
      }
      return brands;
    }, [])
  };

  // Remove duplicate brands
  filterOptions.brand = filterOptions.brand.filter(
    (brand, index, self) => 
      index === self.findIndex(b => b.id === brand.id)
  );

  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold text-blue-500">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment key={keyItem}>
            <div>
              <h3 className="text-base font-bold capitalize">{keyItem}</h3>
              <div className="grid gap-2 mt-2">
                {filterOptions[keyItem].map((option) => (
                  <Label key={option.id} className="flex font-medium items-center gap-2">
                    <Checkbox
                      checked={
                        filters &&
                        Object.keys(filters).length > 0 &&
                        filters[keyItem] &&
                        filters[keyItem].includes(option.id)
                      }
                      onCheckedChange={() => handleFilter(keyItem, option.id)}
                    />
                    {option.label}
                  </Label>
                ))}
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;