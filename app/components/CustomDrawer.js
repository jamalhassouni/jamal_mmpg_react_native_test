// @ts-nocheck
import React, { useEffect } from "react";
import {
  TouchableNativeFeedback,
  Alert,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import pkg from "../../app.json";
import { connect } from "react-redux";
import { setUser } from "../../actions";

const CustomDrawer = ({ navigation, users, dispatch, ...rest }) => {
  return (
    <DrawerContentScrollView
      {...rest}
      contentContainerStyle={{ minHeight: "100%" }}
    >
      <View style={styles.BtnsContainer}>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("Home")}
          useForeground
        >
          <View style={styles.DrawerBtn}>
            <Text style={styles.BtnTitle}>Home</Text>
          </View>
        </TouchableNativeFeedback>

        {users.map((user, i) => (
          <TouchableNativeFeedback
            key={i}
            onPress={async () => {
              await dispatch(setUser(user));
              navigation.navigate("User");
            }}
            useForeground
          >
            <View style={styles.DrawerBtn}>
              <Text style={styles.BtnTitle}>
                {user.first_name} {user.last_name}
              </Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
      <View style={styles.FooterContainer}>
        <Text style={styles.FooterText}>Version {pkg.expo.version}</Text>
        <Text style={styles.FooterText}>
          Copyright © {new Date().getFullYear()} React Native Test
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.UserReducer.users,
  };
};
export default connect(mapStateToProps)(CustomDrawer);

const styles = StyleSheet.create({
  FooterText: {
    fontSize: 14,
    textAlign: "center",
    color: "grey",
  },
  FooterContainer: {
    marginTop: "auto",
    marginBottom: 10,
  },
  BtnTitle: {
    fontSize: 18,
    color: "black",
    marginRight: 15,
  },
  DrawerBtn: {
    width: "90%",
    overflow: "hidden",
    flexDirection: "row-reverse",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 12,
    marginBottom: 5,
    backgroundColor: "#ffff",
  },
  BtnsContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
});
