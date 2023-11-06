import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

import { PollCardPros } from './PollCard';
import { Participants } from './Participants';

interface Props {
  data: PollCardPros;
}

export function PollHeader({ data }: Props) {
  return (
    <HStack
      w="$full"
      h={'$20'}
      bgColor="transparent"
      borderBottomWidth={'$1'}
      borderBottomColor="$gray600"
      justifyContent="space-between"
      alignItems="center"
      mb={'$3'}
      p={'$4'}
    >
      <VStack>
        <Heading color="$white" fontSize="$md" fontFamily="$heading">
          {data.title}
        </Heading>

        <HStack>
          <Text color="$gray200" fontSize="$xs" mr={'$1'}>
            Código:
          </Text>

          <Text color="$gray200" fontSize="$xs" fontFamily="$heading">
            {data.code}
          </Text>
        </HStack>
      </VStack>

      <Participants
        count={data._count?.participants}
        participants={data.participants}
      />
    </HStack>
  );
}