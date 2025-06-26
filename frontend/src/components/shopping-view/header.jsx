import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { FaUser, FaHeart, FaRegUser, FaShoppingCart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { UserCog, LogOut } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems } from '@/store/shop/cart-slice';
import { logoutUser } from '@/store/auth-slice';
import UserCartWrapper from './cart-wrapper';
import ShoppingOrders from './orders';
import Message from './message';
import { categoriesWithBrands } from '@/config';

const ShoppingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openCartSheet, setOpenCartSheet] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      const query = selectedCategory === 'all'
        ? `?keyword=${encodeURIComponent(searchKeyword)}`
        : `?keyword=${encodeURIComponent(searchKeyword)}&category=${encodeURIComponent(selectedCategory)}`;
      navigate(`/shop/search${query}`);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleProtectedClick = (path) => {
    if (!isAuthenticated) {
      navigate('/auth/login', { state: { from: path } });
    }
  };

  useEffect(() => {
    if (isAuthenticated && user?.id) {
      dispatch(fetchCartItems(user.id));
    }
  }, [dispatch, user?.id, isAuthenticated]);

  return (
    <div>
      <div className="flex justify-between text-medium font-normal text-black items-center px-5 md:px-21 md:py-3">
        {/* Burger Menu - Now showing icons instead of categories */}
        <div className="relative md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl p-2">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          {isMenuOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
              {/* Profile */}
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start">
                      <FaUser className="h-5 w-5 mr-2" />
                      Profile
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" className="w-56">
                    {isAuthenticated ? (
                      <>
                        <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => navigate('/shop/account')}>
                          <UserCog className="mr-2 h-4 w-4" />
                          Profile
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuLabel>Guest</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => navigate('/auth/login', { state: { from: '/shop/account' } })}>
                          <UserCog className="mr-2 h-4 w-4" />
                          Login
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Message */}
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => !isAuthenticated && handleProtectedClick('/shop/messages')}
                    >
                      <BiSolidMessageDetail className="h-5 w-5 mr-2" />
                      Message
                    </Button>
                  </DialogTrigger>
                  {isAuthenticated && (
                    <DialogContent className="sm:max-w-[425px]">
                      <Message />
                    </DialogContent>
                  )}
                </Dialog>
              </div>

              {/* Orders */}
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => !isAuthenticated && handleProtectedClick('/shop/orders')}
                    >
                      <FaHeart className="h-5 w-5 mr-2" />
                      Orders
                    </Button>
                  </DialogTrigger>
                  {isAuthenticated && (
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <ShoppingOrders />
                    </DialogContent>
                  )}
                </Dialog>
              </div>

              {/* Cart */}
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
                  <Button
                    onClick={() => {
                      if (!isAuthenticated) {
                        handleProtectedClick('/shop/cart');
                      } else {
                        setOpenCartSheet(true);
                      }
                    }}
                    variant="ghost"
                    className="w-full justify-start relative"
                  >
                    <FaShoppingCart className="h-5 w-5 mr-2" />
                    Cart
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-bold bg-red-500 text-white rounded-full px-[6px]">
                      {isAuthenticated ? cartItems?.items?.length || 0 : 0}
                    </span>
                  </Button>
                  {isAuthenticated && (
                    <SheetContent>
                      <UserCartWrapper
                        setOpenCartSheet={setOpenCartSheet}
                        cartItems={cartItems?.items?.length > 0 ? cartItems.items : []}
                      />
                    </SheetContent>
                  )}
                </Sheet>
              </div>
            </div>
          )}
        </div>

        {/* Rest of the component remains exactly the same */}
        {/* Logo */}
        <Link to="/shop/home" className="flex items-center gap-2">
          <div className="pr-44 md:p-0">
            <img src={Logo} className="w-32" alt="Logo" />
          </div>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white border border-blue-500 rounded overflow-hidden">
          <input
            type="search"
            className="p-2 pr-24 outline-none"
            placeholder="Search"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <select
            className="py-2 px-5 border-l border-blue-500 outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Category</option>
            {categoriesWithBrands.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <button type="submit" className="bg-blue-500 text-white py-2 px-6">
            Search
          </button>
        </form>

        {/* Icons (Desktop) */}
        <div className="hidden md:block">
          <ul className="flex gap-6 text-gray-500 cursor-pointer">
            {/* Profile Item */}
            <li className="flex flex-col items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 p-0">
                    <FaUser className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" className="w-56">
                  {isAuthenticated ? (
                    <>
                      <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => navigate('/shop/account')}>
                        <UserCog className="mr-2 h-4 w-4" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuLabel>Guest</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => navigate('/auth/login', { state: { from: '/shop/account' } })}>
                        <UserCog className="mr-2 h-4 w-4" />
                        Login
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="text-sm">Profile</span>
            </li>
            {/* Message Item */}
            <li className="flex flex-col items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => !isAuthenticated && handleProtectedClick('/shop/messages')}
                  >
                    <BiSolidMessageDetail className="text-xl" />
                  </Button>
                </DialogTrigger>
                {isAuthenticated && (
                  <DialogContent className="sm:max-w-[425px]">
                    <Message />
                  </DialogContent>
                )}
              </Dialog>
              <span className="text-sm">Message</span>
            </li>
            {/* Orders Item */}
            <li className="flex flex-col items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => !isAuthenticated && handleProtectedClick('/shop/orders')}
                  >
                    <FaHeart className="text-xl" />
                  </Button>
                </DialogTrigger>
                {isAuthenticated && (
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <ShoppingOrders />
                  </DialogContent>
                )}
              </Dialog>
              <span className="text-sm">Orders</span>
            </li>
            {/* Cart Item */}
            <li className="flex flex-col items-center">
              <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
                <Button
                  onClick={() => {
                    if (!isAuthenticated) {
                      handleProtectedClick('/shop/cart');
                    } else {
                      setOpenCartSheet(true);
                    }
                  }}
                  variant="ghost"
                  size="icon"
                  className="relative"
                >
                  <FaShoppingCart className="text-xl" />
                  <span className="absolute top-[-5px] right-[-5px] text-xs font-bold bg-red-500 text-white rounded-full px-[6px]">
                    {isAuthenticated ? cartItems?.items?.length || 0 : 0}
                  </span>
                </Button>
                {isAuthenticated && (
                  <SheetContent>
                    <UserCartWrapper
                      setOpenCartSheet={setOpenCartSheet}
                      cartItems={cartItems?.items?.length > 0 ? cartItems.items : []}
                    />
                  </SheetContent>
                )}
              </Sheet>
              <span className="text-sm">Cart</span>
            </li>
          </ul>
        </div>

        {/* Icons (Mobile) - These are the small icons that appear next to the burger menu */}
        <div className="md:hidden py-1">
          <ul className="flex gap-6 cursor-pointer items-end">
            {/* Cart */}
            <li className="flex flex-col items-center justify-end gap-1">
              <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
                <Button
                  onClick={() => {
                    if (!isAuthenticated) {
                      handleProtectedClick('/shop/cart');
                    } else {
                      setOpenCartSheet(true);
                    }
                  }}
                  variant="ghost"
                  size="icon"
                  className="relative"
                >
                  <IoCartOutline className="text-xl" />
                  <span className="absolute top-[-5px] right-[-5px] text-xs font-bold bg-red-500 text-white rounded-full px-[6px]">
                    {isAuthenticated ? cartItems?.items?.length || 0 : 0}
                  </span>
                </Button>
                {isAuthenticated && (
                  <SheetContent>
                    <UserCartWrapper
                      setOpenCartSheet={setOpenCartSheet}
                      cartItems={cartItems?.items?.length > 0 ? cartItems.items : []}
                    />
                  </SheetContent>
                )}
              </Sheet>
              <span className="text-sm">Cart</span>
            </li>
            {/* Profile */}
            <li className="flex flex-col items-center justify-end gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 p-0">
                    <FaRegUser className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" className="w-56">
                  {isAuthenticated ? (
                    <>
                      <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => navigate('/shop/account')}>
                        <UserCog className="mr-2 h-4 w-4" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuLabel>Guest</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => navigate('/auth/login', { state: { from: '/shop/account' } })}>
                        <UserCog className="mr-2 h-4 w-4" />
                        Login
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="text-sm">Profile</span>
            </li>
          </ul>
        </div>
      </div>

     {/* Mobile Search */}
<form 
  onSubmit={handleSearch} 
  className="relative w-full max-w-md mx-4 md:hidden my-4 px-4 md:px-0"
>
  {/* Search Input */}
  <div className="relative mb-3">
    <input
      type="search"
      className="w-full py-2 pl-10 pr-4 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white transition-all duration-200 outline-none"
      placeholder="Search"
      aria-label="Search"
      value={searchKeyword}
      onChange={(e) => setSearchKeyword(e.target.value)}
    />
    <FiSearch
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      aria-hidden="true"
    />
  </div>

  {/* Dynamic Category Tabs */}
  <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hidden">
    <button
      type="button"
      onClick={() => setSelectedCategory("all")}
      className={`px-3 py-1 rounded-md whitespace-nowrap ${selectedCategory === "all" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 hover:bg-gray-200'}`}
    >
      All
    </button>
    {categoriesWithBrands.map((category) => (
      <button
        key={category.id}
        type="button"
        onClick={() => setSelectedCategory(category.id)}
        className={`px-3 py-1 rounded-md whitespace-nowrap ${selectedCategory === category.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 hover:bg-gray-200'}`}
      >
        {category.label.length > 10 ? category.label.slice(0, 8) + "…" : category.label}
      </button>
    ))}
  </div>
</form>

    </div>
  );
};

export default ShoppingHeader;