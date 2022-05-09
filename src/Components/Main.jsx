import React, { useEffect, useState } from 'react'
import { callMock } from '../Data/callMock'
import '../Styles/Components/Main.css'

const Main = ({ userId }) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const axiosData = async () => {
            const id = await userId
            const data = await callMock('/user/', id)
            setUserData(data)
        }
        axiosData()
    }, [userId])

    return (
        <div className="Main">
            <p className="Main__p">
                Bonjour{' '}
                <span className="Main__p__span">
                    {userData.userInfos.firstName}
                </span>
            </p>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Main
