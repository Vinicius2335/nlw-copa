import {
  Button as ButtonGluestack,
  ButtonIcon,
  ButtonText,
  IButtonProps
} from "@gluestack-ui/themed"

interface ButtonProps {
  title: string
  icon?: any
  type?: "PRIMARY" | "SECONDARY"
  onPress?: any
}

export function Button({ title, icon, type = "PRIMARY", onPress }: ButtonProps) {
  return (
    <ButtonGluestack
      w={"$full"}
      h={"$14"}
      rounded={"$sm"}
      bgColor={type === "SECONDARY" ? "$red500" : "$yellow500"}
      onPress={onPress}
    >
      <ButtonIcon
        as={icon}
        color={type === "SECONDARY" ? "$white" : "$black"}
        size="md"
        mr={"$2"}
      />
      <ButtonText
        color={type === "SECONDARY" ? "$white" : "$black"}
        fontSize={"$sm"}
        fontFamily="$heading"
        textTransform="uppercase"
      >
        {title}
      </ButtonText>
    </ButtonGluestack>
  )
}
