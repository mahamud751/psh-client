import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

import toast from "react-hot-toast";
import "./SignUp.css";
import useToken from "../../hooks/useToken";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    createUser,
    updateUser,
    signInWithGoogle,
    signInWithFacebook,
    verifyEmail,
  } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
            verifyEmail();
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
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
  const saveUser = (name, email, password) => {
    const user = { name, email, password };
    fetch("http://localhost:5001/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };
  return (
    <div>
      <div className="Auth sign_in_all p-5">
        <div className="row ">
          <div className="col-md-6  p-lg-5 card">
            <div className="row ">
              <div className="col-md-6">
                <div className="log_img">
                  <img
                    src="https://www.carebook.com/wp-content/uploads/2021/02/iStock-1211161709-scaled.jpg"
                    alt="pharmacy"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="registration_img">
                  <Link to={"/"}>
                    <img
                      src="/assets/dist/img/f.png"
                      alt="Logo"
                      className=" img-fluid"
                    />
                  </Link>
                </div>
                <form
                  className="infoForm authForm"
                  onSubmit={handleSubmit(handleSignUp)}
                >
                  <div className="form">
                    <input
                      type="text"
                      className="infoInput"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is Required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
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
                    Register
                  </button>
                </form>

                <div className="mt-5">
                  <p>
                    By continuing, you agree to WellSpring Pharmacy Conditions
                    of Use and Privacy Notice.
                  </p>
                  <div className="d-flex">
                    <p className="me-2">Already have an account? </p>
                    <Link to={"/login"}>Sign in</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
