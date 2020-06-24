import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import ChatComponent from './ChatComponent.js'
import SendComponent from './SendComponent.js'

class ParentComponent extends Component {

	state = {
		messages: [
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
			<View style={styles.container}>
				<ChatComponent messages={this.state.messages} changeMessages={this.changeMessages.bind(this)} />
				<SendComponent messages={this.state.messages} changeMessages={this.changeMessages.bind(this)} />
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
