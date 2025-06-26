import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  // Allow unauthenticated users to access /shop/* routes except /shop/account and /shop/checkout
  if (
    !isAuthenticated &&
    location.pathname.includes('/shop') &&
    !location.pathname.includes('/shop/account') &&
    !location.pathname.includes('/shop/checkout')
  ) {
    return <>{children}</>;
  }

  // Redirect unauthenticated users to login if they try to access /shop/account or /shop/checkout
  if (
    !isAuthenticated &&
    (location.pathname.includes('/shop/account') || location.pathname.includes('/shop/checkout'))
  ) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  // Redirect unauthenticated users to login for any other protected routes
  if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  // Redirect authenticated users away from login/register
  if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // Prevent non-admin users from accessing admin routes
  if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')) {
    return <Navigate to="/unauth-page" />;
  }

  // Prevent admin users from accessing shop routes
  if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
};

export default CheckAuth;