import React, { Component } from "react";
import {
  Button,
  Image,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from "react-native";

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.flex_box2}>
        <View style={styles.rank_box2}>
          <Text style={styles.rank2}> {this.props.label}</Text>
        </View>
        <View style={styles.amount_box2}>
          <Text style={styles.amount2}>{this.props.amount}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex_box2: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: 320,
    marginLeft: 20,
    backgroundColor: "#0F1629",
    borderRadius: 2
  },
  rank_box2: {
    marginTop: 4,
    marginBottom: 3,
    marginLeft: 39,
    borderColor: "#142246",
    borderWidth: 1
  },
  rank2: {
    fontSize: 12,
    fontFamily: "arial",
    color: "white",
    marginTop: 3,
    marginBottom: 3
  },

  amount_box2: {
    marginTop: 4,
    marginBottom: 3,
    marginLeft: 145,
    borderColor: "#142246"
    // borderWidth: 1,
  },
  amount2: {
    fontSize: 12,
    fontFamily: "arial",
    // textAlign: "center",
    color: "white",
    marginTop: 3,
    marginBottom: 3
  }
});
