
import React from 'react'
import { StyleSheet } from 'react-native'

const containers = StyleSheet.create({
	parent: {
		flex: 1,
		padding: 10,
		paddingTop: 30,
		justifyContent: 'space-between',
		backgroundColor: '#F5FCFF'
	},
	chat: {
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
		borderRadius: 20,
		fontSize: 15
	},
	userMessage: {
		padding: 10,
		marginTop: 5,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderRadius: 20,
		backgroundColor: '#3272fc',
		color: 'white',
		fontSize: 15
	},
	send: {
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
	button: {
		margin: 10,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
})

export default containers
