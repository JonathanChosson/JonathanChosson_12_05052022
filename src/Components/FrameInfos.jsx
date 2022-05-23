import React from 'react'
import '../Styles/Components/FrameInfos.css'
import calories from '../Assets/calories.png'
import proteins from '../Assets/protein.png'
import carbonate from '../Assets/carbonate.png'
import lipids from '../Assets/lipids.png'

const FrameInfos = ({ type, data }) => {
    /**
     * Format the return for display good information
     * @param {string} type type of data send
     * @param {number} data quantity of data
     * @returns
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

    return <div>{formatReturn(type, data)}</div>
}

export default FrameInfos
