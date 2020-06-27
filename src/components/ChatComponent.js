import React, { Component } from 'react'
import { View, ScrollView, Text, Image, Dimensions, StyleSheet } from 'react-native'
import containers from '../style/containers.js'
import text from '../style/text.js'

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
								<View style = {item.sender == "bot" ? containers.botMessage : containers.userMessage}>
									{item.content.functionality == "weather" &&
										<Image source = {{uri: "https://openweathermap.org/img/wn/" + item.content.content.weather[0].icon + "@2x.png"}} style = {containers.weatherImage} />
									}
									{item.content.functionality == "term_definitions" && item.content.content.Image != "" &&
										<Image source = {{uri: item.content.content.Image}} style = {{width: item.content.content.ImageWidth, height: item.content.content.ImageHeight, maxWidth: (Dimensions.get('window').width * 0.7) - (2 * 10), maxHeight: (Dimensions.get('window').height * 0.7) - (2 * 10)}} />
									}
									<Text style = {item.sender == "bot" ? text.botMessage : text.userMessage}> {item.content.response} </Text>
								</View>
							</View>
						))
					}
				</ScrollView>
			</View>
		)
	}
}

export default ChatComponent

