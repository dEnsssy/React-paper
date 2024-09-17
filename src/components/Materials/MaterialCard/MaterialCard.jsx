import styles from "./MaterialCard.module.scss";

// eslint-disable-next-line react/prop-types
export default function MaterialCard({ image, text, version }) {
    return (
        <>
            <section className={styles.card}>
                <img src={image} alt="" />
                <div className={styles.text}>
                    <h3>V.{version}</h3>
                    <p>{text}</p>
                </div>
            </section>
        </>
    );
}
