import axios from "axios";
import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import iconBot from "../../assets/iconbot.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpinStretch } from "react-cssfx-loading/lib";

const SignUp = () => {
  const [valueFormRegister, setValueFormRegister] = useState({
    user_name: "",
    account: "",
    password: "",
    re_password: "",
    isAdmin: false,
  });

  const notify = () => toast.success("You have successfully registered!");

  const [isError, setIsError] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);

  const handleInputFormRegister = (e) => {
    setIsError(false);
    setIsErrorPassword(false);
    setValueFormRegister({
      ...valueFormRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendForm = () => {
    if (
      valueFormRegister.user_name.trim() === "" ||
      valueFormRegister.account.trim() === "" ||
      valueFormRegister.password.trim() === "" ||
      valueFormRegister.re_password.trim() === "" ||
      valueFormRegister.account.trim().length < 6 ||
      valueFormRegister.password.trim().length < 6 ||
      valueFormRegister.re_password.trim().length < 6
    ) {
      setIsError(true);
      return;
    }

    if (
      valueFormRegister.password.trim() !== valueFormRegister.re_password.trim()
    ) {
      setIsErrorPassword(true);
      return;
    }

    setIsSignUp(true);
    axios.post(process.env.REACT_APP_API_URL, valueFormRegister);
    const timer = setTimeout(() => {
      setIsSignUp(false);
      notify();
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formSingup}>
        <ToastContainer />
        <h1 className={styles.title}>
          Sign up <img src={iconBot} alt="" />
        </h1>
        <div className={styles.userName}>
          <span className={styles.title}>User Name</span>
          <input name="user_name" onChange={handleInputFormRegister} />
          <span
            className={clsx(styles.errValue, {
              [styles.isError]: isError,
            })}
          >
            Please enter this field
          </span>
        </div>
        <div className={styles.account}>
          <span className={styles.title}>Account</span>
          <input name="account" onChange={handleInputFormRegister} />
          <span
            className={clsx(styles.errValue, {
              [styles.isError]: isError,
            })}
          >
            Account minimum 6 characters
          </span>
        </div>
        <div className={styles.password}>
          <span className={styles.title}>Password</span>
          <input
            type="password"
            name="password"
            onChange={handleInputFormRegister}
          />
          <span
            className={clsx(styles.errValue, {
              [styles.isError]: isError,
            })}
          >
            Password minimum 6 characters
          </span>
        </div>
        <div className={styles.rePassword}>
          <span className={styles.title}>Return password</span>
          <input
            type="password"
            name="re_password"
            onChange={handleInputFormRegister}
          />
          <span
            className={clsx(styles.errValue, {
              [styles.isErrorPassword]: isErrorPassword,
            })}
          >
            Mật khẩu không trùng khớp
          </span>
        </div>
        <div className={styles.bottomForm}>
          <button className={styles.signUp} onClick={handleSendForm}>
            Sign up
          </button>
          <Link to="/">
            <button className={styles.backHome}>Back</button>
          </Link>
          <div className={styles.loadingSussces}>
            {isSignUp && <SpinStretch />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
