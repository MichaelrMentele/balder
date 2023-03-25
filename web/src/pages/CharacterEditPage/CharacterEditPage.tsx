import {
  Button,
  Heading,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  Tooltip,
  VStack,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Card from 'src/components/Card/Card'

enum ClassTypes {
  barbarian = 'BARBARIAN',
}

type CharacterDescription = {
  description: string
  secrets: string
}

type Profile = {
  name: string
  portrait: string // TODO: image url
  physicalDescription: CharacterDescription
  personalityDescription: CharacterDescription
  backgroundDescription: CharacterDescription
}

type Lineage = {
  race: string
  subrace: string // TODO: not in the panel rn
  ancestry: string // TODO: not in panel rn
  background: string
}

type CharacterClass = {
  type: ClassTypes
}

type Character = {
  profile: Profile
  lineage: Lineage
  skills: string[] // TODO: Skills should have a source, and be tied to a class, race, feat, background, feat, etc.
  spells: string[]
  abilityScores: number[] // TODO: Should be a list of ability score objects, maybe we should display the associated skills for clarity when editing ability scores
  characterClasses: CharacterClass[]
  grants: string[] // TODO: Grants should be a list of objects, each with a type and a source and a reason why it was given
}

const SectionHeading = ({ children }) => (
  <Heading as="h2" size="md">
    {children}
  </Heading>
)

const CharacterProfile = () => {
  return (
    <VStack alignItems={'left'}>
      <Text>
        This is where you describe who you are and where you came from. How
        would you introduce yourself to your party?
      </Text>
      <Input placeholder={'Character Name'} />
      <Input placeholder={'Portrait'} />

      <SectionHeading>Personality</SectionHeading>
      <Tooltip label={'Personality traits, ideals, bonds, and flaws.'}>
        <Textarea placeholder={'Personality Description'} />
      </Tooltip>
      <Tooltip label="What others should not know or see by default? A tramp stamp? A tattoo you keep hidden under makup?">
        <Textarea placeholder={'Secrets'} />
      </Tooltip>

      <SectionHeading>Physical Description</SectionHeading>
      <Tooltip
        label={
          'Build, hair color, eye color, scars, and other memorable traits.'
        }
      >
        <Textarea placeholder={'Physical description'} />
      </Tooltip>
      <Tooltip label="What others should not know or see by default? A tramp stamp? A tattoo you keep hidden under makup?">
        <Textarea placeholder={'Secrets'} />
      </Tooltip>

      <SectionHeading>Personal History</SectionHeading>
      <Tooltip
        label={
          'What made you this way? Where did you come from? What was your life like?'
        }
      >
        <Textarea placeholder={'Background'} />
      </Tooltip>
      <Tooltip label="What others should not know or see by default? Did you kill a man?">
        <Textarea placeholder={'Secrets'} />
      </Tooltip>
    </VStack>
  )
}

// TODO: for each ability score we need to have a number input and a modifier
const CharacterAbilityScores = () => {
  return (
    <VStack alignItems={'left'}>
      <Text>Strength</Text>
      <NumberInput>
        <NumberInputField />
      </NumberInput>

      <Text>Dexterity</Text>
      <NumberInput>
        <NumberInputField />
      </NumberInput>

      <Text>Constitution</Text>
      <NumberInput>
        <NumberInputField />
      </NumberInput>

      <Text>Intelligence</Text>
      <NumberInput>
        <NumberInputField />
      </NumberInput>

      <Text>Wisdom</Text>
      <NumberInput>
        <NumberInputField />
      </NumberInput>

      <Text>Charisma</Text>
      <NumberInput>
        <NumberInputField />
      </NumberInput>
    </VStack>
  )
}

const Lineage = () => {
  return (
    <VStack alignItems={'left'}>
      <Text>What is your lineage?</Text>
      {/* // Instead of a drop down select let's have an expanded
      // left hand memnu / secondary nav so you can quickly cycle through
      https://www.dndbeyond.com/characters/96807207/builder/race/manage
      */}
      <Select>
        <option value="human">Human</option>
      </Select>
      {/* // TODO: subrace? other information? */}
    </VStack>
  )
}

/**
 @description Key actions on this component:
 - CRUD classes on character
 - Add a level in an existing class
*/
const CharacterClasses = () => {
  return (
    <Select placeholder="Select class">
      {Object.keys(ClassTypes).map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </Select>

    // List grants provided by class..?
  )
}

// Just for "Other" grants from the DM
const StartingGrants = () => {
  // skill selection here? <- from class
  // equipment selection here? <- from XYZ
  // feat selection here? <- from XYZ
  // grants that you cannot alter here
  return null
}

const CharacterCreatePage = () => {
  return (
    <>
      <MetaTags title="CharacterCreate" description="CharacterCreate page" />
      <Tabs variant="solid-rounded">
        <Card alignContent="center" ml="1em">
          <HStack justify="space-between" width={'100%'}>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Lineage</Tab>
              <Tab>Character Classes</Tab>
              <Tab>Ability Scores</Tab>
              <Tab>Grants</Tab>
            </TabList>
            <Button>Finish</Button>
          </HStack>
        </Card>
        <TabPanels>
          <TabPanel>
            <Card>
              <CharacterProfile />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <Lineage />
            </Card>
          </TabPanel>
          <TabPanel>
            {/* // The classes panel should have a list of added classes
            // you can add a second class easily
            // a class has a list of levels that you can edit */}
            <Card>
              <CharacterClasses />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <CharacterAbilityScores />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <StartingGrants />
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default CharacterCreatePage
