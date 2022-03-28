import React from "react";
import preloader from '../../../img/preloader.gif'
import s from './Preloader.module.css'

const Preloader = props => (
    <div className={s.preloader}>
       <img src={preloader} alt="Loading..." />
    </div>
)
export default Preloader