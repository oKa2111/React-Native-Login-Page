import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('./Components/cart.png')}
          />
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="email-address"
            placeholder="E-posta giriniz.."
          />
          </View>
          <View style={styles.inputContainer2}>
          <TextInput
            keyboardType="visible-password"
            placeholder="Şifre giriniz.."
          />
          </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer2}>
          <Text style={styles.textStyle}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80CBC4',
    justifyContent: 'center'
  },
  inputContainer: {
    backgroundColor: '#ECEFF1',
    padding: 5,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputContainer2: {
    backgroundColor: '#ECEFF1',
    padding: 5,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: '#546E7A', 
    paddingHorizontal: 50,
    marginHorizontal: 100,
    padding: 20,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
    color: 'white',
  },
  buttonContainer2: {
    backgroundColor: '#546E7A',
    paddingHorizontal: 50,
    marginHorizontal: 100,
    padding: 20,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
    color: 'white',
  },
  textStyle: {
    fontSize: 15,
    color: '#ECEFF1',
    fontWeight: 'bold'
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

