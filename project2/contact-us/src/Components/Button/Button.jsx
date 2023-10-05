

/* eslint-disable react/prop-types */
import styles from '././Button.module.css';

// interface TestProps {
//     title?: string;
//     name?: string;
// }

const Button = ({istransparent, icon, text, onButtonClick}) => {
    return (
        <button onClick={()=>onButtonClick()} className={!istransparent ? styles.smallButton : styles.bigButton}>
            <p> {icon}</p>
            <p> {text}</p>
            <p>{istransparent}</p>
        </button>
    )
}

export default Button



// className={`${styles.smallButton}`}