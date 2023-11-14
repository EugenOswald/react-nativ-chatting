import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import bg from './assets/bg.png';
import ChatItem from './ChatItem';

export default function App() {
	return (
		<ImageBackground source={bg} style={styles.container}>
			<StatusBar style='auto' />
			<ChatItem></ChatItem>
			<ChatItem></ChatItem>
			<ChatItem></ChatItem>
			<ChatItem></ChatItem>
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
