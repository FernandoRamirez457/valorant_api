import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./style";

const Header = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>AGENTS</Text>
        </TouchableOpacity>

        <View style={styles.playTabContainer}>
          <TouchableOpacity style={styles.playTab}>
            <Text style={styles.playText}>PLAY</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>STORE</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
