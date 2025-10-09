import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/colors";

import { styles } from "./styles";
import { Separator } from "../Separator";
import { Summary } from "../Summary";

export type HomeHeaderProps = {
  total: string;
};

type Props = {
  data: HomeHeaderProps;
};

export function HomeHeader({ data }: Props) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.blue[500], colors.blue[800]]}
    >
      <View>
        <Text style={styles.label}>Total que você possui</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>

      <Separator color={colors.blue[400]} />

      <View style={styles.summary}>
        <Summary
          data={{ label: "Entradas", value: "R$ 5.321,00" }}
          icon={{ name: "arrow-upward", color: colors.green[500] }}
        />

        <Summary
          data={{ label: "Saídas", value: "-R$ 5.321,00" }}
          icon={{ name: "arrow-downward", color: colors.red[400] }}
          isLeft
        />
      </View>
    </LinearGradient>
  );
}
