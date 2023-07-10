import React from 'react'
import styles from "./login.scss"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase"

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({

    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;

        console.log(user)
        navigate("/12812jzy8y1zn");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg("Incorrect Email or Password");
      });
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input name='email' type="email" onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } placeholder="Email or phone number" />
          <input onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } type="password" name='password' placeholder="Password" />
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission} className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b > <Link id='hhh' to="register">Sign up now.</Link></b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Link to="https://www.google.com/recaptcha/about/"> <b id='hhhh'>Learn more</b>  </Link>.
          </small>
        </form>
      </div>
    </div>
  )
}

export default Login
