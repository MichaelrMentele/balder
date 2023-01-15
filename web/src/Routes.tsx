// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import StandardLayout from './layouts/StandardLayout/StandardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={StandardLayout}>
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/player-combat" page={PlayerCombatPage} name="playerCombat" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
