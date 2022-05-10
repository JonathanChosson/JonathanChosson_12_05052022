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
        default:
    }
    return dataReturn
}
