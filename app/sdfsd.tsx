import { Link, useRouter } from 'expo-router'
import { Button, Pressable, Text } from 'react-native'

export default function AboutPage() {
	const router = useRouter()

	const myButtonIsPressed = () => {
		router.push('/')
	}

	return (
		<>
			<Text>About page</Text>
			<Link href={'/'}>Visit the home page here</Link>
			<Button title="Press mee pleeease" onPress={myButtonIsPressed} />
		</>
	)
}
