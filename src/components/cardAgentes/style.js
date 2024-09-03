import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    height: 110,
    width: 110,
    backgroundColor: "rgba(153, 153, 153, 0.3)",
    padding: 12,
    position: "relative",
    alignItems: "center",
    borderRadius: 3,
  },

  imgCard: {
    height: "100%",
    width: "100%",
  },

  nameAgentCard: {
    position: "absolute",
    bottom: 3,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
