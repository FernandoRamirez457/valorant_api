import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#0a0e27",
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  playTabContainer: {
    width: 140,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  playTab: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E3E3E3",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 60,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopColor: "transparent",
    borderLeftColor: "#0a0e27",
    borderRightColor: "#0a0e27",
    position: "relative",
  },
  tabText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  playText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    top: -40,
  },
});

export default styles;
