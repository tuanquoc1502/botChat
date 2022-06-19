import React from "react";
import { Link } from "react-router-dom";
import { account } from "../../constant";
import styles from "./TabUser.module.scss";

const TabUser = () => {
  const handleLogout = () => {
    localStorage.removeItem("account");
    window.location.href = "/";
  };

  return (
    <div className={styles.wrapper}>
      {localStorage.getItem("account") ? (
        <div className={styles.loginSuccess}>
          <div className={styles.nameUser}>{account.user_name}</div>
          <div onClick={handleLogout} className={styles.signOut}>
            Sign out
          </div>
        </div>
      ) : (
        <div className={styles.navUser}>
          <Link to="/sign_in">
            <div className={styles.signIn}>Sign in</div>
          </Link>
          <Link to="/sign_up">
            <div className={styles.singUp}>Sign up</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TabUser;
