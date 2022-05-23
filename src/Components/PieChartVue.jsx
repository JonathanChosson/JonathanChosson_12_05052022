import React, { useEffect, useState } from 'react'
import { callMock } from '../Data/callMock'
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts'
import '../Styles/Components/PieChartVue.css'

/**
 * Display the Pie chart component
 * @component
 * @param {number} userId the id of user
 * @param {string} env the environment
 * @returns {reactElement}
 */
const PieChartVue = ({ env, userId }) => {
    const [userDataPie, setUserDataPie] = useState([])

    useEffect(() => {
        if (env === 'mock') {
            callMock('/today-score', userId).then((data) =>
                setUserDataPie(data[0])
            )
        }
    }, [env, userId])

    /**
     * @function CustomLegend
     * @param {object} param0
     * @returns {object} the legend customized
     */
    const CustomLegend = ({ payload }) => {
        if (payload) {
            return (
                <div className="Pie__legend">
                    <p className="Pie__legend__p Pie__percent">{`${
                        payload[0].payload.value * 100
                    }%`}</p>
                    <p className="Pie__legend__p">
                        de votre <br /> objectif
                    </p>
                </div>
            )
        }
        return null
    }

    return (
        <div className="PieChartVue">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={userDataPie}
                        startAngle={90}
                        endAngle={450}
                        innerRadius={70}
                        outerRadius={80}
                        cornerRadius={10}
                        paddingAngle={5}
                        dataKey="value"
                        nameKey="name"
                    >
                        <Cell fill={'#E60000'} stroke={'#E60000'} />
                        <Cell fill={'transparent'} stroke={'transparent'} />
                    </Pie>
                    <Pie
                        outerRadius={'70'}
                        fill={'#FFFFFF'}
                        data={[{ name: 'background', value: 100 }]}
                        dataKey="value"
                    />
                    <Legend
                        verticalAlign="middle"
                        align="center"
                        content={CustomLegend}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieChartVue
