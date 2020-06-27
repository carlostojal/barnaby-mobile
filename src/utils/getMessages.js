
import React from 'react-native'
import { AsyncStorage } from 'react-native'

getMessages = async () => {
	try {
		var messages = await AsyncStorage.getItem('barnabyMessages')
		messages = JSON.parse(messages)
		return messages
	} catch (error) {
		console.log("Error getting messages: " + error)
	}
}

export default getMessages
