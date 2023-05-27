import moment from "moment"
require("moment/locale/pt-br")

import { Text, View } from "react-native"
import { styles } from "./styles"

export function Home() {
  const dateNow = moment()
  const formatDate = dateNow.format("dddd, DD [de] MMMM [de] YYYY")

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>{formatDate}</Text>
    </View>
  )
}
