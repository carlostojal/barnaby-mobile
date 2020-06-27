import React, {	Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import containers from '../style/containers.js'
import text from '../style/text.js'
import getMessages from '../utils/getMessages.js'
import saveMessages from '../utils/saveMessages.js'

class SendComponent extends Component {

	state = {
		lastSentMessage: '',
		showSendButton: false
	}

	handleInput = (text) => {
		this.setState({lastSentMessage: text})
		if(text == "") // the field is empty
			this.setState({showSendButton: false})
		else
			this.setState({showSendButton: true})
	}

	addMessage(message) {
		if(message != "") { // the text input is not empty
			var messages = this.props.messages
			var changeMessages = this.props.changeMessages
			var requestApi = this.props.requestApi

			// user message
			messages.push({ // add the new message to the message array
				"id": new Date().getTime(),
				"sender": "user",
				"content": {
					"response": message
				}
			})
			changeMessages(messages) // update chat
			saveMessages(messages) // save to persistent memory
			this.handleInput("") // clear last message variable
			this.textInput.clear() // clear text input 

			// say that the bot is typing
			messages.push({
				"id": new Date().getTime(),
				"sender": "bot",
				"content": {
					"response": "Typing..."
				}
			})

			// server response
			var response = requestApi(message) // request the API
			response.then( data => { // wait for the promise
				messages[messages.length - 1]["id"] = new Date().getTime()
				messages[messages.length - 1]["content"] = data // change "Typing..." to the actual message
				changeMessages(messages) // update chat
				saveMessages(messages) // save to persistent memory
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
					onChangeText = {this.handleInput} /* update the last sent message whenever the user types, so it will be ready when he sends */ />
				{ this.state.showSendButton && 
					<TouchableOpacity
						style = {containers.button}
						onPress = {() => {
							this.addMessage(this.state.lastSentMessage)
						}}>
						<Text style = {text.button}> Send </Text>
					</TouchableOpacity>
				}
			</View>
		)
	}
}

export default SendComponent
