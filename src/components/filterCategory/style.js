// style.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerFilter: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    marginTop: 20,
    marginBottom: 20
  },

  filterButton: {
    width: 75,
    height: 75,
    backgroundColor: "rgba(0, 63, 68, 0.2)",
    borderRadius: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    borderColor: "#5C5C5C",
  },

  selectedFilterButton: {
    backgroundColor: "#02131F",
    borderWidth: 2,
    borderColor: "#22B1A5",
  },

  imgFilter: {
    height: 30,
    width: 30,
  },

  filterText: {
    color: "white",
    fontSize: 10,
  },
});

export default styles;
