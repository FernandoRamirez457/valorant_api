// filter.js
import { Image, View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import styles from "./style";

export default function FilterCategory({ onFilterSelect }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handlePress = (filterRole) => {
    setSelectedFilter(filterRole);
    onFilterSelect(filterRole);
  };

  return (
    <View style={styles.containerFilter}>
      <TouchableOpacity
        onPress={() => handlePress("all")}
        style={[
          styles.filterButton,
          selectedFilter === "all" && styles.selectedFilterButton,
        ]}
      >
        <Image
          style={styles.imgFilter}
          source={require("../../Img/all_icon.png")}
        />
        <Text style={styles.filterText}>Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress("Iniciador")}
        style={[
          styles.filterButton,
          selectedFilter === "Iniciador" && styles.selectedFilterButton,
        ]}
      >
        <Image
          style={styles.imgFilter}
          source={{
            uri: "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
          }}
        />
        <Text style={styles.filterText}>Iniciador</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress("Duelista")}
        style={[
          styles.filterButton,
          selectedFilter === "Duelista" && styles.selectedFilterButton,
        ]}
      >
        <Image
          style={styles.imgFilter}
          source={{
            uri: "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
          }}
        />
        <Text style={styles.filterText}>Duelista</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress("Sentinela")}
        style={[
          styles.filterButton,
          selectedFilter === "Sentinela" && styles.selectedFilterButton,
        ]}
      >
        <Image
          style={styles.imgFilter}
          source={{
            uri: "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
          }}
        />
        <Text style={styles.filterText}>Sentinela</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress("Controlador")}
        style={[
          styles.filterButton,
          selectedFilter === "Controlador" && styles.selectedFilterButton,
        ]}
      >
        <Image
          style={styles.imgFilter}
          source={{
            uri: "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
          }}
        />
        <Text style={styles.filterText}>Controlador</Text>
      </TouchableOpacity>
    </View>
  );
}
