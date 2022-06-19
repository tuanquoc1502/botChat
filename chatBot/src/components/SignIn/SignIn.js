import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./SignIn.module.scss";
import { ToastContainer } from "react-toastify";
import iconBot from "../../assets/iconbot.webp";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { SpinStretch } from "react-cssfx-loading/lib";

const SignIn = () => {
  const [data, setData] = useState();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL).then((res) => setData(res.data));
  }, []);

  const loginSucces = () => {
    window.location.href = "/";
  };

  const handleLogin = () => {
    data.map((user) => {
      if (user.account !== account || user.password !== password) {
        setIsError(true);
        return;
      }

      if (user.account === account && user.password === password) {
        const dataInput = {
          account,
          password,
          user_name: user.user_name,
        };
        localStorage.setItem("account", JSON.stringify(dataInput));
        setIsError(false);
        setIsSignUp(true);

        const timer = setTimeout(() => {
          setIsSignUp(false);
          loginSucces();
        }, 1500);

        return () => clearTimeout(timer);
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formSingin}>
        <ToastContainer />
        <h1 className={styles.title}>
          Sign in <img src={iconBot} alt="" />
        </h1>
        <div className={styles.account}>
          <span className={styles.title}>Account</span>
          <input
            name="account"
            onChange={(e) => {
              setAccount(e.target.value);
              setIsError(false);
            }}
          />
        </div>
        <div className={styles.password}>
          <span className={styles.title}>Password</span>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setIsError(false);
            }}
          />
          <span
            className={clsx(styles.errValue, {
              [styles.isError]: isError,
            })}
          >
            Tài khoản hoặc mật khẩu không chính xác
          </span>
        </div>
        <div className={styles.bottomForm}>
          <button className={styles.signUp} onClick={handleLogin}>
            Sign in
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

export default SignIn;
