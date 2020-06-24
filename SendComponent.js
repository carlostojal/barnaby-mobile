import React, {	Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

class SendComponent extends Component {
	render() {
		return(
			<View style = {styles.container}>
				<TextInput
					style = {styles.textInput}
					placeholder = "Message" />
				<TouchableOpacity
					style = {styles.send}>
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
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 50
	},
	send: {
		margin: 10,
		padding: 10,
		borderRadius: 50,
		backgroundColor: '#3272fc',
		justifyContent: 'center',
		alignItems: 'center'
	},
	sendText: {
		color: 'white'
	}
})
