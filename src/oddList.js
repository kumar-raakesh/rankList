import React, { Component } from "react";
import {
  Button,
  Image,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  platform
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

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
      <View style={styles.flex_box1}>
        <View style={styles.rank_box1}>
          <Text style={styles.rank1}>{this.props.label}</Text>
        </View>
        <View style={styles.amount_box1}>
          <Text style={styles.amount1}>{this.props.amount}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex_box1: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: 320,
    marginLeft: 20,
    backgroundColor: "#121A30",
    borderRadius: 2
  },
  rank_box1: {
    marginTop: 4,
    marginBottom: 3,
    marginLeft: 39,
    borderColor: "#142246",
    borderWidth: 1
    // width: 120
  },
  rank1: {
    fontSize: 12,
    fontFamily: "arial",
    // textAlign: "center",
    color: "white",
    marginTop: 3,
    marginBottom: 3
  },

  amount_box1: {
    marginTop: 4,
    marginBottom: 3,
    marginLeft: 153,
    borderColor: "#142246"
  },
  amount1: {
    fontSize: 12,
    fontFamily: "arial",
    // textAlign: "center",
    color: "white",
    marginTop: 3,
    marginBottom: 3
  }
});
// <Text style={styles.rank2}> Rank 2-25</Text>
