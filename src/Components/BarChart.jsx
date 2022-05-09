import React, { useEffect, useState } from 'react'
import { callMock } from '../Data/callMock'
import '../Styles/Components/BarChart.css'

const BarChart = ({ userId }) => {
    // useEffect(() => {
    //     const axiosData = async () => {
    //         const id = await userId
    //         const data = await callMock('/user/', id)
    //         console.log(data)
    //     }
    //     axiosData()
    // }, [userId])

    return (
        <div className="BarChart">
            <div className="BarChart__title">
                <p>Activité quotidienne</p>
            </div>
        </div>
    )
}

export default BarChart
