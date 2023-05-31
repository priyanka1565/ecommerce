import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/loader";
import "./login.css"
import axios from "axios";



export default function Login() {
  const [state, setState] = useState({
    name: "",
    password: "",
    
  });

  const handleChange = (filledName) => (e) => {
    const { value } = e.target;
    setState((preState) => ({
      ...preState,
      [filledName]: value,
    }));
    
  }
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state) {
      axios
        .post("https://fakestoreapi.com/auth/login", {
          method: "POST",
          body: JSON.stringify(state)
        })
        .then((response) => {
          console.log(response);
        });
    }

    
  }
return (
    <div className="hold-transition login-page bg-img">
    
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
                  {/* {errorMessage} */}
                </div>
              </div>
            
            <form onSubmit={handleSubmit} autoComplete="off">

              <div className="input-group mb-3">
                <input
                  type="text"
                 
                  className={`${''?.username?.length !== 0 ? 'form-control is-invalid' : 'form-control'}`}
                placeholder="Username"
                value={state.name}
                 onChange={handleChange("name")}
                />

                <div className="input-group-append">
                  <div className="input-group-text ">
                    <span className="fas fa-user" />
                  </div>
                </div>
                {''?.username?.length !== 0 &&
                  <span id="exampleInputEmail1-error" className="error invalid-feedback">
                    
                    {
                      ''?.username?.map(e=>{
                        return e
                      })
                    }
                  </span>
                }

              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                 className={`${''?.password?.length !== 0 ? 'form-control is-invalid' : 'form-control'}`}
                placeholder="Password"
                value={state.password}
                 onChange={handleChange("password")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
                {''?.password?.length !== 0 &&
                  <span className="error invalid-feedback">
                    
                    {
                      ''?.password?.map(e=>{
                        return e
                      })
                    }
                  </span>
                }
              </div>
              <div className="row login-row">
                {/* /.col */}
                <div className="col-4 ">
                  <button type="submit"  className="btn btn-primary btn-block">
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





