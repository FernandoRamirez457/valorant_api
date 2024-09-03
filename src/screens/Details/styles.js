import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    left: 20,
    borderColor: "black",
    borderWidth: 1,
    zIndex: 30,
  },
  iconBack: {
    height: 24,
    width: 24,
  },
  containerImgAgent: {
    height: 500,
    width: "96%",
    position: "relative",
    display: "flex",
  },

  bannerAgent: {
    height: "100%",
  },

  imgAgent: {
    height: 500,
    width: "99%",
    position: "absolute",
    zIndex: 3,
    top: 0,
  },
  nameAgent: {
    textAlign: "center",
    fontSize: 28,
    marginTop: 5,
    fontWeight: "bold",
    color: "white",
  },

  descriptionAgent: {
    width: "87%",
    textAlign: "justify",
    color: "white",
    margin: "auto",
    marginTop: 8,
  },

  partition: {
    width: "87%",
    height: 3,
    backgroundColor: "white",
    margin: "auto",
    marginTop: 40,
    marginBottom: 5,
  },

  titleAbility: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    margin: "auto",
    marginTop: 26,
    marginBottom: 0,
  },

  containerAbility: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 13,
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },

  abilityButton: {
    width: 80,
    height: 80,
    backgroundColor: "rgba(0, 63, 68, 0.2)",
    borderRadius: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    borderWidth: 2,
    borderColor: "#7C7C7C",
  },

  selectedAbilityButton: {
    backgroundColor: "rgba(0, 63, 68, 0.9)",
    borderWidth: 2,
    borderColor: "#22B1A5",
  },

  imgAbility: {
    height: 40,
    width: 40,
  },

  abilityText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center"
  },

  descriptionAbility: {
    width: "90%",
    height: 185,
    borderRadius: 5,
    padding: 10,
    margin: "auto",
    marginTop: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    textAlign: "justify",
    fontSize: 12,
  },
});

export default styles;
