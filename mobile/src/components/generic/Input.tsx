import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed"
import { TextInputProps } from "react-native"

interface InputProps {
  placeholder: string
}

export function Input({ placeholder, ...rest }: TextInputProps) {
  return (
    <GlueStackInput bg="$gray800" h={"$14"} px={"$4"} borderColor="$gray600" {...rest}>
      <InputField
        color="$white"
        fontSize="$md"
        fontFamily="$body"
        placeholderTextColor={"$gray300"}
        placeholder={placeholder}
      />
    </GlueStackInput>
  )
}
