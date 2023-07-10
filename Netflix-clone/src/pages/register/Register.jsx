import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../../firebase"
import styles from "./register.scss"
const Register = () => {
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
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.email,
        });
        console.log(user)
        navigate("/12812jzy8y1zn");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button onClick={() => { navigate("/") }} className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className='form-a'>
          <div className="input">

            <input name='email' type="email" onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            } placeholder="Email address" />


          </div>

          <b className={styles.error}>{errorMsg}</b>

          <div className="input">
            <input name='password' type="password" onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            } placeholder="Password" />


          </div>

          <button disabled={submitButtonDisabled} onClick={handleSubmission} className="registerButton">
            Start
          </button>

        </form>





      </div>
    </div>
  )
}

export default Register
