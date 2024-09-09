import styles from "./Heder.module.scss";
import Logo from "/src/assets/img/PC/Logo.svg";
import Search from "/src/assets/img/Others/search.svg";
import LogIn from "/src/assets/img/Others/login.svg";

export default function Header() {
    return (
        <header>
            <section
                className={`${styles.container} ${styles["header-content"]}`}
            >
                <a href="/">
                    <img src={Logo} alt="" />
                </a>
                <div className={styles["mob-line"]}></div>
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
                <div className={styles.btns}>
                    <button>
                        {" "}
                        <img src={Search} alt="Search" />
                    </button>
                    <button>
                        {" "}
                        <img src={LogIn} alt="Log In" />
                    </button>
                </div>
            </section>
        </header>
    );
}
