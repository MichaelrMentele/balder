/**
 * @fileoverview
 *
 * Locations are the places where the player can go to and where all game events
 * take place. Locations are the main building block of an adventure. There are a few
 * default locations that are always available, but the GM can create new locations
 * as needed. Locations are organized into a tree structure. The root of the tree
 * is the universe. The universe is the place where all locations exist. The universe
 * is the only location that cannot be deleted.
 *
 * The universe has a collection of locations
 * that are its children. Each location can have a collection of locations that are its
 * children. Locations can be nested as deeply as needed. The GM can create a location
 * anywhere in the tree. The GM can also move a location to a different location in the
 * tree. The GM can also delete a location from the tree.
 *
 * The default locations are:
 * - the camp
 * - the road
 *
 * The camp is where ever the players are currently staying this will often have events
 * such as crafting DCs and resting. The road is where the players are traveling between
 * locations.
 */

type LocationLink = {
  distance?: number
  location: Location
}

type Location = {
  id: string
  name: string
  description: string
  historyAndLore: string
  images: Image[]
  objectsAndDoodads: DooDad[]
  items: Item[]
  allLinkedLocations: LocationLink[] // GM only
  knownLinkedLocations: LocationLink[] // players
  encounters: Encounter[]
}
