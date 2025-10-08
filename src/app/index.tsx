import { Button, Text, View } from "react-native";
import { router } from "expo-router";
// import { fontFamily } from "@/theme/fontFamily";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Olá, Expo Router bold</Text>
      <Text>Olá, Expo Router</Text>
      <Button title="porquinho" onPress={() => router.navigate("/target")} />
      <Button
        title="Transação"
        onPress={() => router.navigate("/transaction/132")}
      />
    </View>
  );
}
