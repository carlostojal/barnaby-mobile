import React, {	Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import containers from '../style/containers.js'
import text from '../style/text.js'

class SendComponent extends Component {

	state = {
		lastSentMessage: ''
	}

	updateLastSentMessage = (text) => {
		this.setState({lastSentMessage: text})
	}

	addMessage(message) {
		if(message != "") { // the text input is not empty
			var messages = this.props.messages
			var changeMessages = this.props.changeMessages
			var requestApi = this.props.requestApi

			// user message
			messages.push({ // add the new message to the message array
				"sender": "user",
				"text": message
			})
			changeMessages(messages) // update chat
			this.updateLastSentMessage("") // clear last message variable
			this.textInput.clear() // clear text input 

			// say that the bot is typing
			messages.push({
				"sender": "bot",
				"text": "Typing..."
			})

			// server response
			var response = requestApi(message) // request the API
			response.then( data => { // wait for the promise
				messages[messages.length - 1]["text"] = data // change "Typing..." to the actual message
				changeMessages(messages) // update chat
			})
		}
	}

	render() {
		return(
			<View style = {containers.send}>
				<TextInput
					style = {containers.textInput}
					placeholder = "Message" 
					ref = {input => { this.textInput = input}}
					onChangeText = {this.updateLastSentMessage} /* update the last sent message whenever the user types, so it will be ready when he sends */ />
				<TouchableOpacity
					style = {containers.button}
					onPress = {() => {
						this.addMessage(this.state.lastSentMessage)
					}}>
					<Text style = {text.button}> Send </Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default SendComponent
