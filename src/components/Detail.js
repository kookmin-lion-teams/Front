import Nav_ from './Nav_'
import styles from "../CSS/Detail.module.css";
import { useState } from "react";
import { Navigate, useNavigate, useLocation} from 'react-router-dom';

function Detail(){
    const loaction = useLocation();
    const {partner} = loaction.state;

    
    let [imgurl , setImg] = useState()

    
    
    return(
        <>
            <Nav_></Nav_>
            <div className={styles.container}>

            <div className={styles.imgWrap}>
                {partner.name}

            </div>



            </div>
        </>
    )


}


export default Detail