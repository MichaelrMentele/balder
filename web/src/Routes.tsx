import { Router, Route, Set } from '@redwoodjs/router'

import BuildLayout from './build/GMBuildLayout'
import BuildAdventuresPage from './build/pages/AdventuresPage/AdventuresPage'
import AgentsPage from './build/pages/AgentsPage/AgentsPage'
import EncounterDetailPage from './build/pages/EncounterDetailPage'
import EncountersPage from './build/pages/EncountersPage'
import PlayLayout from './play/layouts/StandardLayout/StandardLayout'
import PlayAdventurePage from './play/pages/AdventurePage/AdventurePage'
import PlayCharacterEditPage from './play/pages/CharacterEditPage/CharacterEditPage'
import PlayCharactersPage from './play/pages/CharactersPage/CharactersPage'
import PlayJournalPage from './play/pages/JournalPage/JournalPage'
import PlayPartyPage from './play/pages/PartyPage/PartyPage'
import PlayCombatPage from './play/pages/PlayerCombatPage/PlayerCombatPage'
import SettingsPage from './play/pages/SettingsPage/SettingsPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PlayLayout}>
        <Route path="/play" page={PlayCombatPage} name="play" />
        <Route path="/journal" page={PlayJournalPage} name="journal" />
        <Route path="/adventure" page={PlayAdventurePage} name="adventure" />
        <Route path="/party" page={PlayPartyPage} name="party" />
        <Route path="/character-edit/{id}" page={PlayCharacterEditPage} name="characterEdit" />
        <Route path="/characters" page={PlayCharactersPage} name="characters" />
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route notfound page={NotFoundPage} />
      </Set>
      <Set wrap={BuildLayout}>
        <Route path="/gm/build/agents" page={AgentsPage} name="agents" />
        <Route path="/gm/build/adventure" page={BuildAdventuresPage} name="adventure" />
        <Route path="/gm/build/encounters" page={EncountersPage} name="encounters" />
        <Route path="/gm/build/encounter/{id}" page={EncounterDetailPage} name="encounter" />
      </Set>
    </Router>
  )
}

export default Routes
