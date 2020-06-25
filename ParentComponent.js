import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import ChatComponent from './ChatComponent.js'
import SendComponent from './SendComponent.js'

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

	requestServer = async (query) => {
		try {
			query.replace(' ', '+')
			var response = await fetch('http://192.168.1.65:5000/assistant?q=' + query) // WARNING: change this to your own API address and port
			var json = await response.json()
			console.log(json.response)
			return json.response		
		} catch (error) {
			console.error(error)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<ChatComponent messages={this.state.messages} changeMessages={this.changeMessages.bind(this)} />
				<SendComponent messages={this.state.messages} changeMessages={this.changeMessages.bind(this)} requestServer={this.requestServer.bind(this)}/>
			</View>
		)
	}
}

export default ParentComponent

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingTop: 30,
		justifyContent: 'space-between',
		backgroundColor: '#F5FCFF'
	}
});
