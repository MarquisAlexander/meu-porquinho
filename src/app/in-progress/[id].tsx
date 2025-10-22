import { Button, Text, View } from "react-native";
import { router } from "expo-router";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";

const details = {
  current: "R$ 580,00",
  target: "R$ 1.790,00",
  percentage: 25,
};

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple watch"
        rightButton={{
          icon: "edit",
          onPress: () => {},
        }}
      />

      <Progress data={details} />
    </View>
  );
}
