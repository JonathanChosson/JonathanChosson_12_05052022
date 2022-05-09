import React, { useEffect, useState } from 'react'
import { callMock } from '../Data/callMock'
import '../Styles/Components/Main.css'

const Main = ({ userId }) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        callMock('/user/', userId).then((data) => setUserData(data))
    }, [userId])

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
                <div className="Main__chart__left"></div>
            </div>
        </div>
    )
}

export default Main
