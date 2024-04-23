import styles from "./side-chats.module.css";
import profilePic from "../../assets/imgs/male-user.jpg"
import userPic from "../../assets/imgs/user.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const SideChats = () => {
    const shown = useSelector((state) => state.sideChat.shown);

    let showChats = false
    let formHandler = () => {
        let chatBody = document.querySelector("#chat-body")
        let messageValue = document.querySelector("#message").value;
        if(document.querySelector("#message").value !== ""){
            let messageP = document.createElement("p")
            let message = document.createElement("div")
            messageP.innerHTML = messageValue
            message.appendChild(messageP)
            let messageSpan = document.createElement("span")
            messageSpan.innerHTML = "10:31 PM"
            message.setAttribute("message-src", "user")
            message.appendChild(messageSpan)
            message.style.cssText = `
                margin-bottom: 10px;
                text-align: right;
                width: 100%;
            `
            messageP.style.cssText = `
                padding: 10px 20px;
                margin-bottom: 5px;
                text-align: right;
                max-width: 95%;
                width: fit-content;
                line-height: 1.4;
                background-color: #ddd;
                border-radius: var(--main-border-radius) 0px calc(var(--main-border-radius) + 10px) var(--main-border-radius);
                background-color: var(--main-color);
                color: #fff;
                margin-left: auto;
                font-size: 14px;
                margin-right: 0px;
            `
            messageSpan.style.cssText = `
                color: #777;
                font-size: 14px;
            `
            chatBody.appendChild(message)
            document.querySelector("#message").value = ""
        }
    }
    useEffect(() => {
        console.log("showChats", showChats)
        let sideChatsLis = document.querySelectorAll("#side-chat ul li")
        let chat = document.querySelector("#chat")
        sideChatsLis.forEach((li) => {
            li.onclick = () => {
                if(showChats && li.getAttribute("status") == "active") {
                    console.log("true")
                    chat.style.cssText = `
                        right: 0px;
                        transform: translateX(100%)
                    `
                    showChats = false
                    li.setAttribute("status", "")
                }else if(!showChats){
                    console.log("false")
                    chat.style.cssText = `
                        right: 70px;
                        transform: translateX(0%)
                    `
                    showChats = true
                }
                sideChatsLis.forEach((li) => {
                    li.setAttribute("status", "")
                })
                li.setAttribute("status", "active")
            }
        })
    },[])
  return (
    <div className={shown ? styles.sideChats + " " + styles.shown : styles.sideChats + " " + styles.hidden} id="side-chat">
        <ul>
            <li status="active">
                <div className={styles.img}>
                    <img src={profilePic} alt="profile picture" />
                </div>
            </li>
            <li>
                <div className={styles.img}>
                    <img src={userPic} alt="profile picture" />
                </div>
            </li>
            <li>
                <div className={styles.img}>
                    <img src={profilePic} alt="profile picture" />
                </div>
            </li>
            <li>
                <div className={styles.img}>
                    <img src={profilePic} alt="profile picture" />
                </div>
            </li>
            <li>
                <div className={styles.img}>
                    <img src={userPic} alt="profile picture" />
                </div>
            </li>
        </ul>
        <div className={styles.chat} id="chat">
            <div className={styles.chatHeader}>
                <h4>اسم المستخدم</h4>
            </div>
            <div className={styles.chatBody} id="chat-body">
                <div className={styles.message} message-src="client">
                    <p>
                        مرحبا! كيف حالك؟ 
                    </p>
                    <span>10:43 PM</span>
                </div>
                <div className={styles.message} message-src="client">
                    <p>
                        "مرحبا! كيف حالك اليوم؟ هل مرت يوم جيد؟ أتمنى أن تكون بخير وسعيد اليوم. هل لديك أي خطط مثيرة لهذا اليوم؟ أنا فقط أحاول الاسترخاء قليلاً والاستمتاع ببعض الوقت الهادئ. يمكن أن نتحدث عن أي شيء، فلا تتردد في مشاركتي ما تريد!"
                    </p>
                    <span>10:43 PM</span>
                </div>
                <div className={styles.message} message-src="user">
                    <p>
                        مرحبًا! كيف كان يومك؟ أتمنى أن تكون قد قضيت يومًا رائعًا. هل حدث شيء مميز اليوم؟ أو ربما كان يومًا هادئًا؟ سأكون هنا إذا كنت بحاجة إلى الحديث أو مشاركة أي شيء. فلا تتردد في التواصل!                                </p>
                    <span>10:43 PM</span>
                </div>
                <div className={styles.message} message-src="client">
                    <p>
                        مرحبا! كيف حالك؟ 
                    </p>
                    <span>10:43 PM</span>
                </div>
                <div className={styles.message} message-src="client">
                    <p>
                        "مرحبا! كيف حالك اليوم؟ هل مرت يوم جيد؟ أتمنى أن تكون بخير وسعيد اليوم. هل لديك أي خطط مثيرة لهذا اليوم؟ أنا فقط أحاول الاسترخاء قليلاً والاستمتاع ببعض الوقت الهادئ. يمكن أن نتحدث عن أي شيء، فلا تتردد في مشاركتي ما تريد!"
                    </p>
                    <span>10:43 PM</span>
                </div>
                <div className={styles.message} message-src="user">
                    <p>
                        مرحبًا! كيف كان يومك؟ أتمنى أن تكون قد قضيت يومًا رائعًا. هل حدث شيء مميز اليوم؟ أو ربما كان يومًا هادئًا؟ سأكون هنا إذا كنت بحاجة إلى الحديث أو مشاركة أي شيء. فلا تتردد في التواصل!                                </p>
                    <span>10:43 PM</span>
                </div>
            </div>
            <form className={styles.chatForm}>
                <div className={styles.inputWrapper}>
                    <textarea name="" id="message" placeholder="أكتب رسالتك هنا..." ></textarea>
                </div>
                <div className={styles.btnWrapper}>
                    <button type="button" className={styles.btn} onClick={formHandler}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SideChats