import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let from = location.state?.from?.pathname || "/";
  if (loading || gLoading) {
    return <loading></loading>;
  }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    navigate("/admin/dashboard");
  };
  return (
    <>
      {/* <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">User Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "Provide a Valid Email",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && "Email is Required"}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Minimum 6 Characters",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" &&
                    "Password is Required"}
                </label>
              </div>

              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="Login"
              />
            </form>
            <p>
              New to DorkariBhai{" "}
              <Link className="text-primary" to="/signup">
                Create New Account
              </Link>
            </p>
            <div className="divider">Or</div>
            <button
              className="btn btn-outline"
              onClick={() => signInWithGoogle()}
            >
              Join With Google
            </button>
          </div>
        </div>
      </div> */}
      <div className="main-content">
        <div className="page-content">
          {/* START SIGN-IN */}
          <section className="bg-auth">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12">
                  <div
                    className="card auth-box mb-15"
                    style={{ background: '#0c0f2d' }}

                  >
                    <div className="row g-0">
                      <div className="col-lg-6 text-center">
                        <div className="card-body p-4">
                          <Link to="/">
                            <img
                              src="https://themesflat.co/html/cyfoniihtml/assets/images/logo/logo.png"
                              alt="logo"
                            />
                          </Link>
                          <div className="mt-5">
                            <img
                              src="https://themesdesign.in/jobcy/layout/assets/images/auth/sign-in.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="auth-content card-body p-5 h-100 text-white">
                          <div className="w-100">
                            <div className="text-center mb-4">
                              <h5>Welcome Back !</h5>
                              <p className="text-white-70">
                                Sign in to continue to Seo Webasite.
                              </p>
                            </div>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="auth-form"
                            >
                              <div className="mb-3">
                                <label
                                  htmlFor="usernameInput"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="usernameInput"
                                  placeholder="Enter your Email"
                                  {...register("email", {
                                    required: {
                                      value: true,
                                      message: "Email is Required",
                                    },
                                    pattern: {
                                      value: /[A-Za-z]{3}/,
                                      message: "Provide a Valid Email",
                                    },
                                  })}
                                />
                                <label class="label">
                                  {errors.email?.type === "required" &&
                                    "Email is Required"}
                                </label>
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="passwordInput"
                                  className="form-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="passwordInput"
                                  placeholder="Enter your password"
                                  {...register("password", {
                                    required: {
                                      value: true,
                                      message: "Password is Required",
                                    },
                                    minLength: {
                                      value: 6,
                                      message: "Minimum 6 Characters",
                                    },
                                  })}
                                />
                                <label class="label">
                                  {errors.password?.type === "required" &&
                                    "Password is Required"}
                                </label>
                              </div>

                              <div className="text-center">
                                <button
                                  type="submit"
                                  className="action-btn w-full text-center"
                                >
                                 <span> Sign In</span>
                                </button>
                              </div>
                            </form>
                            <div className="mt-4 text-center">
                              <p className="mb-0">
                                Don't have an account ?{" "}
                                <Link
                                  to="/register"
                                  className="fw-medium text-white text-decoration-underline"
                                >
                                  {" "}
                                  Sign Up{" "}
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end auth-box*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
          {/* END SIGN-IN */}
        </div>
        {/* End Page-content */}
      </div>
    </>
  );
};

export default Login;
