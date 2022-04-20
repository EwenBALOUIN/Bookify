import { View, StyleSheet } from 'react-native';
import Title from '../container/Title';
import SearchBar from '../components/SearchBar';

export default () => {
	return (
		<View style={styles.contentView}>
			<Title/>
			<SearchBar/>
		</View>
	);
};
const styles = StyleSheet.create({
	contentView: {
		flex: 1,
		flexDirection:'column',
		marginTop:"5%"
	},
});
