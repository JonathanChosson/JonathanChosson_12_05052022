import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from 'recharts'
import { callMock } from '../Data/callMock'
import '../Styles/Components/BarChartVue.css'

/**
 * Display the Bar chart component
 * @component
 * @param {number} userId the id of user
 * @param {string} env the environment
 * @returns {reactElement}
 */
const BarChartVue = ({ userId, env }) => {
    const [userDataBar, setUserDataBar] = useState([])

    useEffect(() => {
        if (env === 'mock') {
            callMock('/activity', userId).then((data) =>
                setUserDataBar(data[0])
            )
        }
    }, [env, userId])

    return (
        <div className="BarChart">
            <div className="BarChart__title">
                <p>Activité quotidienne</p>
            </div>
            <ResponsiveContainer height={250}>
                <BarChart
                    data={userDataBar}
                    margin={{ top: 0, right: 0, left: -20, bottom: 10 }}
                    barCategoryGap="30%"
                >
                    <Legend
                        verticalAlign="top"
                        align="right"
                        height={30}
                        iconType="circle"
                    />
                    <CartesianGrid strokeDasharray="3 5" vertical={false} />
                    <XAxis
                        tickFormatter={formatXAxis}
                        tickLine={false}
                        tickSize="10"
                    />
                    <YAxis
                        yAxisId="kilogram"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        domain={['dataMin-5', 'dataMax+10']}
                        interval={'preserveEnd'}
                        tickCount={4}
                    />
                    <YAxis
                        hide
                        yAxisId="calories"
                        orientation="right"
                        domain={[0, 'dataMax+5']}
                    />
                    <Tooltip width={50} content={<CustomTooltip />} />
                    <Bar
                        yAxisId="kilogram"
                        name="Poids (kg)"
                        dataKey="kilogram"
                        fill="#282D30"
                        label="test"
                        radius={[30, 30, 0, 0]}
                        maxBarSize={12}
                    />
                    <Bar
                        yAxisId="calories"
                        name="Calories brûlées (kCal)"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[30, 30, 0, 0]}
                        maxBarSize={12}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

/**
 * @function formatXAxis
 * @param {number} tickItem actual iteration
 * @returns {number} iteration of previous
 */
const formatXAxis = (tickItem) => {
    return tickItem + 1
}

/**
 * @function CustomTooltip
 * @param {object} param0 destructuration to get item active and payload
 * @returns {objbect} Dom custom tooltip
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-barChart">
                <p className="kg">{`${payload[0].value}kg`}</p>
                <p className="kcal">{`${payload[1].value}Kcal`}</p>
            </div>
        )
    }
    return null
}

BarChartVue.propTypes = {
    userId: PropTypes.number,
    env: PropTypes.string,
}

formatXAxis.propTypes = {
    tickItem: PropTypes.number,
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}

export default BarChartVue
