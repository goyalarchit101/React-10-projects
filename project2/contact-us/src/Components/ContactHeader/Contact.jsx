import ContactForm from "../ContactForm/ContactForm";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div>
        <section className={`container ${styles.sectionConatiner}`}>
            <div className={styles.contact}>Contact US</div>
            <div className={styles.contactDes}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </div>
            <ContactForm/>
        </section>
        </div>
    )
}

export default Contact
