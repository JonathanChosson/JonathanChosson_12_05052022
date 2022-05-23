import React, { useEffect, useState } from 'react'
import '../Styles/Pages/Home.css'
import Header from '../Components/Header'
import Main from '../Components/Main'
import VerticalNavBar from '../Components/VerticalNavBar'

const Home = () => {
    const [userId, setUserId] = useState()
    const [env, setEnv] = useState()
    useEffect(() => {}, [userId])

    function selectionDisplay() {
        function setData(setter, value) {
            if (setter === 'env') {
                setEnv(value)
            } else if (setter === 'user') {
                setUserId(value)
            }
        }
        function selectionId() {
            return (
                <div className="Home__center--select">
                    <p>Choisir un Id</p>
                    {env === 'mock' ? (
                        setData('user', 18)
                    ) : (
                        <>
                            <p
                                className="Home__button"
                                onClick={() => setData('user', 12)}
                            >
                                User 12
                            </p>
                            <p
                                className="Home__button"
                                onClick={() => setData('user', 18)}
                            >
                                User 18
                            </p>
                        </>
                    )}
                </div>
            )
        }
        function selectionEnv() {
            return (
                <div className="Home__center--select">
                    <p>Choisir un environement</p>
                    <p
                        className="Home__button"
                        onClick={() => setData('env', 'mock')}
                    >
                        Mock
                    </p>
                    <p
                        className="Home__button"
                        onClick={() => setData('env', 'prod')}
                    >
                        API
                    </p>
                </div>
            )
        }
        return <div>{env ? selectionId() : selectionEnv()}</div>
    }

    return (
        <div>
            {userId ? (
                <div>
                    <Header></Header>
                    <div className="Home__center">
                        <VerticalNavBar></VerticalNavBar>
                        {<Main userId={userId} env={env}></Main>}
                    </div>
                </div>
            ) : (
                selectionDisplay()
            )}
        </div>
    )
}

export default Home
