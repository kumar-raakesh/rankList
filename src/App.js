import React, { Component } from "react";
import {
  Button,
  Image,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from "react-native";
import ColorBox from "./colorbox";
import OddList from "./oddList";

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

class App extends Component {
  render() {
    return (
      <View style={styles.flex_container}>
        <View style={styles.status_bar} />
        <View style={styles.cross_img}>
          <Image
            style={styles.cross_logo}
            source={require("./images/cross.png")}
          />
        </View>
        <View style={styles.loot_league}>
          <Text style={styles.create_loot}>Create Loot League</Text>
        </View>
        <View style={styles.good_choise}>
          <Text style={styles.good_chise_}>
            Good Choice! now select the winners breakup
          </Text>
        </View>
        <View style={styles.winner_container}>
          <View style={styles.winner}>
            <Text style={styles.winner_text}>More winners breakup</Text>
          </View>

          <OddList label="Rank 1" amount="Rs.100" />

          <ColorBox label="Rank 2-5" amount="Rs.50" />

          <OddList label="Rank 6-25" amount="Rs.30" />

          <ColorBox label="Rank 26-50" amount="Rs.20" />

          <OddList label="Rank 51-150" amount="Rs.10" />

          <ColorBox label="Rank 151-300" amount="Rs.5" />
        </View>

        <View style={styles.createLeague}>
          <View style={styles.button}>
            <TouchableHighlight>
              <Text style={styles.text}>CREATE LEAGUE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex_container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#151E36",
    flex: 1,
    width: 360,
    marginLeft: 50
  },
  status_bar: {
    width: 160,
    height: 7,
    backgroundColor: "green"
  },
  cross_img: {
    width: 20,
    marginLeft: 18,
    marginTop: 22
  },
  cross_logo: {
    width: 12,
    height: 14,
    marginLeft: 2,
    borderColor: "#142246",
    borderWidth: 1
  },
  loot_league: {
    width: 125,
    marginLeft: 34,
    marginTop: 16
  },
  create_loot: {
    fontSize: 12,
    fontFamily: "arial",
    color: "white",
    textAlign: "center"
  },
  good_choise: {
    width: 310,
    marginLeft: 34,
    borderColor: "#142246",
    borderWidth: 1,
    marginTop: 4
  },
  good_chise_: {
    fontSize: 24,
    fontFamily: "arial",
    color: "white"
  },
  winner_container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#151E36",
    flex: 1,
    width: 360
  },
  winner: {
    width: 320,
    backgroundColor: "#0F1629",
    marginLeft: 20,
    borderRadius: 3,
    borderColor: "#142246",
    borderWidth: 0.5,
    marginTop: 66
  },
  winner_text: {
    fontSize: 14,
    fontFamily: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 10,
    marginBottom: 10
  },

  createLeague: {
    width: 360,
    height: 48,
    marginTop: 69,
    backgroundColor: "#0041FF"
  },
  button: {
    height: 19,
    width: 99,
    marginLeft: 129,
    marginTop: 15
  },
  text: {
    fontSize: 12,
    fontFamily: "arial",
    textAlign: "center",
    marginTop: 1,
    color: "white",

    borderWidth: 1,
    borderColor: "white"
  }
});

export default App;
