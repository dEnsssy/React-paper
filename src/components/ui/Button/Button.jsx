import styles from "./Button.module.scss";

export default function Button({ text, onClick }) {
    return <button className={styles.button}>{text}</button>;
}
