import { HStack, Heading, Button, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import SectionHeading from 'src/components/SectionHeading/SectionHeading'

import Card from '../Card/Card'

const Action = ({ name, onUse = null }) => {
  return (
    <HStack>
      <Heading as="h5" size="sm">
        {name}
      </Heading>
      <Button onClick={onUse}>Use</Button>
      <Button>Prepare</Button>
    </HStack>
  )
}

const ActionList = ({ actions }) => {
  return (
    <VStack alignItems="left">
      {actions.map((action, index) => (
        <Action key={index} {...action} />
      ))}
    </VStack>
  )
}

enum ActionType {
  ACTION = 'ACTION',
  BONUS = 'BONUS',
  FREE = 'FREE',
  REACTION = 'REACTION',
}

enum SourceType {
  WEAPON = 'WEAPON',
  ABILITY = 'ABILITY',
  SPELL = 'SPELL',
  ITEM = 'ITEM',
}

const sampleWeapon = {
  types: [ActionType.ACTION],
  source: SourceType.WEAPON,
  onUse: () => {},
  name: 'Longsword',
  damage: '1d8',
  range: '5',
  damageType: 'slashing',
  properties: ['Versatile', 'Finesse'],
}

// Spells will need to get figured out, can cast over multiple rounds... actions may need a "continue"
// button to allow for this and track this
const sampleSpell = {
  types: [ActionType.ACTION],
  source: SourceType.SPELL,
  onUse: () => {},
  name: 'Fireball',
  damage: '8d6',
  range: '150',
  targets: 'point',
  components: ['V', 'S', 'M'],
  materials: ['tallow', 'brimstone'], // TODO: are they consumed?
  duration: 'instantaneous',
  castingTime: '1 action',
  spellSchool: 'Evocation',
  damageType: 'fire',
}

type Action = {
  name: string
  // The allowable ways this action can be taken
  types: ActionType[]
  // The object that the action is enabled by
  source: SourceType // nice to display the damage potential / die of the weapon
  onUse: () => void
  moreInfo?: string // TODO: add a popover to show more info?
}

const sampleActions: Action[] = [
  {
    name: 'Punch',
    types: [ActionType.ACTION],
    source: SourceType.ABILITY,
    onUse: () => {},
  },
  {
    name: 'Longsword',
    types: [ActionType.ACTION],
    source: SourceType.WEAPON,
    onUse: () => {},
  },
  sampleSpell,
  sampleWeapon,
]

const PlayerActionsPool = ({ actions }: { actions: Action[] }) => {
  
  actions = sampleActions
  return (
    <Card>
      <VStack alignItems="left">
        <SectionHeading>Actions</SectionHeading>
        <Tabs>
          {/* TODO: filter chips for the bonus, free, reaction, action */}
          <TabList>
            <Tab>All</Tab>
            <Tab>Weapon</Tab>
            <Tab>Abilities</Tab>
            <Tab>Spell</Tab>
            <Tab>Item</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ActionList actions={actions} />
            </TabPanel>
            <TabPanel>
              <ActionList
                actions={actions.filter(
                  (action) => action.source === SourceType.WEAPON
                )}
              />
            </TabPanel>
            <TabPanel>
              <ActionList
                actions={actions.filter(
                  (action) => action.source === SourceType.ABILITY
                )}
              />
            </TabPanel>
            <TabPanel>
              <ActionList
                actions={actions.filter(
                  (action) => action.source === SourceType.SPELL
                )}
              />
            </TabPanel>
            <TabPanel>
              <ActionList
                actions={actions.filter(
                  (action) => action.source === SourceType.ITEM
                )}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Card>
  )
}

export default PlayerActionsPool
