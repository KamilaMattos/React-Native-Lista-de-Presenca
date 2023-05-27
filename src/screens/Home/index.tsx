import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native"

import React, { useState } from "react"

import { styles } from "./styles"

import { Participant } from "../../components/Participant"
import { formatDate } from "../../utils/formatDate"

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante presente!",
        "Este participante já está na lista."
      )
    }
    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName("")
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Deseja mesmo remover o(a) particpante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Lista de Presença</Text>
      <Text style={styles.eventDate}>{formatDate()}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Insira o nome do partcipante'
          placeholderTextColor='#6b6b6b'
          onChangeText={(text) => setParticipantName(text)}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
            key={item}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ainda não há participantes na lista
          </Text>
        )}
      />
    </View>
  )
}
