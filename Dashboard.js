import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const Dashboard = ({ navigation }) => {
  return (
    <View>
      <View style={{ margin: 40, padding: 10 }}>
        <Text> Total Milk Collection </Text>
        <View style={{ flex: 1, color: "#ff8c00", marginBottom: 20 }}></View>

        <Button
          style={styles.button}
          color="#ff8c00"
          title="Collection"
          onPress={() => navigation.navigate("Collection")}
        />
        <View style={{ flex: 1, color: "#ff8c00", marginBottom: 20 }}></View>
        <Button
          color="#ff8c00"
          title="add Sabhasad"
          onPress={() => navigation.navigate("AddSabhasad")}
        />
        <View style={{ flex: 1, color: "#ff8c00", marginBottom: 20 }}></View>
        <Button
          color="#ff8c00"
          title="Sabhasad"
          onPress={() => navigation.navigate("Sabhasad")}
        />
        <View style={{ flex: 1, color: "#ff8c00", marginBottom: 20 }}></View>
        <Button color="#ff8c00" title="Feed Sale" />
        <View style={{ flex: 1, color: "#ff8c00", marginBottom: 20 }}></View>
        <Button
          color="#ff8c00"
          title="Payment"
          onPress={() => navigation.navigate("Payment")}
        />
      </View>

      <View style={styles.containersafe}>
        <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.text}>Text in Table Part 1</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.cell}>
              <Text style={styles.text}>Text in Table Part 2</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    padding: 30,
  },
  containersafe: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    // borderWidth: 1,
    // borderColor: 'gray',
    // padding: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 30,
  },
  separator: {
    borderLeftWidth: 0.1,
    borderLeftColor: "black",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    // fontWeight: 'bold',
  },
});
