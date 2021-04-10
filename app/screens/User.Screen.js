import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";

class UserProfileView extends Component {
  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: user.avatar,
              }}
            />

            <Text style={styles.name}>
              {user.first_name} {user.last_name}{" "}
            </Text>
            <Text style={styles.userInfo}>{user.email} </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  };
};
export default connect(mapStateToProps)(UserProfileView);
