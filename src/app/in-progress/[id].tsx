import { Button, Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>in-progress</Text>
      <Button title="porquinho" onPress={() => router.navigate("/target")} />
      <Button
        title="Transação"
        onPress={() => router.navigate("/transaction/132")}
      />
    </View>
  );
}
