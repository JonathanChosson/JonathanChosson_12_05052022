const axios = require('axios')

/**
 * @function callMock service who fetch the Mock
 * @param {string} callType routes where called
 * @param {id} id id of user
 * @returns {object} data of call API
 */
export async function callMock(callType, id) {
    let route = callType
    route += id
    console.log(route)
    let dataReturn
    switch (route) {
        case '/user/18':
            await axios.get('mock_infoUser.JSON').then((resp) => {
                dataReturn = resp.data.data
            })
            break
        default:
    }
    return dataReturn
}
