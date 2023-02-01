/*
A character has:
- race:
- skills: these are things like acrobatics, stealth, etc
- spells: these are spells they know
- abilities: these are things like multi-attack, feats, or the ability to use a bonus action, spells, etc
- equipment: what they are wearing/have to hand, this includes backpacks, pouches, etc which can store items
- resources: these are things like health, spell slots, ki points, etc
- trait: a textual description of something about the character "battle scarred", or a bond, or other information about the character
- classes: a character can have multiple classes, each with their own abilities, spells, etc

A character can:
- use an ability
- use a skill
- use a spell
- use an item
- level up
*/

const CharacterState = {
  currentHealth: 100,
  maxHealth: 100,
  class: CharacterClassInstance,
}

class Character {
  skills: Skill[] // sum of racial, equipment, class skills, and granted skills
  spells: Spell[] // sum of racial, equipment, class spells, and granted skills
  abilities: Ability[] // sum of racial, equipment, class abilities, and granted skills
  resources: Resource[] // sum of racial, equipment, class resources (slots, health, etc), and granted skills
  equipment: Equipment[] // the list of items equipped
  traits: Trait[] // sum of racial, equipment, and class traits
  effects: Effect[] // effects that are currently active on the character
  abilityScores: CharacterState // ability scores

  useAction(ability: Ability) {
    //
  }

  useSkill(skill: Skill) {
    // do any character effects apply?
  }

  useSpell(spell: Spell) {
    // ...
  }

  useItem(item: Item) {
    // ...
  }
}
