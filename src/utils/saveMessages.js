
import React from 'react-native'
import { AsyncStorage } from 'react-native'

saveMessages = async(messages) => {
	try {
		var messages = JSON.stringify(messages)
		await AsyncStorage.setItem('barnabyMessages', messages)
	} catch (error) {
		console.log("Error saving messages: " + error)
	}
}

export default saveMessages
