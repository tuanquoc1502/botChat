import React, { useState, useRef } from "react";
import styles from "./Home.module.scss";
import iconBot from "../../assets/iconbot.webp";
import TabUser from "../TabUser/TabUser";
import { searchLibaryMessage } from "../../TrainingBot";

import { BsTelephone } from "react-icons/bs";
import { BiAnalyse } from "react-icons/bi";
import { IoSendSharp } from "react-icons/io5";

import { FadingBalls } from "react-cssfx-loading";
import { account } from "../../constant";
import { Link } from "react-router-dom";

const Home = () => {
  const [chatValue, setChatValue] = useState("");
  const [dataMessage, setDataMessage] = useState([]);
  const [delay, setDeday] = useState(false);

  const inputRef = useRef();

  const handleSendChat = () => {
    if (chatValue.trim() === "") {
      return;
    }

    const isDataMessage = searchLibaryMessage.find((data) => {
      return chatValue.trim().includes(data.messageUser);
    });

    if (isDataMessage) {
      const formDataMessage = {
        messageUser: chatValue,
        messageBot: isDataMessage.messageBot,
        menus: isDataMessage.menus,
        url_img: isDataMessage?.url_img,
      };
      setDataMessage((prev) => [...prev, formDataMessage]);
      setChatValue("");
      inputRef.current.focus();
    } else {
      const formDataMessage = {
        messageUser: chatValue,
        messageBot: "Xin lỗi, tôi chưa hiểu, bạn có thể nói lại được không ?",
      };

      setDataMessage((prev) => [...prev, formDataMessage]);
      setChatValue("");
      inputRef.current.focus();
    }

    setDeday(true);
    setTimeout(() => {
      setDeday(false);

      //random Timeout 0.5 -2.5s
    }, 1500);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSendChat();
    }
  };

  return (
    <>
      <TabUser />
      {account ? (
        <div className={styles.wrapper}>
          <div className={styles.boxChat}>
            <div className={styles.header}>
              <div className={styles.avatarBot}>
                <img src={iconBot} alt="" />
              </div>
              <div className={styles.nameBot}>
                <span className={styles.name}>Cube Bot</span>
                <span className={styles.subName}>Powered by Messager</span>
              </div>
              <div className={styles.closeBot}>
                <BsTelephone />
              </div>
            </div>
            {dataMessage.length === 0 ? (
              <div className={styles.waitMessage}>
                Chào mừng {account.user_name} đến với Cube Bot. Bạn có thể bắt
                đầu trò chuyện ngay bây giờ.
              </div>
            ) : (
              <ul className={styles.bodyBot}>
                {dataMessage.map((message, index) => (
                  <li key={index}>
                    <div className={styles.messageUser}>
                      <span>{message.messageUser}</span>
                    </div>
                    <div className={styles.messageBot}>
                      <div className={styles.boxTop}>
                        <img src={iconBot} alt="" />
                        <span>{message.messageBot}</span>
                      </div>

                      <div className={styles.wrapperMenu}>
                        {message.menus
                          ? message.menus.map((item, index) => (
                              <span className={styles.itemMenu} key={index}>
                                {item}
                              </span>
                            ))
                          : ""}
                      </div>

                      {message.url_img ? (
                        <div className={styles.bottomImage}>
                          {message.url_img.map((item, index) => (
                            <span className={styles.itemImg} key={index}>
                              <a href="https://www.facebook.com/tuanquoc1502/">
                                <img src={item} alt="" />
                              </a>
                            </span>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* {delay && <FadingBalls />} */}
          </div>

          <div className={styles.inputChat}>
            <div className={styles.bottom}>
              <BiAnalyse className={styles.iconRight} />
              <input
                ref={inputRef}
                value={chatValue}
                onChange={(e) => setChatValue(e.target.value)}
                placeholder="Ask a question..."
                onKeyPress={handleEnter}
              />
              <IoSendSharp
                onClick={handleSendChat}
                className={styles.iconSend}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.screenSaver}>
          <h1>
            Bài tập khởi nghiệp nhóm <span>#</span>
          </h1>
          <h2 className={styles.topic}>Chủ đề: Chatbot</h2>
          <h2>Giáo viên hướng dẫn: Nguyễn Quang Đạo</h2>
          <img src={iconBot} alt="" />
        </div>
      )}
    </>
  );
};

export default Home;
