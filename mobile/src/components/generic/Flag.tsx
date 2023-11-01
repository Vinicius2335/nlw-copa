import { Image } from '@gluestack-ui/themed';
import { ImageProps } from "react-native"

export function Flag({ ...rest }:ImageProps ) {
  return (
    <Image
      {...rest}
      alt="Bandeira"
      w={'$8'}
      h={'$6'}
      mx={'$3'}
    />
  );
}