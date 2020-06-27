import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import ChatComponent from './ChatComponent.js'
import SendComponent from './SendComponent.js'
import containers from '../style/containers.js'
import requestApi from '../utils/requestApi.js'
import getMessages from '../utils/getMessages.js'
import saveMessages from '../utils/saveMessages.js'

class ParentComponent extends Component {

	state = {
		messages: [ // this will store the chat messages
			{
				"sender": "bot",
				"content": {
					"response": "Hello!"
				}
			},
			{
				"sender": "bot",
				"content": {
					"response": "My name is Barnaby."
				}
			}
		],
		firstRender: true
	}

	changeMessages = (messages) => {
		this.setState({
			messages: messages
		})
	}

	setFirstRendered = () => {
		this.setState({
			firstRender: false
		})
	}

	render() {
		if(this.state.firstRender) { // is the first render of the current startup
			getMessages().then((messages) => {
				if(messages != null) // not the first startup (after install)
					this.changeMessages(messages) // update state messages
				this.setFirstRendered()
			})
		}
		return (
			<View style={containers.parent}>
				<ChatComponent messages={this.state.messages} changeMessages={this.changeMessages.bind(this)} />
				<SendComponent messages={this.state.messages} changeMessages={this.changeMessages.bind(this)} requestApi={requestApi.bind(this)}/>
			</View>
		)
	}
}

export default ParentComponent
