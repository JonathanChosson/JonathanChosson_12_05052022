import React, { useEffect, useState } from 'react'
import { callMock } from '../Data/callMock'
import '../Styles/Components/Main.css'
import BarChartVue from './BarChartVue'
import LineChartVue from './LineChartVue'
import PieChartVue from './PieChartVue'
import RadarChartVue from './RadarChartVue'
import FrameInfos from './FrameInfos'

const Main = ({ userId, env }) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        if (env === 'mock') {
            callMock('/user/', userId).then((data) => setUserData(data))
        }
    }, [env, userId])

    /**
     * Return the name of the key of value in object
     * @param {object} object full object keyData
     * @param {number} value Value we whant the key
     * @returns
     */
    function getKeyByValue(object, value) {
        return Object.keys(object).find((key) => object[key] === value)
    }

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
                    <RadarChartVue userId={userId} env={env}></RadarChartVue>
                    <PieChartVue userId={userId} env={env}></PieChartVue>
                </div>
                <div className="Main__chart__right">
                    {userData[0]
                        ? Object.values(userData[0].keyData).map(
                              (cat, index) => (
                                  //   console.log(
                                  //       getKeyByValue(userData[0].keyData, cat),
                                  //       cat,
                                  //       userData[0].keyData
                                  //   )
                                  <FrameInfos
                                      key={index}
                                      type={getKeyByValue(
                                          userData[0].keyData,
                                          cat
                                      )}
                                      data={cat}
                                  ></FrameInfos>
                              )
                          )
                        : ''}
                </div>
            </div>
        </div>
    )
}

export default Main
