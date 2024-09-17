import styles from "./Heder.module.scss";
import Logo from "/src/assets/img/PC/Logo.svg";
import Search from "/src/assets/img/Others/Search.svg";
import LogIn from "/src/assets/img/Others/login.svg";
import burgerOpen from "/public/burgerOpen.svg";
import burgerClose from "/public/burgerClose.svg";
import { useEffect, useState } from "react";
import HeaderList from "./HeaderList/HeaderList";

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (isActive) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
        }

        return () => {
            document.body.style.overflowY = "";
        };
    }, [isActive]);

    function burgerBtn() {
        setIsActive(!isActive);
    }
    return (
        <header>
            <section
                className={`${styles.container} ${styles["header-content"]}`}
            >
                <a href="/">
                    <img src={Logo} />
                </a>
                <div className={styles["mob-line-1"]}></div>
                <div className={styles["mob-line-2"]}></div>
                <ul className={styles.list}>
                    <HeaderList />
                </ul>
                <ul
                    className={`${styles["list-mob"]} ${styles.list}`}
                    style={{ right: isActive ? "0px" : "-100%" }}
                    onClick={burgerBtn}
                >
                    <li id="burgerCloser" className={styles["list-closer"]}>
                        <img src={burgerClose} alt="" />
                    </li>
                    <HeaderList />
                </ul>
                <div
                    id="burger"
                    className={styles.burger}
                    onClick={burgerBtn}
                    style={{
                        backgroundImage: `url(${
                            isActive
                                ? burgerClose
                                : burgerOpen
                        })`,
                    }}
                ></div>
                <div
                    className={styles.btns}
                    style={{ display: isActive ? "none" : "flex" }}
                >
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
