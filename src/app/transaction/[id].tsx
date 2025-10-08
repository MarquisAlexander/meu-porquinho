import { Button, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Target() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>ID: {params.id}</Text>
    </View>
  );
}
