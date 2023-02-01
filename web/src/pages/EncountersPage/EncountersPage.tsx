import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EncountersPage = () => {
  return (
    <>
      <MetaTags title="Encounters" description="Encounters page" />

      <h1>EncountersPage</h1>
      <p>
        Find me in <code>./web/src/pages/EncountersPage/EncountersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>encounters</code>, link to me with `
        <Link to={routes.encounters()}>Encounters</Link>`
      </p>
    </>
  )
}

export default EncountersPage
