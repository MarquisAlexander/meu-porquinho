import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { router } from "expo-router";

const summary = {
  total: "R$ 2.450,00",
  input: { label: "Entradas", value: "R$ 5.321,00" },
  output: { label: "Saídas", value: "-R$ 5.321,00" },
};

const targets = [
  {
    id: "1",
    name: "Celular",
    percentage: "75%",
    current: "750,00",
    target: "1.000,00",
  },
  {
    id: "2",
    name: "Teclado",
    percentage: "50%",
    current: "250,00",
    target: "500,00",
  },
  {
    id: "3",
    name: "Cadeira",
    percentage: "50%",
    current: "450,00",
    target: "900,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <List
        data={targets}
        title="Metas"
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
