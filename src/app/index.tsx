import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";

const summary = {
  total: "R$ 2.450,00",
  input: { label: "Entradas", value: "R$ 5.321,00" },
  output: { label: "Saídas", value: "-R$ 5.321,00" },
};

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
    </View>
  );
}
