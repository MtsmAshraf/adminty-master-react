import styles from "./side-chats.module.css";
import profilePic from "../../assets/imgs/male-user.jpg"
import userPic from "../../assets/imgs/user.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const SideChats = () => {
  return (
    <div className={styles.sideChats}>
        <ul>
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
        <div className={styles.chat}>
            <div className={styles.chatHeader}>
                <h4>اسم المستخدم</h4>
            </div>
            <div className={styles.chatBody}>
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
                    <button type="button" className={styles.btn} >
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SideChats