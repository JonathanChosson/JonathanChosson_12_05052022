import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Components/FrameInfos.css'
import calories from '../Assets/calories.png'
import proteins from '../Assets/protein.png'
import carbonate from '../Assets/carbonate.png'
import lipids from '../Assets/lipids.png'

/**
 * Display frame information component
 * @component
 * @param {string} type the kind of information
 * @param {number} data the value of kind
 * @returns {reactElement}
 */
const FrameInfos = ({ type, data }) => {
    return <div>{formatReturn(type, data)}</div>
}

/**
 * @function formatReturn
 * @param {string} type type of data send
 * @param {number} data quantity of data
 * @returns {object} Format the return for display good information
 */
function formatReturn(type, data) {
    if (type === 'calorieCount') {
        return (
            <div className="FrameInfos">
                <div className="FrameInfos__img calories">
                    <img src={calories} alt="Calories" />
                </div>
                <div className="FrameInfos__infos">
                    <p className="FrameInfos__infos__p--bold">{data}kCal</p>
                    <p className="FrameInfos__infos__p">Calories</p>
                </div>
            </div>
        )
    } else if (type === 'proteinCount') {
        return (
            <div className="FrameInfos">
                <div className="FrameInfos__img proteins">
                    <img src={proteins} alt="Proteines" />
                </div>
                <div className="FrameInfos__infos">
                    <p className="FrameInfos__infos__p--bold">{data}g</p>
                    <p className="FrameInfos__infos__p">Proteines</p>
                </div>
            </div>
        )
    } else if (type === 'carbohydrateCount') {
        return (
            <div className="FrameInfos">
                <div className="FrameInfos__img carbonate">
                    <img src={carbonate} alt="Glucides" />
                </div>
                <div className="FrameInfos__infos">
                    <p className="FrameInfos__infos__p--bold">{data}g</p>
                    <p className="FrameInfos__infos__p">Glucides</p>
                </div>
            </div>
        )
    } else if (type === 'lipidCount') {
        return (
            <div className="FrameInfos">
                <div className="FrameInfos__img lipids">
                    <img src={lipids} alt="Lipides" />
                </div>
                <div className="FrameInfos__infos">
                    <p className="FrameInfos__infos__p--bold">{data}g</p>
                    <p className="FrameInfos__infos__p">Lipides</p>
                </div>
            </div>
        )
    } else {
        return ''
    }
}

FrameInfos.propTypes = {
    type: PropTypes.string,
    data: PropTypes.number,
}

formatReturn.propTypes = {
    type: PropTypes.string,
    data: PropTypes.number,
}

export default FrameInfos
