import React from "react";
import { Image } from "react-native";
import styles from "./style";

export default function BannerValorant() {
  return (
    <Image
      style={styles.imgBanner}
      source={{ uri: "https://i.pinimg.com/736x/1d/46/27/1d4627f8b0a294c5e98e87f6cdbeaa8d.jpg" }}
    />
  );
}
