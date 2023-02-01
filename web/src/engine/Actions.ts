/*
 * Describes the action economy of the game.
 */

/*
 * Describes what is needed to complete an action. Includes one or more resource from a character:
 * - Time
 * - Round Action Points
 * - Items (can include a free hand, a pearl, or any other “item” from a character stat sheet)
 * - Somatic
 * - Verbal
 * - Place (must be in a certain locale, will not support initially)
 * - Health
 * - Spell slots
 */
type ActionRequirement =
  | ActionPointRequirement
  | SpellSlotRequirement
  | TimeRequirement
  | MaterialRequirement
  | SomaticRequirement
  | VerbalRequirement
  | HealthRequirement
  | DiceRoll

// Known types of requirements
type DiceRoll = {
  type: 'diceRoll'
  numDice: number
  dieType: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100'
}

type HealthRequirement = {
  type: 'health'
  description: string
  cost: number
}

type VerbalRequirement = {
  type: 'verbal'
}

type SomaticRequirement = {
  type: 'somatic'
}

type TimeRequirement = {
  type: 'time'
  unit: 'round' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'
  cost: number
}

type ActionPointRequirement = {
  type: 'full' | 'bonus' | 'reaction' | 'free' | 'movement'
  cost: number
}

type SpellSlotRequirement = {
  type:
    | 'one'
    | 'two'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
  cost: number
}

// Variable types of requirements
type MaterialRequirement = {
  type: 'material'
  cost: number
}

/* Action Effect
 * Describes what happens as a result of an action. Can effect one or more charaters, or objects in the world. Often triggers other effects. However, the end output is simply
 * a description of what happened for the GM and other PCs to apply. The exception is
 * effects that apply to the actor themselves, which are applied immediately.
 * - Apply effect to an object
 * - Apply effect to a location
 * - Apply effect to a character’s inventory
 * - Apply effect to a character’s equipment
 * - Apply effect to a character’s spell slots
 * - Apply effect to a character’s action points
 * - Apply effect to a character’s health
 * - Apply effect to a character’s movement
 * - Apply effect to a character’s inventory
 * - Apply effect to a character’s equipment
 * - Apply effect to a character’s spell slots
 *
 */

type ActionEffectDefinition = ExternalEffect | SelfEffect | DiceRoll

type ExternalEffect = {
  type: 'externalEffect'
  description: string
}

// TODO: In the future this should apply to a character’s HP, inventory, equipment, or spell slots
// For now, character simply manually applies the description.
type SelfEffect = {
  type: 'selfEffect'
  description: string
}

export type CharacterCondition =
  | 'blinded'
  | 'charmed'
  | 'deafened'
  | 'frightened'
  | 'grappled'
  | 'incapacitated'
  | 'invisible'
  | 'paralyzed'
  | 'petrified'
  | 'poisoned'
  | 'prone'
  | 'restrained'
  | 'stunned'
  | 'unconscious'

export type ActionDefinition = {
  description: string
  requirements: ActionRequirement[]
  effects: ActionEffectDefinition[]
}

// TODO: spells are so specific we could have special requirements perhaps for them
// though it does make abilities awkward..?
export const ActionDefinitions = {
  fireball: {
    description:
      'Fire a fireball dealing 8d6 fire damage. Dex save for half damage.',
    effects: [
      {
        type: 'diceRoll',
        numDice: 8,
        dieType: 'd6',
      },
    ],
    requirements: [
      {
        type: 'spellSlot',
        level: 'three',
        cost: 1,
      },
      {
        type: 'verbal',
      },
    ],
  },
  multiAttack: {
    type: 'rightHand',
    requirements: [
      {
        type: 'action',
        cost: 1,
      },
    ],
  },
  mainHandAttack: {
    type: 'rightHand',
    requirements: [
      {
        type: 'action',
        cost: 1,
      },
    ],
  },
  offHandAttack: {
    type: 'leftHand',
    requirements: [
      {
        type: 'bonus',
        cost: 1,
      },
    ],
  },
}
