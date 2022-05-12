import React, { useEffect, useState } from 'react'
import { callMock } from '../Data/callMock'
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts'
import '../Styles/Components/PieChartVue.css'

const PieChartVue = ({ env, userId }) => {
    const [userDataPie, setUserDataPie] = useState([])

    useEffect(() => {
        if (env === 'mock') {
            callMock('/today-score', userId).then((data) =>
                setUserDataPie(data[0])
            )
        }
    }, [env, userId])

    return (
        <div className="PieChartVue">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={userDataPie}
                        startAngle={90}
                        endAngle={450}
                        innerRadius={90}
                        outerRadius={100}
                        cornerRadius={10}
                        paddingAngle={5}
                        dataKey="value"
                        nameKey="name"
                    >
                        <Cell fill={'#E60000'} stroke={'#E60000'} />
                        <Cell fill={'transparent'} stroke={'transparent'} />
                    </Pie>
                    <Pie
                        outerRadius={'90'}
                        fill={'#FFFFFF'}
                        data={[{ name: 'background', value: 100 }]}
                        dataKey="value"
                    />
                    <Legend
                        verticalAlign="middle"
                        align="center"
                        // content={CustomLegend}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieChartVue
