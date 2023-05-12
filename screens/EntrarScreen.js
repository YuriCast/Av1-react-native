import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CadastrarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Clique no botão para entrar</Text>
      <Button title="Entrar" onPress={() => navigation.popToTop()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});