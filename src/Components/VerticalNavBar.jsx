import React from 'react'
import '../Styles/Components/VerticalNavBar.css'
import yoga from '../Assets/yoga.png'
import nage from '../Assets/nage.png'
import velo from '../Assets/velo.png'
import muscu from '../Assets/muscu.png'

const VerticalNavBar = () => {
    return (
        <div className="VerticalNavBar">
            <div className="VerticalNavBar__icon">
                <img
                    src={yoga}
                    alt="Yoga"
                    className="VerticalNavBar__icon__img"
                />
                <img
                    src={nage}
                    alt="Nage"
                    className="VerticalNavBar__icon__img"
                />
                <img
                    src={velo}
                    alt="Vélo"
                    className="VerticalNavBar__icon__img"
                />
                <img
                    src={muscu}
                    alt="Musculation"
                    className="VerticalNavBar__icon__img"
                />
            </div>
            <div className="VerticalNavBar__copyright">
                <p className="VerticalNavBar__copyright__p">
                    Copiryght, SportSee 2020
                </p>
            </div>
        </div>
    )
}

export default VerticalNavBar
