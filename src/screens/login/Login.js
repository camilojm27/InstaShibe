import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/img/IllustrationPicture.png')}
      />
      <View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Text>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.btn, styles.btnPrimary]}>
          <Text style={[styles.btnTextPrimary, styles.btnText]}>
            Create Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.btn, styles.btnSecondary]}>
          <Text style={[styles.btnTextSecondary, styles.btnText]}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.smallText}>All Rights Reserved @2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#050522',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: 'red',
    fontSize: 36,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 260,
  },
  btn: {
    borderRadius: 15,
    fontWeight: '600',
    width: 280,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary: {
    backgroundColor: '#FFDE69',
    marginBottom: 20,
  },
  btnSecondary: {
    borderColor: '#FFDE69',
    borderWidth: 1,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnTextPrimary: {
    color: 'black',
  },
  btnTextSecondary: {
    color: '#FFDE69',
  },
  smallText: {
    fontSize: 14,
    color: '#FFDE69',
  },
});
