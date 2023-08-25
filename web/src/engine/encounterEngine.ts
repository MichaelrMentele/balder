import { Creature } from './Creatures'

type Creature = {
  initiative: number
}

type Location = {
  name: string
  description: string
  objectsAndDoodads: any[]
}

type Encounter = {
  name: string
  participants: Character[] | Creature[]
  location: Location
}

// 0. create the world and populate it with locations, creatures, and characters
// 1. select an encounter to run from a list
// 2. select a location for the encounter
export const runEncounter = (encounter: Encounter) => {
  encounter.participants.sort((a, b) => a.initiative - b.initiative)
  const encounterActive = true // pass this in
  while (encounterActive) {
    for (const participant of encounter.participants) {
      if (participant instanceof Character) {
        // prompt for action
        // apply action
      } else if (participant instanceof Creature) {
        // GM select creature action
        // apply creature action
      }
    }
  }
}

export const createWorld = () => {
  // create universe
  // - add locations
  // - add creatures
  // - add classes
  // - add items
}

export const createAdventure = () => {
  // create adventure
  // - select a world
  // create characters
  // create encounters
  // create tapestry
}
