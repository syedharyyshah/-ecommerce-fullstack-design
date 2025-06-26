import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const AuthLayout = () => {
    return (
        <div className="flex min-h-screen w-full flex-col-reverse lg:flex-row">
            {/* Left side with logo - hidden on mobile, visible from lg breakpoint */}
            <div className="hidden lg:flex lg:w-1/2 xl:w-2/5 items-center justify-center bg-white p-8">
                <div className="space-y-6 text-center">
                    <img 
                        src={Logo} 
                        alt="Logo" 
                        className="mx-auto w-full max-w-xs object-cover sm:max-w-sm md:max-w-md" 
                    />
                </div>
            </div>
          
            {/* Right side with content - full width on mobile, half on desktop */}
            <div className="flex w-full flex-1 items-center justify-center bg-background p-4 sm:p-6 lg:w-1/2 lg:p-8 xl:w-3/5">
                <div className="w-full max-w-md">
                    <Outlet />
                </div>
            </div>

            {/* Mobile logo - visible only on small screens */}
            <div className="flex lg:hidden items-center justify-center bg-white p-4">
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="h-16 object-contain" 
                />
            </div>
        </div>
    );
}

export default AuthLayout