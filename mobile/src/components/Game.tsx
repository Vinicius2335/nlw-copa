import { Button, HStack, Text, useTheme, VStack, Icon } from '@gluestack-ui/themed';
import { X, Check } from 'phosphor-react-native';
// import { getName } from 'country-list';
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';

import { Team } from './Team';

interface GuessProps {
  id: string;
  gameId: string;
  createdAt: string;
  participantId: string;
  firstTeamPoints: number;
  secondTeamPoints: number;
}

export interface GameProps {
  id: string;
  date: Date;
  firstTeamCountryCode: string;
  secondTeamCountryCode: string;
  guess: null | GuessProps;
};

interface Props {
  data: GameProps;
  onGuessConfirm: () => void;
  setFirstTeamPoints: (value: string) => void;
  setSecondTeamPoints: (value: string) => void;
};

export function Game({ data, setFirstTeamPoints, setSecondTeamPoints, onGuessConfirm }: Props) {
  const { colors, sizes } = useTheme();

  const when = dayjs(data.date).locale(ptBR).format("DD [de] MMMM [de] YYYY");

  return (
    <VStack
      w="$full"
      bgColor="$gray800"
      rounded="$sm"
      alignItems="center"
      borderBottomWidth={'$2'}
      borderBottomColor="$yellow500"
      mb={'$3'}
      p={'$4'}
    >
      <Text color="$gray200" fontFamily="heading" fontSize="$sm">
        {/* {getName(data.firstTeamCountryCode)} vs. {getName(data.secondTeamCountryCode)} */}
      </Text>

      <Text color="$gray200" fontSize="$xs">
        {when}
      </Text>

      <HStack mt={'$4'} w="$full" justifyContent="space-between" alignItems="center">
        <Team
          code={data.firstTeamCountryCode}
          position="right"
          onChangeText={setFirstTeamPoints}
        />

        <Icon as={X} color='$gray300' size='md'/>

        <Team
          code={data.secondTeamCountryCode}
          position="left"
          onChangeText={setSecondTeamPoints}
        />
      </HStack>

      {
        !data.guess &&
        <Button size="xs" w="$full" bgColor="$green500" mt={'$4'} onPress={onGuessConfirm}>
          <HStack alignItems="center">
            <Text color="$white" fontSize="$xs" fontFamily="heading" mr={'$3'}>
              CONFIRMAR PALPITE
            </Text>

            <Icon as={Check} color='$white' size='md'/>
          </HStack>
        </Button>
      }
    </VStack>
  );
}