import { HStack, styled } from '@gluestack-ui/themed';
// import CountryFlag from "react-native-country-flag";

import { Input } from './generic/Input';

interface Props {
  code: string;
  position: 'left' | 'right';
  onChangeText: (value: string) => void;
}

const MyInput = styled(Input, {
  textAlign: "center"
},
{ 
  componentName:"Input"
});

export function Team({ code, position, onChangeText }: Props) {
  return (
    <HStack alignItems="center">
      {/* {position === 'left' && <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />} */}

      <MyInput
       w={'$10'}
       h={'$9'}
       fontSize="$xs"
       keyboardType="numeric"
       onChangeText={onChangeText}
      />

      {/* {position === 'right' && <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />} */}
    </HStack>
  );
}