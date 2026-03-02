import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native'

export default function DetailsPage() {
	const myParams = useLocalSearchParams()
	return (
		<>
			<Text>Details page</Text>
			<Text>Showing details for {myParams.myid}</Text>
		</>
	)
}
