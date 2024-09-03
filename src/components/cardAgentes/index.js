import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

export default function CardAgent(props) {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { agent: props.agent })}
      >
        <View style={styles.cardContainer}>
          <Image
            style={styles.imgCard}
            source={{
              uri: props.imgUrl,
            }}
          />
          <Text style={styles.nameAgentCard}>{props.nameAgent}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
