import {View, StyleSheet} from 'react-native';
import Logo from '../components/Logo';
import {Text} from '@rneui/themed';

export default () => {
	return (
		<View style={styles.contentView}>
			<Logo width="28%" height="28%" viewBox="0 0 185 185"/>
			<Text style={styles.titleText}> Vos rendez-vous</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	contentView: {
		flexDirection: "row",
		alignItems:"center",
		flexWrap:"wrap",
		alignContent:"stretch"
	},

	titleText: {
		fontSize: '1.6em',
		fontWeight: 'bold',
	},
})
