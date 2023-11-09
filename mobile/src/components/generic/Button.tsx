import {
  Button as ButtonGluestack,
  ButtonIcon,
  ButtonSpinner,
  ButtonText
} from "@gluestack-ui/themed"

interface ButtonProps {
  title: string
  icon?: any
  type?: "PRIMARY" | "SECONDARY"
  onPress?: () => void
  isLoading?: boolean
}

export function Button({ title, icon, type = "PRIMARY", isLoading = false, onPress }: ButtonProps) {
  return (
    <ButtonGluestack
      w={"$full"}
      h={"$14"}
      rounded={"$sm"}
      bgColor={type === "SECONDARY" ? "$red500" : "$yellow500"}
      onPress={onPress}
      isDisabled={isLoading}
    >
      {isLoading ? (
        <>
          <ButtonSpinner mr={"$4"} color={type === "SECONDARY" ? "$white" : "$black"} />
          <ButtonText
            color={type === "SECONDARY" ? "$white" : "$black"}
            fontSize={"$sm"}
            fontFamily="$heading"
            textTransform="uppercase"
          >
            Aguarde
          </ButtonText>
        </>
      ) : (
        <>
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
        </>
      )}
    </ButtonGluestack>
  )
}
