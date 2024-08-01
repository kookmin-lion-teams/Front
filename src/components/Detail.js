import {Button, Row, Col } from "react-bootstrap";
import Nav_ from './Nav_'
import styles from "../CSS/Detail.module.css";
import { useState } from "react";


function Detail(){

    let [imgurl , setImg] = useState()

    return(
        <>
            <Nav_></Nav_>
            <div className={styles.container}>

            <div className={styles.imgWrap}>
                {

                }

            </div>



            </div>
        </>
    )


}


export default Detail