import { HStack, Input, InputField } from "@gluestack-ui/themed"
import CountryFlag from "react-native-country-flag"

interface Props {
  code: string
  position: "left" | "right"
  value?: string
  onChangeText?: (value: string) => void
}

export function Team({ code, value, position, onChangeText }: Props) {
  const disabled = Number(value) > 0 ? true : false

  return (
    <HStack alignItems="center">
      {position === "left" && <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />}

      <Input
        bg="$gray900"
        w={"$10"}
        h={"$9"}
        borderColor="$gray600"
        isDisabled={disabled}
      >
        <InputField
          color="$white"
          fontSize="$sm"
          fontFamily="$body"
          type="text"
          keyboardType="numeric"
          onChangeText={onChangeText}
          placeholder="0"
          placeholderTextColor="$gray300"
          value={value}
          maxLength={1}
        />
      </Input>

      {position === "right" && <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />}
    </HStack>
  )
}
