import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

import toast from "react-hot-toast";

import useToken from "../../hooks/useToken";
const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, signInWithGoogle, signInWithFacebook } =
    useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="Auth sign_in_all p-5">
        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16 w-1/2">
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6 card">
            <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6 ">
                <div className="log_img">
                  <img
                    src="https://www.carebook.com/wp-content/uploads/2021/02/iStock-1211161709-scaled.jpg"
                    alt="pharmacy"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6 ">
                <div className="flex justify-center items-center w-full mt-12">
                  <Link to={"/"}>
                    <img
                      src={"https://i.ibb.co/GpqY8tQ/PSH-web-logo-1.png"}
                      alt="pharmacy"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <form
                  className="infoForm authForm"
                  onSubmit={handleSubmit(handleLogin)}
                >
                  <div className="form">
                    <input
                      type="email"
                      className="infoInput"
                      placeholder="Username or Email"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                    <input
                      type="password"
                      className="infoInput"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be 6 characters long",
                        },
                        pattern: {
                          value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                          message:
                            "Password must have uppercase, number and special characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                  </div>

                  <button
                    className="w-100 p-3 border-0 rounded-2"
                    style={{
                      background: `linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )`,
                    }}
                  >
                    Continue
                  </button>
                </form>

                <div className="mt-5">
                  <p>
                    By continuing, you agree to WellSpring Pharmacy Conditions
                    of Use and Privacy Notice.
                  </p>
                  <p>New to WellSpring Pharmacy? </p>
                </div>
                <Link
                  to={"/signup"}
                  className="def-btn btn-gl w-full mt-3 text-center signin_text"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
