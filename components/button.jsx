import { Button } from '@rneui/themed';
import { useTheme } from '@rneui/themed';

export default (props) => {
  const { theme } = useTheme();

  return (
    <Button
      {...props}
      title={props.label}
      titleStyle={{
        fontWeight: '700',
      }}
      buttonStyle={{
        backgroundColor: theme.colors.primary,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 5,
      }}
      containerStyle={{
        width: 200,
        height: 45,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
    />
  );
};
