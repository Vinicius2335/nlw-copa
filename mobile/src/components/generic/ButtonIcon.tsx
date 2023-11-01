import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Icon as IconGluestack } from '@gluestack-ui/themed';

interface Props extends TouchableOpacityProps {
  icon: any;
}

export function ButtonIcon({ icon, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <IconGluestack as={icon} color={'$gray300'} size={'sm'} />
    </TouchableOpacity>
  );
}