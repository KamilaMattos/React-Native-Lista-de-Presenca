import moment from "moment"
require("moment/locale/pt-br")
import React, { useState } from "react"
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native"

import { styles } from "./styles"

import { Participant } from "../../components/Participant"

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  const dateNow = moment()
  const formatDate = dateNow.format("dddd, DD [de] MMMM [de] YYYY")

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante presente!",
        "Este participante já está presente no evento"
      )
    }
    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName("")
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      "Remover Participante",
      `Deseja mesmo remover o (a) particpante ${name}?`,
      [
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
      ]
    )
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
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
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
