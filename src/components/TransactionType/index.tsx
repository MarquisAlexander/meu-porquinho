import { TransactionTypes } from "@/utils/TransactionTypes";
import { View } from "react-native";
import { styles } from "./styles";
import { Option } from "./option";
import { colors } from "@/theme";

type Props = {
  selected: TransactionTypes;
  onChange: (type: TransactionTypes) => void;
};
export function TransactionType({ onChange, selected }: Props) {
  return (
    <View style={styles.container}>
      <Option
        icon="arrow-upward"
        title="Grardar"
        isSelected={selected === TransactionTypes.Input}
        selectedColor={colors.blue[500]}
        onPress={() => onChange(TransactionTypes.Input)}
      />
      <Option
        icon="arrow-downward"
        title="Resgatar"
        isSelected={selected === TransactionTypes.Output}
        selectedColor={colors.red[400]}
        onPress={() => onChange(TransactionTypes.Output)}
      />
    </View>
  );
}
