import {
  Box,
  VStack,
  HStack,
  Stack,
  Text,
  Button,
  Heading,
  Icon,
  Tooltip,
} from '@chakra-ui/react'

import Card from '../Card/Card'
import SectionHeading from '../SectionHeading/SectionHeading'

import { standard } from './Skills.mock'

const Skill = ({ skill }) => {
  return (
    <Card>
      <Stack alignContent="center" direction="row">
        <Button>{skill.modifier || 0}</Button>
        <Text>{skill.name}</Text>
        <Tooltip label={skill.desc} fontSize="md">
          <Icon as={skill.icon} />
        </Tooltip>
      </Stack>
    </Card>
  )
}

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

const SKILL_CONFIG = {}

const AbilityScoreSkillGroup = ({ ability }) => {
  return (
    <Stack width="100%">
      <HStack>
        <Heading size="sm">{ability.name}</Heading>
        <Icon as={ABILITY_CONFIG[ability.name].icon} />
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
        {standard.data.abilityScores.map(
          (ability, index) =>
            ability.skills.length > 0 && (
              <AbilityScoreSkillGroup key={index} ability={ability} />
            )
        )}
      </VStack>
    </Card>
  )
}

export default Skills
