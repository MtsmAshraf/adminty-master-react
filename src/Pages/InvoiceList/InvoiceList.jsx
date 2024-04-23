import { Link } from "react-router-dom"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./invoice-list.module.css"
import { useEffect, useState } from "react"
import { faEye, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profileImg from "../../assets/imgs/male-user.jpg"
const InvoiceList = () => {
    let [paidStatus, setPaidStatus] = useState("full")
    let [paidStatusSal, setPaidStatusSal] = useState("partially")
    let [delivered, setDelivered] = useState(true)
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
                max-width: 60%;
                width: fit-content;
                line-height: 1.4;
                background-color: #ddd;
                border-radius: var(--main-border-radius) 0px calc(var(--main-border-radius) + 10px) var(--main-border-radius);
                background-color: var(--main-color);
                color: #fff;
                margin-left: auto;
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
    
        let leftHeaderLis = document.querySelectorAll("#left-header li")
        let leftToggledParts = document.querySelectorAll("#left > *:not(#left-header)")
        leftHeaderLis.forEach((li, index) => {
            li.onclick = () => {
                leftHeaderLis.forEach((li) => {
                    li.setAttribute("status", "")
                })
                leftToggledParts.forEach((part) => {
                    part.style.display = "none"
                })
                leftToggledParts[index].style.display = "block"
                li.setAttribute("status", "active")
            }
        })
    })

  return (
    <div className={styles.invoiceList}>
        <Breadcumbs pageName={"التيكتات"} />
        <div className={styles.content}>
            <div className={styles.left} id="left">
                <div className={styles.leftHeader} id="left-header">
                    <ul>
                        <li status="active">
                            التكتات
                        </li>
                        <li>
                            الشات
                        </li>
                        <li>
                            التتبع
                        </li>
                    </ul>
                </div>
                <div className={styles.tickectsWrapper}>
                    <div className={styles.tickets}>
                        <div className={styles.ticket}>
                            <Card>
                                <h4 class="label label-primary p-t-5 p-b-10">معلومات البوليصة</h4>
                                <div className={styles.ticketContent} dir="rtl">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <ul className={styles.ticketList }>
                                                <li className={styles.important}>
                                                    <h5>
                                                        رقم البوليصة: 
                                                    </h5>
                                                    <span>235-53428896</span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        عدد الطرود: 
                                                    </h5>
                                                    <span>25</span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        المنفذ: 
                                                    </h5>
                                                    <span>اسم المنفذ</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.progress}>
                                    <span  className={styles.progressPercentage}>
                                        <span></span>
                                        60%
                                    </span>
                                    <div className={styles.progressBar} data-progress="60%"></div>
                                </div>
                                <div className={styles.ticketFooter}>
                                    <p className={styles.due}>
                                        <span> Due : </span>
                                        <strong class="label label-primary">23 hours</strong>
                                    </p>
                                    <Link className={styles.eyeIcon} to="/invoice">
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.ticket}>
                            <Card>
                                <h4 class="label label-primary p-t-5 p-b-10">البيان الجمركي</h4>
                                <div className={styles.ticketContent} dir="rtl">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <ul className={styles.ticketList}>
                                                <li className={""}>
                                                    <h5>
                                                        رقم البيان: 
                                                    </h5>
                                                    <span>235-53428896</span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        التاريخ: 
                                                    </h5>
                                                    <span>25-10-2024</span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        المبلغ الإجمالي: 
                                                    </h5>
                                                    <span>5000</span>
                                                    <span className={styles.currency}>SAR</span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        حالة السداد: 
                                                    </h5>
                                                    <span className={styles.paidStatus} style={{backgroundImage: paidStatus === "full" ? "var(--success-gradient)" : paidStatus === "partially" ? "var(--primary-gradient)" :"var(--danger-gradient)"}}>
                                                        {paidStatus === "full" && "مدفوع"}
                                                        {paidStatus === "partially" && "مدفوع جزئي"}
                                                        {paidStatus === "unpaid" && "غير مدفوع"}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.progress}>
                                    <span  className={styles.progressPercentage}>
                                        <span></span>
                                        60%
                                    </span>
                                    <div className={styles.progressBar} data-progress="60%"></div>
                                </div>
                                <div className={styles.ticketFooter}>
                                    {/* <p className={styles.due}>
                                        <span> Due : </span>
                                        <strong class="label label-primary">23 hours</strong>
                                    </p> */}
                                    <Link className={styles.eyeIcon} to="/invoice">
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.ticket}>
                            <Card>
                                <h4 class="label label-primary p-t-5 p-b-10">فاتورة الشراء</h4>
                                <div className={styles.ticketContent} dir="rtl">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <ul className={styles.ticketList}>
                                                <li>
                                                    <h5>
                                                        المبلغ الإجمالي: 
                                                    </h5>
                                                    <span>5000</span>
                                                    <span className={styles.currency}>SAR</span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        عدد الفواتير: 
                                                    </h5>
                                                    <span>10</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ticketFooter}>
                                    {/* <p className={styles.due}>
                                        <span> Due : </span>
                                        <strong class="label label-primary">23 hours</strong>
                                    </p> */}
                                    <Link className={styles.eyeIcon} to="/bill-details">
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.ticket}>
                            <Card>
                                <h4 class="label label-primary p-t-5 p-b-10">نقل</h4>
                                <div className={styles.ticketContent} dir="rtl">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <ul className={styles.ticketList}>
                                                <li className={styles.important}>
                                                    <h5>
                                                        اسم المستلم: 
                                                    </h5>
                                                    <span>اسم المستلم</span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        المبلغ: 
                                                    </h5>
                                                    <span>5000</span>
                                                    <span className={styles.currency}>SAR</span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        الحالة: 
                                                    </h5>
                                                    <span className={styles.paidStatus} style={{backgroundImage: delivered  ? "var(--success-gradient)" : "var(--danger-gradient)"}}>
                                                        {
                                                            delivered ? "تم الاستلام" : "لم يستلم"
                                                        }
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ticketFooter}>
                                    <div class="task-list-table">
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.ticket}>
                            <Card>
                                <h4 class="label label-primary p-t-5 p-b-10">سال</h4>
                                <div className={styles.ticketContent} dir="rtl">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <ul className={styles.ticketList}>
                                                <li>
                                                    <h5>
                                                        حالة السداد: 
                                                    </h5>
                                                    <span className={styles.paidStatus} style={{backgroundImage: paidStatusSal === "full" ? "var(--success-gradient)" : paidStatusSal === "partially" ? "var(--primary-gradient)" :"var(--danger-gradient)"}}>
                                                        {paidStatusSal === "full" && "مدفوع"}
                                                        {paidStatusSal === "partially" && "مدفوع جزئي"}
                                                        {paidStatusSal === "unpaid" && "غير مدفوع"}
                                                    </span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        المبلغ الإجمالي: 
                                                    </h5>
                                                    <span>5000</span>
                                                    <span className={styles.currency}>SAR</span>
                                                </li>
                                                <li>
                                                    <h5>
                                                        عدد فواتير سال: 
                                                    </h5>
                                                    <span>10</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ticketFooter}>
                                    
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className={styles.chatWrapper}>
                    <div className={styles.chat}>
                        <div className={styles.chatHeader}>
                            <div className={styles.img}>
                                <img src={profileImg} alt="profile image" />
                                <span></span>
                            </div>
                            <h5 className={styles.userName}>
                                اسم المستخدم
                            </h5>
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
                <div className={styles.trackingWrapper}>
                    <div className={styles.tracking}>
                        <Card>
                            <h3>Tracking</h3>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={styles.summary}>
                <Card>
                    Summary
                </Card>
            </div>
      </div>
    </div>
  )
}

export default InvoiceList