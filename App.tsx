import {View, Text, Pressable, Alert, StyleSheet, Image
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
  source={require('./assets/app_logo.png')}
  style={{ width: 300, height: 120, marginBottom:-11
   }}
  resizeMode="contain"/>
       <Text style={styles.titre}>Bonjour Campus
         !</Text>
         <Text style={styles.sousTitre}>IAIL S5 - Developpement mobile
         </Text>

       <Pressable
        style={styles.bouton}
        onPress={() => Alert.alert(
          'Bienvenue',
          'Votre premiere application IAIL S5 fonctionne !'
        )}
       >
        <Text style={styles.texteBouton}>Bienvenue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2e7f2',
    padding: 20,
},
titre: {
    color: '#003796',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'serif'
},
sousTitre: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
},
bouton: {
    marginTop: 24,
    backgroundColor: 'rgb(7, 235, 247)',
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 9,
},
texteBouton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
},
});