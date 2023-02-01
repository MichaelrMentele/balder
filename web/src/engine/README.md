Ref https://whimsical.com/TymjKZdE4JFocDvzNbahx7

This document describes the modelling of an RPG game engine. It's meant to be general purpose and constructable.

The goal is for it to be used alongside the "Theatre of Imagination" and NOT to replace a table top simulator. Tactical battle maps, line of sight, are hard and become inflexible / hard to override. Instead, we focus on the systems you can bring to any table -- or to any tabletop simulator.

There are three main consumers:
* the game master
* the players
* the party

A GM creates an adventure, based on any number of rules engines, then players create characters and join these adventures. The player characters collectively are a party. The party shares GM published information on: 1) their map and 2) their journal.

An adventure is a series of encounters with a few helper components added in for good measure such as:
* a map for orienteering
* a journal for note taking
* an encounter dashboard for playing

That is all!

# The Encounter System (Micro)
An encounter is a series of actions, taken in order by characters or objects. Events refer to actions taken by the world ie. lightning striking, etc.

The transaction of materials, time, hp, action points, for effects and conditions is known as the "action economy".

The action economy is powered by three components:
* round/time points such as actions, bonus actions, etc.
* character action pools (what they can do)
* action definitions which describe reqs. for action use as well as their effects

The encounter system contains an encounter event feed that describes:
* die rolls
* actions taken
* loot dropped
* messages (including whispers)
* invoices (for shared expenses)
* time elasped notices

# Map, Adventure Events, & Journal System (Macro)
The adventure events and journal system is where strategy is born. This is the macro side of your adventure.

Your map will include the base notes from your GM, but you can also add your own annotations. Your journal will include base notes from your GM for your party, secret notes for you, and your own notes.

There are a few key sections to the journal:
* personal developments -- this is events that impact your development as a character not limited to levels but to personal storylines
* secrets -- what you know that the party doesn't (multiple players can share secrets)
* party log -- general notes posted by you, or your party
* personal log -- notes posted by you




