import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import bg from './assets/bg.png';
import ChatItem from './ChatItem';
import { DATA } from './data';
import { useState } from 'react';
import Message from './Message';

export default function App() {
	const [isHomeVisible, setHomeVisible] = useState(true);
	const [selectedChat, setSelectedChat] = useState(null);

	const onChatClick = (el) => {
		setSelectedChat(el);
		setHomeVisible(false);
	};

	return (
		<ImageBackground source={bg} style={styles.container}>
			<StatusBar style='auto' />
			{isHomeVisible ? (
				<View>
					{DATA.map((el) => {
						return (
							<TouchableOpacity onPress={() => onChatClick(el)}>
								<ChatItem
									key={el.username}
									username={el.username}
									message={el.message}
									avatar={el.avatar}
									time={el.time}
								></ChatItem>
							</TouchableOpacity>
						);
					})}
				</View>
			) : (
				<View>
					{selectedChat.messages.map((message) => {
						return <Message key={message} message={message}></Message>;
					})}
				</View>
			)}
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#484961',
		alignItems: 'center',
		justifyContent: 'start',
		paddingTop: 70,
	},
});
