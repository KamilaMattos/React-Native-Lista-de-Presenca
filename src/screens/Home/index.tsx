import moment from "moment"
require("moment/locale/pt-br")

import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant"

export function Home() {
  const participants = [
    "Kamila",
    "Logan",
    "Eduardo",
    "Yoshi",
    "Joao",
    "Dani",
    "Claudia",
    "Thiago",
    "Davi",
    "Juninho",
  ]

  const dateNow = moment()
  const formatDate = dateNow.format("dddd, DD [de] MMMM [de] YYYY")

  function handleAddParticipant() {
    console.log("Adicionou participante")
  }

  function handleRemoveParticipant() {
    console.log("Removeu participante")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>{formatDate}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do partcipante'
          placeholderTextColor='#6b6b6b'
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={handleRemoveParticipant}
            key={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ainda não há participantes na lista
          </Text>
        )}
      />
    </View>
  )
}
