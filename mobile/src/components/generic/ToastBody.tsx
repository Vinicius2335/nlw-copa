import { ToastDescription, ToastTitle, VStack } from "@gluestack-ui/themed";

interface ToastBodyProps {
  title: string,
  description: string
}

export function ToastBody({ title, description }: ToastBodyProps ) {
  return (
    <VStack space="xs">
      <ToastTitle color="$white" >{ title }</ToastTitle>
      <ToastDescription color="$white">
        { description }
      </ToastDescription>
    </VStack>
  )
}
