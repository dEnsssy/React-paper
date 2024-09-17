import styles from "./Banner.module.scss";
import Image from "/src/assets/img/PC/banner.webp";
import Image768 from "/src/assets/img/PC/banner768.webp";
import Image576 from "/src/assets/img/PC/banner576.webp";
import Button from "../ui/Button/Button";

export default function Banner() {
    return (
        <section className={`${styles.container} ${styles.content}`}>
            <div className={styles.text}>
                <h1>
                    Простые вещи. <br /> Из бумаги
                </h1>
                <p>
                    Бума́га (предположительно от итал. bombagia, первоисточником
                    же считается иранский) — волокнистый материал с минеральными
                    добавками.{" "}
                </p>
                <Button text="Каталог" />
            </div>
            <picture>
                <source srcSet={Image576} media="(max-width:576px)" />
                <source srcSet={Image768} media="(max-width:768px)" />
                <img src={Image} alt="Image" />
            </picture>
            {/* <img src={Image} alt="" /> */}
            <p id="qwe"
            style={{marginTop:"1000px"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                beatae reiciendis rem nam odio incidunt delectus unde nostrum
                natus! Id culpa iste in ex corporis eum numquam perferendis,
                similique minus!
            </p>
        </section>
    );
}
