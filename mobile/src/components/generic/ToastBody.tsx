import { ToastDescription, ToastTitle, VStack } from "@gluestack-ui/themed";

interface ToastBodyProps {
  title: string,
  description: string
}

export function ToastBody({ title, description }: ToastBodyProps ) {
  return (
    <VStack space="xs">
      <ToastTitle>{ title }</ToastTitle>
      <ToastDescription>
        { description }
      </ToastDescription>
    </VStack>
  )
}
