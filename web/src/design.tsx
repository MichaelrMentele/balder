/* Characters */

import { effect } from "@chakra-ui/react"

/*
 * Any base stat could be effected including move speed.
 *
 */

enum Condition {
  Blinded = "Blinded",
  Charmed = "Charmed",
  Deafened = "Deafened",
  Frightened = "Frightened",
  Grappled = "Grappled",
  Incapacitated = "Incapacitated",
  Invisible = "Invisible",
  Paralyzed = "Paralyzed",
  Petrified = "Petrified",
  Poisoned = "Poisoned",
  Prone = "Prone",
  Restrained = "Restrained",
  Stunned = "Stunned",
  Unconscious = "Unconscious",
}

enum ActionType {
  Full = "Full",
  Bonus = "Bonus",
  Free = "Free",
  Reaction = "Reaction",
  Movement = "Movement",
}

type Action = {
  name: string
  description: string
  type: ActionType
}

type Movement = Action & {
  costPerUnit: number // per ft
  effect: () => void
}



const AllActions = {
  [ActionType.Full]: {
    attack: {
      name: "Attack",
      description: "Attack with a weapon in melee or ranged",


  },
  [ActionType.Bonus]: [
  ],
  [ActionType.Free]: [
  ],
  [ActionType.Reaction]: [
  ],
  [ActionType.Movement]: {
    move: {
      name: "Move",
      description: "Move up to your speed",
      costPerUnit: 1
    },
    climb: {
      name: "Climb",
      description: "Move vertically up terrain up to your speed",
      costPerUnit: 1
    },
    swim: {
      name: "Swim",
      description: "Move through water up to your speed",
      costPerUnit: 2
    },
    fly: {
      name: "Fly",
      description: "Move through the air up to your speed",
      costPerUnit: 1
    },
    dropProne: {
      name: "Drop Prone",
      description: "Drop to the ground",
      costPerUnit: 0,
      effect: (char) => char.conditions.push(Condition.Prone)
    },
    standUp: {
      name: "Stand Up",
      description: "Stand up from prone",
      costPerUnit: 0,
      effect: (char) => {
        // TODO: how do you update the state of a character in a round? there should be a round
        // tracker that keeps track of this stuff
        char.conditions = char.conditions.filter(c => c !== Condition.Prone)
        char.curRound.movementRemaining = char.curRound.movementRemaining/2
      }
    },
    highJump: {
      name: "High Jump",
      description: "Jump up to 3 + strength modifier feet if you move at least 10 feet on foot immediately before the jump. Otherwise, you can only jump half that distance",
      costPerUnit: 1,
    },
    longJump: {
      name: "Long Jump",
      description: `When you make a Long Jump, you cover a number of feet up to your Strength score if you move at least 10 feet on foot immediately before the jump. When you make a standing Long Jump, you can leap only half that distance. Either way, each foot you clear on the jump costs a foot of Movement.

      This rule assumes that the height of your jump doesn’t matter, such as a jump across a stream or chasm. At your GM’s option, you must succeed on a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump’s distance), such as a hedge or low wall. Otherwise, you hit it.

      When you land in Difficult Terrain, you must succeed on a DC 10 Dexterity (Acrobatics) check to land on your feet. Otherwise, you land prone.`,
      costPerUnit: 1,
    },
    grappleMove: {
      name: "Grapple Move",
      description: "Move up to your speed while grappling",
      costPerUnit: 2,
    }
  }
}



const Lerissa = {

}

<Skills skills={Lerissa.skills} />
<Actions actions={Lerissa.actions} />
