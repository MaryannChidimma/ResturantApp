

import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CustomTextInput({
  value,
  onChangeText,
  placeholder = 'Enter value',
  type = 'text',
  eyeIconVisible,
  eyeIconHidden,
  ...restProps 
}) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const isPasswordType = type === 'password';
  const isPhoneType = type === 'phone';

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={isPasswordType && !isPasswordVisible}
        keyboardType={isPhoneType ? 'phone-pad' : 'default'}
        style={styles.input}
        {...restProps}
      />

      {isPasswordType && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            source={isPasswordVisible ? eyeIconVisible : eyeIconHidden}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 6,
    marginVertical: 14,

  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});
