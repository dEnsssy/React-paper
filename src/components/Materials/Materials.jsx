import MaterialCard from "./MaterialCard/MaterialCard";
import styles from "./Materials.module.scss";
import MaterialCard1 from "/src/assets/img/PC/materialCard1.webp";
import MaterialCard2 from "/src/assets/img/PC/materialCard2.webp";
import MaterialCard3 from "/src/assets/img/PC/materialCard3.webp";
import MaterialMane from "/src/assets/img/PC/materialMane.webp";

export default function Materials() {
    return (
        <>
            <section className={styles.materials}>
                <div className={styles["materials-content"]}>
                    <div className={styles.cards}>
                        <MaterialCard
                            image={MaterialCard1}
                            text={"Результат вашего обучения"}
                            version={1}
                        />
                        <MaterialCard
                            image={MaterialCard2}
                            text={"Результат вашего обучения"}
                            version={2}
                        />
                        <MaterialCard
                            image={MaterialCard3}
                            text={"Результат вашего обучения"}
                            version={3}
                        />
                    </div>
                    <div className={styles.info}>
                        <img src={MaterialMane} alt="" />
                        <div className={styles.text}>
                            <h3>Максимальная белизна</h3>
                            <p>
                                Для повышения белизны, гладкости и мягкости в
                                состав бумажной массы вводят белые минеральные
                                вещества: мел, тальк, каолин и др. Эта операция
                                называется наполнением.
                            </p>
                            <p>
                                Отлив бумажного листа осуществляют
                                на бумагоделательной машине, важнейшей частью
                                которой является непрерывно движущаяся (как
                                транспортер) металлическая или капроновая сетка.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
