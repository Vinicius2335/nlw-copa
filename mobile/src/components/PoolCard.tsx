import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

import { Participants, ParticipantProps } from './Participants';

export interface PoolCardPros {
  id: string;
  code: string;
  title: string;
  ownerId: string;
  createdAt: string;
  owner: {
    name: string;
  },
  participants: ParticipantProps[];
  _count: {
    participants: number;
  }
}

interface Props extends TouchableOpacityProps {
  data: PoolCardPros;
}

export function PoolCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        w="$full"
        h={'$20'}
        bgColor="$gray800"
        borderBottomWidth={'$4'}
        borderBottomColor="$yellow500"
        justifyContent="space-between"
        alignItems="center"
        rounded="$sm"
        mb={'$3'}
        p={'$4'}
      >
        <VStack>
          <Heading color="$white" fontSize="$md" fontFamily="$heading">
            {data.title}
          </Heading>

          <Text color="$gray200" fontSize="$xs">
            Criado por {data.owner.name}
          </Text>
        </VStack>

        <Participants
          count={data._count.participants}
          participants={data.participants}
        />
      </HStack>
    </TouchableOpacity>
  );
}