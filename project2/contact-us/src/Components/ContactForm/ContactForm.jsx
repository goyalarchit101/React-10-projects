import Button from "../Button/button";
import styles from "./Form.module.css";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";


const ContactForm = () => {
    const [userDetails, setuUserDetails] = useState({
        name: "",
        email: "",
        address: ""
    })

    const chatSupport = (value) => {
        alert(value);
    }

    const callSupport = (value) => {
        alert(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setuUserDetails({
            name: event.target[0].value,
            email: event.target[1].value,
            address: event.target[2].value
        })
        // const [name, email, address] = userDetails;
    }

    const onSubmitButton = () => {
        console.log("sasas");
    }


    return (
        <div className={`${styles.form}`}>
            <div className="form">
                <div className={`${styles.via}`}>
                    <div className={`${styles.smallButtonsflex}`}>
                        <Button onButtonClick={() => chatSupport("this is chat Support")} istransparent={false} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={"24px"} />} />
                        <Button onButtonClick={() => callSupport("this is call support")} istransparent={false} text="VIA CALL" icon={<IoIosCall fontSize={"24px"} />} />
                    </div>
                    <Button istransparent={true} text="VIA EMAIL FORM" icon={<MdMessage fontSize={"24px"} />} />

                    <form onSubmit={onSubmit} className={styles.fullForm}>
                        <div className={styles.form_control}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor="text">Address</label>
                            <textarea name="text" rows="8" />
                        </div>
                        <div className={styles.submit_button}>
                            <Button onButtonClick={() => onSubmitButton} type="submit" istransparent={false} text="SUBMIT BUTTON" />
                        </div>

                        {/* <div>{name + " " + email + " " + address}</div> */}
                        <div>{userDetails.name && userDetails.name}</div>
                        <div>{userDetails.email && userDetails.email}</div>
                        <div>{userDetails.address && userDetails.address}</div>
                    </form>
                </div>
            </div>

            <div className={`${styles.formImage}`}>
                <img src="../../../public/Service 24_7-pana 1.svg"></img>
            </div>
        </div>
    )
}

export default ContactForm
