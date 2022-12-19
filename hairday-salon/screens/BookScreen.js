import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  useColorScheme,
} from 'react-native';

export default function BookScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [bookDate, onDateChange] = useState('');
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'dark'
          ? {backgroundColor: '#fff'}
          : {backgroundColor: '#121212'},
      ]}>
      <Text style={[
        styles.headerText,
        colorScheme === 'light'
        ? { color: '#fff' }
        : { color: '#000' },
      ]}>
        Hair Day Salon
      </Text>
      <Text style={[
        styles.regularText,
        colorScheme === 'light'
        ? { color: '#fff' }
        : { color: '#000' },
      ]}>
        Book your next appointment below!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
    <TextInput
        style={styles.inputBox}
        value={bookDate}
        onChangeText={onDateChange}
        placeholder={'date and time'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
      <Pressable
        onPress={() => navigation.navigate('Welcome')}
        style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
    </ScrollView>
  );
}


};
const styles = StyleSheet.create({
});
