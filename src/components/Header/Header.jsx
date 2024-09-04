import styles from "./Heder.module.scss";
import Logo from "/src/assets/img/PC/Logo.svg";
export default function Header() {
    return (
        <header>
            <section className={`${styles.container} ${styles['header-content']}`}>
                <a href="/">
                    <img src={Logo} alt="" />
                </a>
                <ul className={styles.list}>
                    <a href="#">
                        <li>Продукция</li>
                    </a>
                    <a href="#">
                        <li>Материалы</li>
                    </a>
                    <a href="#">
                        <li>О нас</li>
                    </a>
                    <a href="#">
                        <li>Контакты</li>
                    </a>
                </ul>
            </section>
        </header>
    );
}
