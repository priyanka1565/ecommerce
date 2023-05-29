import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/loader";
import "./login.css"

interface FieldErrorInterface {
  username: string[];
  password: string[];
}

export default function Login() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const f:FieldErrorInterface={ username:[], password:[]}
  const [fieldError, setFieldError] = useState(f)
  const [showLoader, setShowLoader] = useState(false)
  let navigate = useNavigate();
  const handleFormChange =  (key:string, e: any) => {
    if(key === "username") {
      setUserName(e.target.value)
    } else if (key === "password") {
      setPassword(e.target.value)
    }
  }

  const validateForm =  () => {
    const f:FieldErrorInterface={ username:[], password:[]}
    if(username === "") {
      f.username = ["This field may not be blank"]
      setFieldError(f)
    }
    if(password === "") {
      f.password = ["This field may not be blank"]
      setFieldError(f)
    }
   
  }
  const isFormValid =  (): boolean => {
    if(fieldError?.username?.length !== 0 || fieldError?.password?.length !== 0) {
      return false
    }
    return true
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage("")
    setFieldError({username:[], password:[]})
    validateForm()
    if(!isFormValid()){
      return false
    }
    
    try {
      setShowLoader(true)
      const response = await Login({ username: username, password: password });
      localStorage.setItem("token", JSON.stringify(response.data));
      setShowLoader(false)
      navigate("/states");
    } catch (error) {
      setShowLoader(false)
      if(error?.response?.status === 401) {
        setErrorMessage(error?.response?.data?.detail);
      }  else if(error?.response?.status === 400) {
        setFieldError(error?.response?.data)
      } else {
        setErrorMessage("Something went wrong please try again")
      }
    }
  };

  return (
    <div className="hold-transition login-page bg-img">
      {showLoader && <Loader/>}
      <div className="login-box">
        <div className="login-logo">
          <img
            src="../../dist/img/tourdubai/logofull.png"
            alt="Tourdubailogo"
            className="logo"
          />
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            {/* <p className="login-box-msg">Sign in</p> */}
            {errorMessage !== "" &&
              <div>
                <div className="alert alert-danger alert-dismissible">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  {errorMessage}
                </div>
              </div>
            }
            <form onSubmit={handleSubmit} autoComplete="off">

              <div className="input-group mb-3">
                <input
                  type="text"
                  className={`${fieldError?.username?.length !== 0 ? 'form-control is-invalid' : 'form-control'}`}
                  placeholder="Username"
                  onChange={(e) => handleFormChange("username", e)}
                />

                <div className="input-group-append">
                  <div className="input-group-text ">
                    <span className="fas fa-user" />
                  </div>
                </div>
                {fieldError?.username?.length !== 0 &&
                  <span id="exampleInputEmail1-error" className="error invalid-feedback">
                    
                    {
                      fieldError?.username?.map(e=>{
                        return e
                      })
                    }
                  </span>
                }

              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className={`${fieldError?.password?.length !== 0 ? 'form-control is-invalid' : 'form-control'}`}
                  placeholder="Password"
                  onChange={(e) => handleFormChange("password", e)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
                {fieldError?.password?.length !== 0 &&
                  <span className="error invalid-feedback">
                    
                    {
                      fieldError?.password?.map(e=>{
                        return e
                      })
                    }
                  </span>
                }
              </div>
              <div className="row login-row">
                {/* /.col */}
                <div className="col-4 ">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
}
