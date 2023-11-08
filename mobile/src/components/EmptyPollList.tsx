import { useNavigation } from '@react-navigation/native';
import { HStack, Text, Pressable } from "@gluestack-ui/themed";

export function EmptyPollList() {

  const { navigate } = useNavigation();

  return (
    <HStack flexWrap="wrap" justifyContent="center">
      <Text color="$white" fontSize="$sm" textAlign="center">
        Você ainda não está participando de {'\n'}
        nenhum bolão, que tal
      </Text>

      <Pressable onPress={() => navigate('find')}>
          <Text textDecorationLine="underline" color="$yellow500">
            buscar um por código
          </Text>
      </Pressable>

      <Text color="$white" fontSize="$sm" textAlign="center" mx={'$1'}>
        ou
      </Text>

      <Pressable onPress={() => navigate('new')}>
        <Text textDecorationLine="underline"  color="$yellow500">
          criar um novo
        </Text>
      </Pressable>

      <Text color="$white" fontSize="$sm" textAlign="center">
        ?
      </Text>
    </HStack>
  );
}