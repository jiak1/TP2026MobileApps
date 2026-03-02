import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export default function HomePage() {
	const screen = useWindowDimensions()

	const { width, height } = screen

	return (
		<>
			<Text>Home page</Text>
			<View style={styles.container}>
				<View style={width > 700 ? styles.box : styles.greenBox}></View>
				<View style={styles.box}></View>
				<View style={styles.box}></View>
				<View style={styles.box}></View>
				<View style={styles.box}></View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		backgroundColor: 'blue',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: 16,
		width: '70%',
	},
	box: {
		width: 100,
		height: 100,
		backgroundColor: 'red',

		//flexGrow: 1,
		flexShrink: 1,
	},
	greenBox: {
		width: 100,
		height: 100,
		backgroundColor: 'green',

		//flexGrow: 1,
		flexShrink: 1,
	},
})
