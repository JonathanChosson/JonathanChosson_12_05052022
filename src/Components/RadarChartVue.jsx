import React, { useEffect, useState } from 'react'
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
} from 'recharts'
import { callMock } from '../Data/callMock'
import '../Styles/Components/RadarChartVue.css'

const RadarChartVue = ({ userId, env }) => {
    const [userDataRadar, setUserDataRadar] = useState([])

    useEffect(() => {
        if (env === 'mock') {
            callMock('/activities', userId).then((data) =>
                setUserDataRadar(data[0])
            )
        }
    }, [env, userId])

    const frenchTranslation = {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité',
    }

    const translation = (item) => frenchTranslation[item]

    return (
        <div className="RadioChartVue">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    startAngle={210}
                    endAngle={570}
                    outerRadius={55}
                    data={userDataRadar}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="white"
                        tickLine={false}
                        style={{ fontSize: 12 }}
                        tickFormatter={translation}
                    />
                    <PolarRadiusAxis
                        tickCount={6}
                        tick={false}
                        axisLine={false}
                    />
                    <Radar
                        dataKey="value"
                        stroke="false"
                        fill="rgba(255, 1, 1, 0.7)"
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RadarChartVue
