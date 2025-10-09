import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";

const summary = {
  total: "R$ 2.450,00",
  input: { label: "Entradas", value: "R$ 5.321,00" },
  output: { label: "Saídas", value: "-R$ 5.321,00" },
};

const targets = [
  {
    name: "Celular",
    percentage: "75%",
    current: "750,00",
    target: "1.000,00",
    id: "",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
      <Target data={targets[0]} />
    </View>
  );
}
