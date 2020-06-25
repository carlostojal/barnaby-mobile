import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'

class ChatComponent extends Component {

	render() {
		var messages = this.props.messages
		console.log(messages)
		return(
			<View style = {styles.container}>
				<ScrollView>
					{
						messages.map((item, index) => (
							<View key = {new Date().getTime()} style = {item.sender == "bot" ? styles.botMessageContainer : styles.userMessageContainer}> // bot messages will be aligned to the left, and the user ones to the right
								<Text style = {item.sender == "bot" ? styles.botMessage : styles.userMessage}> {item.text} </Text> // bot messages will have a white background while the user ones blue
							</View>
						))
					}
				</ScrollView>
			</View>
		)
	}
}

export default ChatComponent

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	botMessageContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	userMessageContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
	},
	botMessage: {
		padding: 10,
		marginTop: 5,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderRadius: 50,
		fontSize: 15
	},
	userMessage: {
		padding: 10,
		marginTop: 5,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderRadius: 50,
		backgroundColor: '#3272fc',
		color: 'white',
		fontSize: 15
	}
})
