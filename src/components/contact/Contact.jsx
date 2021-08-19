// submit button


import {useState} from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
    };
    return (
        <div className={styles.contact} id="contact">
            <div className={styles.left}>
            <img className={styles.leftImg} src="" alt="" />
            </div>
            <div className={styles.right}>
                <h2>Leave a message</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email/Name" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span> Sent! </span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
