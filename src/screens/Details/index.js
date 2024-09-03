import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  const [ability, setAbility] = useState(0);

  return (
    <LinearGradient
      colors={[
        `#${route.params.agent.backgroundGradientColors[0]}`,
        `#${route.params.agent.backgroundGradientColors[1]}`,
        `#${route.params.agent.backgroundGradientColors[2]}`,
      ]}
      style={styles.gradient}
    >
      <View style={styles.viewContainer}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <Image
            style={styles.iconBack}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJ8DwnccSe4KhYBQp1Es1eu8ArkEHQcqxfQ&s",
            }}
          />
        </TouchableOpacity>

        <View style={styles.containerImgAgent}>
          <Image
            style={styles.bannerAgent}
            source={{ uri: route.params.agent.background }}
          />
          <Image
            style={styles.imgAgent}
            source={{ uri: route.params.agent.bustPortrait }}
          />
        </View>

        <Text style={styles.nameAgent}>{route.params.agent.displayName}</Text>

        <Text style={styles.descriptionAgent}>
          {route.params.agent.description}
        </Text>

        <View style={styles.partition}></View>

        <Text style={styles.titleAbility}>Habilidades</Text>

        <View style={styles.containerAbility}>
          <TouchableOpacity
            onPress={() => setAbility(0)}
            style={[
              styles.abilityButton,
              ability == 0 && styles.selectedAbilityButton,
            ]}
          >
            <Image
              style={styles.imgAbility}
              source={{ uri: route.params.agent.abilities[0].displayIcon }}
            />
            <Text style={styles.abilityText}>
              {route.params.agent.abilities[0].displayName}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setAbility(1)}
            style={[
              styles.abilityButton,
              ability == 1 && styles.selectedAbilityButton,
            ]}
          >
            <Image
              style={styles.imgAbility}
              source={{ uri: route.params.agent.abilities[1].displayIcon }}
            />
            <Text style={styles.abilityText}>
              {route.params.agent.abilities[1].displayName}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setAbility(2)}
            style={[
              styles.abilityButton,
              ability == 2 && styles.selectedAbilityButton,
            ]}
          >
            <Image
              style={styles.imgAbility}
              source={{ uri: route.params.agent.abilities[2].displayIcon }}
            />
            <Text style={styles.abilityText}>
              {route.params.agent.abilities[2].displayName}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setAbility(3)}
            style={[
              styles.abilityButton,
              ability == 3 && styles.selectedAbilityButton,
            ]}
          >
            <Image
              style={styles.imgAbility}
              source={{ uri: route.params.agent.abilities[3].displayIcon }}
            />
            <Text style={styles.abilityText}>
              {route.params.agent.abilities[3].displayName}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.descriptionAbility}>{route.params.agent.abilities[ability].description}</Text>
      </View>
    </LinearGradient>
  );
}
