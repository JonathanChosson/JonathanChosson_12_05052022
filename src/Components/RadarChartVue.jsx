import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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

/**
 * Display the Radar chart component
 * @component
 * @param {number} userId the id of user
 * @param {string} env the environment
 * @returns {reactElement}
 */
const RadarChartVue = ({ userId, env }) => {
    const [userDataRadar, setUserDataRadar] = useState([])

    useEffect(() => {
        if (env === 'mock') {
            callMock('/activities', userId).then((data) =>
                setUserDataRadar(data[0])
            )
        }
    }, [env, userId])

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

const frenchTranslation = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
}

/**
 * @function translation
 * @param {number} item
 * @returns {string} Translate the kind of performance
 */
const translation = (item) => frenchTranslation[item]

RadarChartVue.propTypes = {
    type: PropTypes.string,
    data: PropTypes.number,
}

translation.propTypes = {
    item: PropTypes.number,
}

export default RadarChartVue
