import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import containers from '../style/containers.js'

class ChatComponent extends Component {

	render() {
		var messages = this.props.messages
		console.log(messages)
		return(
			<View style = {containers.chat}>
				<ScrollView>
					{
						messages.map((item, index) => (
							<View key = {index} style = {item.sender == "bot" ? containers.botMessageContainer : containers.userMessageContainer}>
								<Text style = {item.sender == "bot" ? containers.botMessage : containers.userMessage}> {item.content.response} </Text>
							</View>
						))
					}
				</ScrollView>
			</View>
		)
	}
}

export default ChatComponent

