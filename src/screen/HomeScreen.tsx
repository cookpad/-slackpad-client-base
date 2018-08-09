import * as React from 'react';
import { StyleSheet, View, Text, FlatList, ViewStyle, TextStyle } from 'react-native';
import { color, fontSize, padding } from '../theme';
import Message from '../model/Message';
import MessageRow from '../component/MessageRow';
import ApiClient from '../repository/ApiClient';

interface Props {}

interface State {
  messages: Message[];
}

export default class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { messages: [] };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ここにニックネームを表示</Text>
      </View>
    );
  }

  //FlatListのセルの描画
  private renderCell = ({ item }: { item: Message }) => {
    return <MessageRow message={item} />;
  };
}

interface Styles {
  container: ViewStyle;
  chat_list: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  chat_list: {
    backgroundColor: '#fff',
    paddingHorizontal: padding.size_16,
  },
  text: {
    color: color.gray,
    fontSize: fontSize.header,
  },
});
