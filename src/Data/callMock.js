const axios = require('axios')

/**
 * @function callMock service who fetch the Mock
 * @param {string} callType routes where called
 * @param {id} id id of user
 * @returns {object} data of call API
 */
export async function callMock(callType, id) {
    let route = '/user/'
    if (callType === '/user/') {
        route += id
    } else {
        route += id
        route += callType
    }

    console.log(route)
    let dataReturn = []
    switch (route) {
        case '/user/18':
            await axios.get('./mock_infoUser.JSON').then((resp) => {
                dataReturn = [resp.data.data]
            })
            break
        case '/user/18/activity':
            await axios.get('./mock_activityUser.JSON').then((resp) => {
                dataReturn = [resp.data.data.sessions]
            })
            break
        case '/user/18/average-sessions':
            await axios.get('./mock_averageSessionsUser.JSON').then((resp) => {
                dataReturn = [resp.data.data.sessions]
            })
            break
        case '/user/18/activities':
            await axios.get('./mock_performanceUser.JSON').then((resp) => {
                dataReturn = [resp.data.data.data]
            })
            break
        case '/user/18/today-score':
            await axios.get('./mock_infoUser.JSON').then((resp) => {
                console.log(resp.data.data.score)
                dataReturn = [
                    [
                        { name: 'score', value: resp.data.data.score },
                        { name: 'total', value: 1 - resp.data.data.score },
                    ],
                ]
            })
            break
        default:
    }
    return dataReturn
}
