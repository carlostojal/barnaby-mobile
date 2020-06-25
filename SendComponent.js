import React, {	Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

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
			var requestServer = this.props.requestServer

			// user message
			messages.push({ // add the new message to the message array
				"sender": "user",
				"text": message
			})
			changeMessages(messages) // update chat
			this.updateLastSentMessage("") // clear last message variable
			this.textInput.clear() // clear text input 

			messages.push({
				"sender": "bot",
				"text": "Typing..."
			})

			// server response
			var response = requestServer(message) // request the API
			response.then( data => { // wait for the promise
				messages[messages.length - 1]["text"] = data // change "Typing..." to the actual message
				changeMessages(messages) // update chat
			})
		}
	}

	render() {
		return(
			<View style = {styles.container}>
				<TextInput
					style = {styles.textInput}
					placeholder = "Message" 
					ref = {input => { this.textInput = input}}
					onChangeText = {this.updateLastSentMessage} /* update the last sent image */ />
				<TouchableOpacity
					style = {styles.send}
					onPress = {() => {
						this.addMessage(this.state.lastSentMessage)
					}}>
					<Text style = {styles.sendText}> Send </Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default SendComponent

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	textInput: {
		flex: 1,
		margin: 10,
		marginRight: 0,
		padding: 10,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderRadius: 50
	},
	send: {
		margin: 10,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	sendText: {
		color: '#3272fc',
		fontWeight: 'bold'
	}
})
