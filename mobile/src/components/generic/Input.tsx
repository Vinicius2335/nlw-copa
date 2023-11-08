import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed"
import { TextInputProps } from "react-native"

interface InputProps extends TextInputProps {
  placeholder: string
  value: string
  onChangeText: (e: string) => void
  isCapitalize?: boolean
}

export function Input({ placeholder, value, isCapitalize=false, onChangeText, ...rest }:InputProps ) {
  return (
    <GlueStackInput bg="$gray800" h={"$14"} px={"$4"} borderColor="$gray600" {...rest}>
      <InputField
        color="$white"
        fontSize="$md"
        fontFamily="$body"
        placeholderTextColor={"$gray300"}
        placeholder={placeholder}
        type="text"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={isCapitalize == true ? 'characters': 'none'}
      />
    </GlueStackInput>
  )
}
