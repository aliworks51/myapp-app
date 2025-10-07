import React, { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [plat, setPlat] = useState("");

  const SERVER = "http://100.95.0.195:3000"; // <-- غير هاد IP باللي عندك فال backend

  const handleSubmit = async () => {
    if (!nom || !prenom || !phone || !address || !plat) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs !");
      return;
    }

    try {
      const res = await fetch(`${SERVER}/commande`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, prenom, phone, address, plat }),
      });

      const data = await res.json();

      if (!res.ok) {
        Alert.alert("Erreur serveur", data.message || "Erreur");
        return;
      }

      Alert.alert("✅ Commande envoyée avec succès !");

      // مسح الفورم بعد الإرسال
      setNom("");
      setPrenom("");
      setPhone("");
      setAddress("");
      setPlat("");
    } catch (err) {
      console.error(err);
      Alert.alert(
        "Erreur",
        "Impossible d'envoyer la commande. Vérifiez le serveur et la connexion Wi-Fi."
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🍕 Passer une commande</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />

      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={prenom}
        onChangeText={setPrenom}
      />

      <TextInput
        style={styles.input}
        placeholder="Téléphone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Plat (ex: Tajine)"
        value={plat}
        onChangeText={setPlat}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Adresse complète"
        multiline
        value={address}
        onChangeText={setAddress}
      />

      <View style={styles.button}>
        <Button title="Envoyer la commande" onPress={handleSubmit} color="#ff6600" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff8f0",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ff6600",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    width: "90%",
    marginTop: 20,
  },
});
