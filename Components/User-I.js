import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { HelperText, TextInput} from 'react-native-paper';

const User = () => {
  const [text, setText] = React.useState('');

   const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('@gmail.com');
  };


 return (
    <View>
      <TextInput
       mode="outlined"
       placeholder="Example: maynorOldemar"
       right={<TextInput.Affix text="@gmail.com" />}
       label="Email" value={text} onChangeText={onChangeText} />
    </View>
  );
};

export default User;