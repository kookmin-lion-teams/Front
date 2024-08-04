import styles from "../CSS/SubscribeUser.module.css";
import TabLine from "./TabLine";
import TabFrame from "./TabFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SubscribeUser() {


    return (

        <TabFrame>
            <TabLine content={'현재 구독 내용'}></TabLine>
            <div className={styles.Subscrbing}>
                <div className={styles.SubscrbingInfo}>
                    <span>박석진 트레이너</span>
                    <span>|</span>
                    <span>2024.08.01(목) 까지</span>
                </div>

                <div style={{ flexGrow: '1' }}></div>

                <div className={styles.SubscrbingBtn}>
                    <div>0 / 10</div>
                    <button>상세보기</button>
                </div>
            </div>

            <TabLine content={'이전 구독 내용'}></TabLine>

            <div className={styles.Subscrbed}>
                <div className={styles.SubscrbedInfo}>
                    <span>박석진 트레이너</span>
                    <span>|</span>
                    <span>2024.08.01(목) 까지</span>
                </div>

                <div style={{ flexGrow: '1' }}></div>

                <div className={styles.SubscrbedBtn}>
                    <div>0 / 10</div>
                    <button>상세보기</button>
                </div>
            </div>


            <div className={styles.Subscrbed}>
                <div className={styles.SubscrbedInfo}>
                    <span>박석진 트레이너</span>
                    <span>|</span>
                    <span>2024.08.01(목) 까지</span>
                </div>

                <div style={{ flexGrow: '1' }}></div>

                <div className={styles.SubscrbedBtn}>
                    <div>0 / 10</div>
                    <button>상세보기</button>
                </div>
            </div>


            <div className={styles.Subscrbed}>
                <div className={styles.SubscrbedInfo}>
                    <span>박석진 트레이너</span>
                    <span>|</span>
                    <span>2024.08.01(목) 까지</span>
                </div>

                <div style={{ flexGrow: '1' }}></div>

                <div className={styles.SubscrbedBtn}>
                    <div><span>0</span>
                        <span style={{ margin: '0 1rem 0 1.3rem' }}>/</span>
                        <span>10</span></div>
                    <button>상세보기</button>
                </div>
            </div>


        </TabFrame>

    )

}