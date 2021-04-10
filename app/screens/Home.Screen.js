import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { connect } from "react-redux";
import { setUsers } from "../../actions";
import { getUsers } from "../api";

class Home extends Component {
  async componentDidMount() {
    let res = await getUsers();
    if (res.data) {
      this.props.dispatch(setUsers(res.data));
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home</Text>
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.openDrawer()}
          useForeground
        >
          <Text>Open menu</Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default connect()(Home);
