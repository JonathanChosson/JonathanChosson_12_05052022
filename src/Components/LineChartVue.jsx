import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import { callMock } from '../Data/callMock'
import { callAPI } from '../Data/callAPI'
import '../Styles/Components/LineChart.css'

/**
 * Display the Line chart component
 * @component
 * @param {number} userId the id of user
 * @param {string} env the environment
 * @returns {reactElement}
 */
const LineChartVue = ({ userId, env }) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        if (env === 'mock') {
            callMock('/average-sessions', userId).then((data) =>
                setUserData(data[0])
            )
        } else if (env === 'prod') {
            callAPI('/average-sessions', userId).then((data) =>
                setUserData(data[0])
            )
        }
    }, [env, userId])

    return (
        <div className="Linechart">
            <p className="Linechart__p">Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={userData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
                >
                    <XAxis
                        dataKey="day"
                        tickFormatter={formatDay}
                        axisLine={false}
                        tickMargin={0}
                        tickLine={false}
                        stroke="rgba(255, 255, 255, 0.5)"
                        padding={{ left: 5, right: 5 }}
                        fontSize={12}
                        fontWeight={600}
                    />
                    <YAxis hide domain={['dataMin-10', 'dataMax+20']} />
                    <Tooltip
                        cursor={{
                            stroke: 'black',
                            strokeOpacity: 0.1,
                            strokeWidth: 60,
                        }}
                        content={<CustomTooltip />}
                    />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.6)"
                        strokeWidth={2}
                        activeDot={{
                            background: '#FFFFFF',
                            stroke: 'rgba(255, 255, 255, 0.198345)',
                            strokeWidth: 10,
                            r: 4,
                        }}
                        dot={{ r: 0 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }

/**
 * @function formatDay
 * @param {number} item
 * @returns {string} return the Format legend with letter of day
 */
const formatDay = (item) => daysWeek[item]

/**
 * @function CustomTooltip
 * @param {object} param0 Information of object was mouseover
 * @returns {object} Dom Object with good format to Customise the tooltip
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-lineChart">
                <p className="min">{`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null
}

LineChartVue.propTypes = {
    type: PropTypes.string,
    data: PropTypes.number,
}

formatDay.propTypes = {
    item: PropTypes.number,
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}

export default LineChartVue
