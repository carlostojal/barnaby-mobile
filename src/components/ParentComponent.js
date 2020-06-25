import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import ChatComponent from './ChatComponent.js'
import SendComponent from './SendComponent.js'
import containers from '../style/containers.js'
import requestApi from '../utils/requestApi.js'

class ParentComponent extends Component {

	state = {
		messages: [ // this will store the chat messages
			{
				"sender": "bot",
				"text": "Hello!"
			},
			{
				"sender": "bot",
				"text": "My name is Barnaby."
			}
		]
	}

	changeMessages = (messages) => {
		this.setState({
			messages: messages
		})
	}

	render() {
		return (
			<View style={containers.parent}>
				<ChatComponent messages={this.state.messages} changeMessages={this.changeMessages.bind(this)} />
				<SendComponent messages={this.state.messages} changeMessages={this.changeMessages.bind(this)} requestApi={requestApi.bind(this)}/>
			</View>
		)
	}
}

export default ParentComponent
