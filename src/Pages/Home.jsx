import React, { useEffect, useState } from 'react'
import '../Styles/Pages/Home.css'
import Header from '../Components/Header'
import Main from '../Components/Main'
import VerticalNavBar from '../Components/VerticalNavBar'

const Home = () => {
    const [userId, setUserId] = useState()

    useEffect(() => {
        setUserId(18)
    }, [userId])

    return (
        <div>
            <Header></Header>
            <div className="Home__center">
                <VerticalNavBar></VerticalNavBar>
                {<Main userId={userId}></Main>}
            </div>
        </div>
    )
}

export default Home
