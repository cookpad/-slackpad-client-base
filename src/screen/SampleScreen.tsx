import * as React from 'react';
import { StyleSheet, View, Text, ViewStyle, TextStyle } from 'react-native';
import { color, fontSize } from '../theme';

interface Props {}
interface State {}

export default class SampleScreen extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HelloWorld!</Text>
      </View>
    );
  }
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.gray,
    fontSize: fontSize.header,
  },
});
