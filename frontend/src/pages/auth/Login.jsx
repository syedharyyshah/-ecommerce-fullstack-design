import CommonForm from '@/components/common/form'
import { loginFormControls } from '@/config'
import { loginUser } from '@/store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'


const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message); // Sonner success toast
      } else {
        toast.error(data?.payload?.message); // Sonner error toast
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-blue-500">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;