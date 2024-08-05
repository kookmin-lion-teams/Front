import styles from "../CSS/SubscribeUser.module.css";
import TabLine from "./TabLine";
import TabFrame from "./TabFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import SubscribeUserModal from "./SubscribeUserModal";
import { useFindState } from "../store/Statefind";
import axios from "axios";

export default function SubscribeUser() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const [subUser, setSubUser] = useState([])

    const findState = useFindState();
    useEffect(() => {
        const fetchData = async () => {
            const user_id = sessionStorage.getItem("uid");


            try {
                const response = await axios.get("/back/api/user/r_list", { params: { user_id } });
                let CopyData = [...subUser];

                CopyData = response.data;

                setSubUser(CopyData.reservations);

            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, [findState]);


    let SubscrbedList = []
    let SubscrbingList = []
    console.log(subUser)

    const [info, setInfo] = useState([[]])

    subUser.map((sub, idx) => {
        let Edate = new Date(sub.EDATE)
        Edate = new Date(Edate.getFullYear(), Edate.getMonth(), Edate.getDate())
        const today = new Date();
        Edate < today ? SubscrbedList.push(sub) : SubscrbingList.push(sub)
    })



    return (

        <TabFrame>
            <TabLine content={'현재 구독 내용'}></TabLine>

            {
                SubscrbingList.map((sub, idx) => {

                    return (
                        <>
                            <div className={styles.Subscrbed}>
                                <div className={styles.SubscrbedInfo}>
                                    <span>{sub.PARTNER_NAME} 트레이너</span>
                                    <span>|</span>
                                    <span>{sub.EDATE} 까지</span>
                                </div>

                                <div style={{ flexGrow: '1' }}></div>

                                <div className={styles.SubscrbedBtn}>
                                    <div><span>{sub.CURRENT_COUNT}</span>
                                        <span style={{ margin: '0 1rem 0 1.3rem' }}>/</span>
                                        <span>{sub.FCOUNT}</span></div>
                                    <button onClick={() => { openModal(); setInfo(sub) }}>상세보기</button>
                                </div>
                            </div>



                        </>
                    )
                })
            }

            <TabLine content={'이전 구독 내용'}></TabLine>

            {
                SubscrbedList.map((sub, idx) => {

                    return (
                        <>
                            <div className={styles.Subscrbed}>
                                <div className={styles.SubscrbedInfo}>
                                    <span>{sub.PARTNER_NAME} 트레이너</span>
                                    <span>|</span>
                                    <span>{sub.EDATE} 까지</span>
                                </div>

                                <div style={{ flexGrow: '1' }}></div>

                                <div className={styles.SubscrbedBtn}>
                                    <div><span>{sub.CURRENT_COUNT}</span>
                                        <span style={{ margin: '0 1rem 0 1.3rem' }}>/</span>
                                        <span>{sub.FCOUNT}</span></div>
                                    <button onClick={() => { openModal(); setInfo(sub) }}>상세보기</button>
                                </div>
                            </div>


                        </>
                    )


                })

            }



            {modalIsOpen && (<SubscribeUserModal openModal={modalIsOpen} closeModal={closeModal} setopenModal={openModal} info={info}></SubscribeUserModal>)}


        </TabFrame>

    )

}