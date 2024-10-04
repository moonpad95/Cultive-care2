import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO A</Text>
      <Text style={styles.subtitle}>Cultive Care Technologies</Text>

      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItemGreen}>
          <Text style={styles.gridTextTitle}>Conoce más</Text>
          <Text style={styles.gridTextSubtitle}>Conócenos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItemWhite}>
          <Text style={styles.gridTextTitle}>Beneficios</Text>
          <Text style={styles.gridTextSubtitle}>De usar CCT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItemWhite}>
          <Text style={styles.gridTextTitle}>Redes Sociales</Text>
          <Text style={styles.gridTextSubtitle}>Y medios de contacto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItemGreen}>
          <Text style={styles.gridTextTitle}>INVERNATEC</Text>
          <Text style={styles.gridTextSubtitle}>Solicita y cotiza tu app</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItemWhite}>
          <Text style={styles.gridTextTitle}>SOPORTE</Text>
          <Text style={styles.gridTextSubtitle}>Soporte técnico y FAQ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7ED957',
    textAlign: 'left',
    marginTop: "40%",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 30,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItemGreen: {
    backgroundColor: '#7ED957',
    width: '48%',
    height: 120,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItemWhite: {
    backgroundColor: '#fff',
    width: '48%',
    height: 120,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  gridTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  gridTextSubtitle: {
    fontSize: 12,
    color: '#000',
  },
});

export default HomeScreen;
