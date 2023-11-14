import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ChatItem = (props) => {
	return (
		<View style={style.chatItem}>
			<Image source={props.avatar} style={style.avatar}></Image>
			<View>
				<Text style={style.username}>{props.username}</Text>
				<Text style={style.message}>{props.message}</Text>
			</View>
			<Text style={style.time}> {props.time}</Text>
		</View>
	);
};

export default ChatItem;

const style = StyleSheet.create({
	chatItem: {
		padding: 10,
		width: '95vw',
		backgroundColor: 'rgba(225,225,225,0.9)',
		borderColor: '#454961',
		borderWidth: 2,
		marginTop: 5,
		marginBottom: 5,
		flexDirection: 'row',
	},

	avatar: {
		width: 50,
		height: 50,
		backgroundColor: '#454961',
		borderRadius: '50%',
		marginRight: 10,
	},

	username: {
		fontWeight: 'bold',
	},
	time: {
		fontWeight: 'bold',
		flex: 1,
		textAlign: 'right',
	},
	message: {},
});
