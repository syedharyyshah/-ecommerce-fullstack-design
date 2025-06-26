import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RightSide = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2 hidden md:block w-80 px-4">
      {/* User Join/Login Section */}
      <Card>
        <CardContent className="flex flex-col items-center bg-blue-100  p-4 gap-2">
          <Avatar className="w-12 h-12">
            <AvatarImage src="" alt="User" />
            <AvatarFallback>
              <FaUser />
            </AvatarFallback>
          </Avatar>
          {isAuthenticated ? (
            <>
              <p className="text-sm">Welcome back</p>
              <p className="text-sm font-medium">{user?.userName}</p>
              <Button onClick={() => navigate("/shop/account")} className="w-full">
                View Profile
              </Button>
            </>
          ) : (
            <>
              <p className="text-sm">Hi, Guest</p>
              <p className="text-sm font-medium">Let’s get started</p>
              <div className="flex flex-col w-full gap-2">
                <Button onClick={() => navigate("/auth/register")} className="w-full">
                  Join now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/auth/login")}
                  className="w-full"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* $10 Off Promo Card */}
      <Card className="bg-orange-400 text-white">
        <CardContent className="p-4">
          <p className="text-sm font-semibold">Get US $10 off</p>
          <p className="text-sm">with a new</p>
          <p className="text-sm">supplier</p>
        </CardContent>
      </Card>

      {/* Supplier Preferences */}
      <Card className="bg-teal-500 text-white">
        <CardContent className="p-4">
          <p className="text-sm">Send quotes with</p>
          <p className="text-sm font-semibold">supplier</p>
          <p className="text-sm font-semibold">preferences</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSide;
