
import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'

const containers = StyleSheet.create({
	parent: {
		flex: 1,
		padding: 10,
		paddingTop: 30,
		justifyContent: 'space-between',
		backgroundColor: 'white'
	},
	chat: {
		flex: 1,
		flexDirection: 'column'
	},
	botMessageContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
	},
	userMessageContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	botMessage: {
		padding: 10,
		marginTop: 5,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderRadius: 20,
		maxWidth: Dimensions.get('window').width * 0.7
	},
	userMessage: {
		padding: 10,
		marginTop: 5,
		borderRadius: 20,
		backgroundColor: '#3272fc',
		maxWidth: Dimensions.get('window').width * 0.7
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
	weatherImage: {
		width: 50,
		height: 50
	},
	termImage: {
		width: Dimensions.get('window').width * 0.4,
		height: Dimensions.get('window').width * 0.4,
	}
})

export default containers
