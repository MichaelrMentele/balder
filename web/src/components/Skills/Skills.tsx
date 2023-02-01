import {
  VStack,
  HStack,
  Stack,
  Text,
  Heading,
  Icon,
  Tooltip,
} from '@chakra-ui/react'

import Card from '../Card/Card'
import DiceButton from '../DiceButton/DiceButton'
import SectionHeading from '../SectionHeading/SectionHeading'

import { standard } from './Skills.mock'

const Skill = ({ skill }) => {
  // TODO: skill modifier not set in mock data
  const modifier = 5
  return (
    <Card>
      <Stack alignContent="center" direction="row">
        <DiceButton diceDef={'1d20'} modifier={modifier}>
          {modifier}
        </DiceButton>
        <Text>{skill.name}</Text>
        <Tooltip label={skill.desc} fontSize="md">
          <Icon as={skill.icon} />
        </Tooltip>
      </Stack>
    </Card>
  )
}

// The set of ability types and their presentational meta data
const ABILITY_CONFIG = {
  STR: {
    icon: null,
    color: 'red.100',
  },
  DEX: {
    icon: null,
    color: 'green.200',
  },
  CON: {
    icon: null,
    color: 'yellow.100',
  },
  INT: {
    icon: null,
    color: 'blue.100',
  },
  WIS: {
    icon: null,
    color: 'purple.100',
  },
  CHA: {
    icon: null,
    color: 'orange.100',
  },
}

// TODO: create real sample skills for a player
// const SKILL_CONFIG = {}

const AbilityScoreSkillGroup = ({ ability }) => {
  return (
    <Stack width="100%">
      <HStack>
        <Heading size="sm">{ability.name}</Heading>
        <Tooltip label={ability.desc} fontSize="md">
          <Icon as={ABILITY_CONFIG[ability.name].icon} />
        </Tooltip>
        <Text>{ability.modifier}</Text>
      </HStack>
      <Stack>
        {ability.skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </Stack>
    </Stack>
  )
}

const Skills = () => {
  return (
    <Card>
      <VStack alignItems="left">
        <SectionHeading>Skills</SectionHeading>
        {standard.data.abilityScores.map((ability, index) => (
          <AbilityScoreSkillGroup key={index} ability={ability} />
        ))}
      </VStack>
    </Card>
  )
}

export default Skills
