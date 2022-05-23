const axios = require('axios')

/**
 * @function
 * @param {string} callType routes where called
 * @param {id} id id of user
 * @returns {object} data of call API
 */
export async function callAPI(callType, id) {
    let route = 'http://localhost:3000/user/'
    if (callType === '/user/') {
        route += id
    } else {
        route += id
        route += callType
    }

    // console.log(route)
    let dataReturn = []
    if (id && callType) {
        switch (callType) {
            case '/user/':
                await axios.get(route).then((resp) => {
                    dataReturn = [resp.data.data]
                })
                break
            case '/activity':
                await axios.get(route).then((resp) => {
                    dataReturn = [resp.data.data.sessions]
                })
                break
            case '/average-sessions':
                await axios.get(route).then((resp) => {
                    dataReturn = [resp.data.data.sessions]
                })
                break
            case '/performance':
                await axios.get(route).then((resp) => {
                    dataReturn = [resp.data.data.data]
                })
                break
            case '/today-score':
                await axios
                    .get(`http://localhost:3000/user/${id}`)
                    .then((resp) => {
                        let userScore = resp.data.data.score
                            ? resp.data.data.score
                            : resp.data.data.todayScore
                        dataReturn = [
                            [
                                { name: 'score', value: userScore },
                                {
                                    name: 'total',
                                    value: 1 - userScore,
                                },
                            ],
                        ]
                    })
                break
            default:
        }
    }
    return dataReturn
}
