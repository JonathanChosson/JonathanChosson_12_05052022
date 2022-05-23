const axios = require('axios')

/**
 * @function
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
        case '/user/18/performance':
            await axios.get('./mock_performanceUser.JSON').then((resp) => {
                dataReturn = [resp.data.data.data]
            })
            break
        case '/user/18/today-score':
            await axios.get('./mock_infoUser.JSON').then((resp) => {
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
