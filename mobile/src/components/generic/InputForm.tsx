import { Input as GlueStackInput, InputField, InputIcon, InputSlot } from "@gluestack-ui/themed"
import { TextInputProps } from "react-native"

interface InputFormProps extends TextInputProps{
  placeholder: string
  icon: any
  value: string
  onChangeText: (e: string) => void
  type?: "TEXT" | "PASSWORD"
}

export function InputForm({ placeholder, icon, type='TEXT', value, onChangeText, ...rest }: InputFormProps){
  return (
    <GlueStackInput bg="$gray800" h={"$14"} px={"$4"} borderColor="$gray600" {...rest}>
      <InputField
        color="$white"
        fontSize="$md"
        fontFamily="$body"
        placeholderTextColor={"$gray300"}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        type={type === 'TEXT' ? 'text' : 'password'}
      />
      <InputSlot>
        <InputIcon as={icon} size="md" />
      </InputSlot>
    </GlueStackInput>
  )
}