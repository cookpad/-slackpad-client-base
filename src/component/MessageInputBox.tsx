import * as React from 'react';
import {
  Alert,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { color, padding } from '../theme';

interface Props {
  channel: string;
}

interface State {
  message: string;
}

export default class MessageInputBox extends React.Component<Props, State> {
  private textInput: TextInput | null = null;

  constructor(props: Props) {
    super(props);
    this.state = { message: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          selectionColor={color.orange}
          underlineColorAndroid={color.orange}
          style={styles.messageInput}
          onChangeText={message => this.setState({ message })}
          ref={_textInput => (this.textInput = _textInput)}
          placeholder={`${this.props.channel}に投稿する`}
          value={this.state.message}
        />
        <TouchableOpacity
          onPress={() => {
            Alert.alert('未実装', 'メッセージを送信する実装に置き換えてください');
          }}
          style={styles.buttonWrapper}
        >
          <Ionicons name="md-send" size={28} color={color.darkGray} style={styles.submitButton} />
        </TouchableOpacity>
      </View>
    );
  }
}

interface Styles {
  container: ViewStyle;
  buttonWrapper: ViewStyle;
  submitButton: ViewStyle;
  messageInput: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    backgroundColor: color.white,
    paddingHorizontal: padding.size_8,
    elevation: padding.size_4,
    height: 48,
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  submitButton: {
    paddingHorizontal: padding.size_4,
  },
  messageInput: {
    paddingHorizontal: padding.size_4,
    flex: 1,
    textAlign: 'left',
    color: color.darkGray,
  },
});
