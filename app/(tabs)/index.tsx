import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/icon.png')}  // Reemplaza con la ruta correcta de tu imagen
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>BIENVENIDO A</Text>
        <Text style={styles.subtitle}>Cultive Care Technologies</Text>

        <View style={styles.buttonGrid}>
          <TouchableOpacity style={styles.buttonGreen} onPress={() => {}}>
            <Icon name="info" type="font-awesome" color="white" size={28} />
            <Text style={styles.buttonText}>Conoce más</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonWhite} onPress={() => {}}>
            <Icon name="heart" type="font-awesome" color="green" size={28} />
            <Text style={styles.buttonTextDark}>Beneficios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonWhite} onPress={() => {}}>
            <Icon name="share" type="font-awesome" color="green" size={28} />
            <Text style={styles.buttonTextDark}>Redes Sociales</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonGreen} onPress={() => {}}>
            <Icon name="lightbulb" type="font-awesome" color="white" size={28} />
            <Text style={styles.buttonText}>INVERNATEC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonWhite} onPress={() => {}}>
            <Icon name="headset" type="font-awesome" color="green" size={28} />
            <Text style={styles.buttonTextDark}>Soporte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGreen: {
    backgroundColor: 'green',
    width: 140,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonWhite: {
    backgroundColor: 'white',
    width: 140,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonTextDark: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default HomeScreen;
