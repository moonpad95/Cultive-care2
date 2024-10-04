import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Usa cualquier librería de íconos como Ionicons

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backText}>{"< Back"}</Text>
        <Text style={styles.headerTitle}>Conoce más sobre Cultive Care</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitleGreen}>Nuestra Marca Cultive Care</Text>
        <Text style={styles.title}>Nosotros</Text>
        <Text style={styles.subtitle}>Antecedentes, Misión y Visión</Text>
      </View>

      {/* Antecedentes */}
      <TouchableOpacity style={styles.cardGreen}>
        <Ionicons name="time-outline" size={24} color="black" />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>ANTECEDENTES</Text>
          <Text style={styles.cardText}>
            Cultive Care Technologies es una marca creada por Concept Care Technologies a partir de la necesidad
            existente de monitorear, predecir y automatizar determinados procesos dentro de los invernaderos,
            cultivos y otros usos agrónomos.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Misión */}
      <TouchableOpacity style={styles.cardWhite}>
        <Ionicons name="flag-outline" size={24} color="black" />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>MISIÓN</Text>
          <Text style={styles.cardText}>
            Crear entornos seguros e inteligentes para un monitoreo constante de invernaderos dedicados a los cultivos
            en las grandes industrias, facilitando herramientas de monitoreo.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Puedes agregar más tarjetas similares para "Visión", etc. */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    color: '#000',
    fontSize: 16,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7ED957',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitleGreen: {
    color: '#7ED957',
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  cardGreen: {
    backgroundColor: '#7ED957',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardWhite: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    marginLeft: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 12,
    color: '#000',
  },
});

export default AboutScreen;
