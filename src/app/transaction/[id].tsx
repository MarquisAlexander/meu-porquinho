import { View } from "react-native";
import { PageHeader } from "@/components/PageHeader";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { TransactionType } from "@/components/TransactionType";
import { useState } from "react";
import { TransactionTypes } from "@/utils/TransactionTypes";

export default function Target() {
  const [type, setType] = useState(TransactionTypes.Input);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Nova transação"
        subtitle="A cada valor guardado voce fica mais próximo da dus meta. Se esforce para guardar e evitar retirar"
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType selected={type} onChange={setType} />
        <CurrencyInput value={0} label="Valor (R$)" />
        <Input
          label="Motivo (opcional)"
          placeholder="Ex: investir em CDB de 110% no banco XP"
        />
        <Button title="Salvar" />
      </View>
    </View>
  );
}
