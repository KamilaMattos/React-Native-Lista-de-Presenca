import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 24,

    backgroundColor: "#131016",
  },

  eventName: {
    marginTop: 48,

    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },

  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },

  input: {
    height: 56,
    flex: 1,

    padding: 16,
    marginRight: 12,

    color: "#fff",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    fontSize: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 5,
    backgroundColor: "#31cf67",
  },

  form: {
    width: "100%",

    flexDirection: "row",

    marginTop: 36,
    marginBottom: 42,
  },

  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
})
