import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Message = ({ message }) => {
	return (
		<View style={style.chatItem}>
			<Text>{message}</Text>
		</View>
	);
};

export default Message;

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
});
