// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import StandardLayout from './layouts/StandardLayout/StandardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={StandardLayout}>
        <Route path="/" page={PlayerCombatPage} name="home" />
        <Route path="/play" page={PlayerCombatPage} name="play" />
        <Route path="/map" page={MapPage} name="map" />
        <Route path="/journal" page={JournalPage} name="journal" />
        <Route path="/adventure" page={AdventurePage} name="adventure" />
        <Route path="/party" page={PartyPage} name="party" />
        <Route path="/encounters" page={EncountersPage} name="encounters" />
        <Route path="/character-edit/{id}" page={CharacterEditPage} name="characterEdit" />
        <Route path="/characters" page={CharactersPage} name="characters" />
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
