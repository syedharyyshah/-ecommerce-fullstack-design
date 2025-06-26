// config/index.js
export const registerFormControls = [
  // Unchanged
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  // Unchanged
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const categoriesWithBrands = [
  {
    id: "men",
    label: "Men",
    brands: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "tommy", label: "Tommy Hilfiger" },
      { id: "ralph_lauren", label: "Ralph Lauren" },
      { id: "under_armour", label: "Under Armour" },
    ],
  },
  {
    id: "women",
    label: "Women",
    brands: [
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
      { id: "gucci", label: "Gucci" },
      { id: "chanel", label: "Chanel" },
      { id: "mango", label: "Mango" },
      { id: "forever21", label: "Forever 21" },
    ],
  },
  {
    id: "kids",
    label: "Kids",
    brands: [
      { id: "carters", label: "Carter's" },
      { id: "gap", label: "Gap Kids" },
      { id: "oldnavy", label: "Old Navy Kids" },
      { id: "oshkosh", label: "OshKosh B'gosh" },
    ],
  },
  {
    id: "electronics",
    label: "Electronics",
    brands: [
      { id: "apple", label: "Apple" },
      { id: "samsung", label: "Samsung" },
      { id: "sony", label: "Sony" },
      { id: "lg", label: "LG" },
      { id: "bose", label: "Bose" },
      { id: "hp", label: "HP" },
    ],
  },
  {
    id: "mobiles",
    label: "Mobile Phones",
    brands: [
      { id: "apple", label: "Apple" },
      { id: "samsung", label: "Samsung" },
      { id: "xiaomi", label: "Xiaomi" },
      { id: "oppo", label: "Oppo" },
      { id: "vivo", label: "Vivo" },
      { id: "oneplus", label: "OnePlus" },
      { id: "google", label: "Google" },
    ],
  },
  {
    id: "accessories",
    label: "Accessories",
    brands: [
      { id: "fossil", label: "Fossil" },
      { id: "casio", label: "Casio" },
      { id: "rayban", label: "Ray-Ban" },
      { id: "michael_kors", label: "Michael Kors" },
      { id: "pandora", label: "Pandora" },
    ],
  },
  {
    id: "footwear",
    label: "Footwear",
    brands: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "skechers", label: "Skechers" },
      { id: "new_balance", label: "New Balance" },
    ],
  },
  {
    id: "mobile_accessories",
    label: "Mobile Accessories",
    brands: [
      { id: "anker", label: "Anker" },
      { id: "spigen", label: "Spigen" },
      { id: "otterbox", label: "OtterBox" },
      { id: "belkin", label: "Belkin" },
      { id: "jbl", label: "JBL" },
    ],
  },
  {
    id: "home_appliances",
    label: "Home Appliances",
    brands: [
      { id: "lg", label: "LG" },
      { id: "samsung", label: "Samsung" },
      { id: "whirlpool", label: "Whirlpool" },
      { id: "bosch", label: "Bosch" },
    ],
  },
  {
    id: "beauty",
    label: "Beauty",
    brands: [
      { id: "loreal", label: "L'Oréal" },
      { id: "maybelline", label: "Maybelline" },
      { id: "estee_lauder", label: "Estée Lauder" },
      { id: "mac", label: "MAC" },
    ],
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: categoriesWithBrands.map(category => ({
      id: category.id,
      label: category.label,
    })),
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [], // Will be populated dynamically
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "men",
    label: "Men",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Women",
    path: "/shop/listing",
  },
  {
    id: "kids",
    label: "Kids",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Footwear",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "mobiles",
    label: "Mobile Phones",
    path: "/shop/listing",
  },
  {
    id: "mobile_accessories",
    label: "Mobile Accessories",
    path: "/shop/listing",
  },
  {
    id: "home_appliances",
    label: "Home Appliances",
    path: "/shop/listing",
  },
  {
    id: "beauty",
    label: "Beauty",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear",
  electronics: "Electronics",
  mobiles: "Mobile Phones",
  mobile_accessories: "Mobile Accessories",
  home_appliances: "Home Appliances",
  beauty: "Beauty",
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi's",
  tommy: "Tommy Hilfiger",
  ralph_lauren: "Ralph Lauren",
  under_armour: "Under Armour",
  zara: "Zara",
  "h&m": "H&M",
  gucci: "Gucci",
  chanel: "Chanel",
  mango: "Mango",
  forever21: "Forever 21",
  carters: "Carter's",
  gap: "Gap Kids",
  oldnavy: "Old Navy Kids",
  oshkosh: "OshKosh B'gosh",
  apple: "Apple",
  samsung: "Samsung",
  sony: "Sony",
  lg: "LG",
  bose: "Bose",
  hp: "HP",
  xiaomi: "Xiaomi",
  oppo: "Oppo",
  vivo: "Vivo",
  oneplus: "OnePlus",
  google: "Google",
  fossil: "Fossil",
  casio: "Casio",
  rayban: "Ray-Ban",
  michael_kors: "Michael Kors",
  pandora: "Pandora",
  skechers: "Skechers",
  new_balance: "New Balance",
  anker: "Anker",
  spigen: "Spigen",
  otterbox: "OtterBox",
  belkin: "Belkin",
  jbl: "JBL",
  whirlpool: "Whirlpool",
  bosch: "Bosch",
  loreal: "L'Oréal",
  maybelline: "Maybelline",
  estee_lauder: "Estée Lauder",
  mac: "MAC",
};

export const filterOptions = {
  category: categoriesWithBrands.map(category => ({
    id: category.id,
    label: category.label,
  })),
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "xiaomi", label: "Xiaomi" },
    { id: "oppo", label: "Oppo" },
    { id: "vivo", label: "Vivo" },
    { id: "oneplus", label: "OnePlus" },
    { id: "anker", label: "Anker" },
    { id: "spigen", label: "Spigen" },
    { id: "loreal", label: "L'Oréal" },
    { id: "maybelline", label: "Maybelline" },
  ],
};

export const sortOptions = [
  // Unchanged
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  // Unchanged
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];