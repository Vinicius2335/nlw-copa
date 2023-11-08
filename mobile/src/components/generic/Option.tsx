import { Center, Text, Pressable } from '@gluestack-ui/themed';
import { PressableProps } from "react-native"

interface Props extends PressableProps{
  title: string;
  isSelected: boolean;
}

export function Option({ title, isSelected = false, ...rest }: Props) {
  return (
    <Pressable flex={1} h={'$7'} maxHeight={'$7'} {...rest}>
      <Center h={'$full'} w={'$full'} bgColor={isSelected ? "$gray600" : "transparent"} rounded={'$sm'} >
        <Text color="$gray200" fontFamily="$heading" fontSize="$xs">
          {title}
        </Text>
      </Center>
    </Pressable>
  );
}