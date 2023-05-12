import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

export default function EntrarCadastrarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="ENTRAR"
        onPress={() => navigation.navigate("Entrar", { language: "french" })}
      />
        <Button 
        title="Criar Conta"
        onPress={() => navigation.navigate("Cadastrar", { language: "english" })}
      />
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
  tittle: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#4f58c4"
  }
});