import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginBottom: 10,

    backgroundColor: "#1f1e25",
    borderRadius: 5,
  },

  name: {
    flex: 1,

    marginLeft: 16,

    color: "#fff",
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
    backgroundColor: "#e23c44",
  },
})
