import React, { useEffect, useState } from 'react'
import { callMock } from '../Data/callMock'
import '../Styles/Components/Main.css'
import BarChartVue from './BarChartVue'
import LineChartVue from './LineChartVue'
import RadioChartVue from './RadioChartVue'

const Main = ({ userId, env }) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        if (env === 'mock') {
            callMock('/user/', userId).then((data) => setUserData(data))
        }
    }, [env, userId])

    return (
        <div className="Main">
            <p className="Main__p">
                Bonjour{' '}
                {userData.map((data, index) => (
                    <span className="Main__p__span" key={index}>
                        {data.userInfos.firstName}
                    </span>
                ))}
            </p>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            <div className="Main__chart">
                <div className="Main__chart__left">
                    <BarChartVue userId={userId} env={env}></BarChartVue>
                    <LineChartVue userId={userId} env={env}></LineChartVue>
                    <RadioChartVue userId={userId} env={env}></RadioChartVue>
                </div>
            </div>
        </div>
    )
}

export default Main
