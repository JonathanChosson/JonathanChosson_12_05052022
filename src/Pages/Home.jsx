import React, { useEffect, useState } from 'react'
import '../Styles/Pages/Home.css'
import Header from '../Components/Header'
import Main from '../Components/Main'
import VerticalNavBar from '../Components/VerticalNavBar'

const Home = () => {
    const [userId, setUserId] = useState()
    /**
     * Choose here 'mock' or 'prod' environment
     */
    const env = 'mock'
    useEffect(() => {
        /**
         * Choose here the id you whant to use (caution if environment is mock place 18)
         */
        setUserId(18)
    }, [userId])

    return (
        <div>
            <Header></Header>
            <div className="Home__center">
                <VerticalNavBar></VerticalNavBar>
                {<Main userId={userId} env={env}></Main>}
            </div>
        </div>
    )
}

export default Home
