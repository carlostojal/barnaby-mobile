
import constants from '../constants.js'

requestApi = async (query) => {
    try {
        query.replace(' ', '+')
        var response = await fetch(constants.protocol + '://' + constants.serverAddress + ':' + constants.serverPort + '/assistant?q=' + query)
        var json = await response.json()
        console.log(json)
        return json		
    } catch (error) {
        console.error(error)
    }
}

export default requestApi
