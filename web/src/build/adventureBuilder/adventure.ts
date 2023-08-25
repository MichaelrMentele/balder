/*
 * There are three requirements for an adventure:
 * - the locations
 * - the story (the tapestry)
 * - the players
 *
 * An adventure also has a game log. This is a record of the game that can be
 * used to replay the game. Log entries are grouped by location.
 */

type Adventure = {
  name: string
  description: string
  images: Image[]
  locations: Location[]
  story: Story
  players: Player[]
  gameLog: GameLog
}
