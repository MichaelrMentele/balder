/**
 * @fileoverview Story for the Adventure Builder.
 */

/**
 * A story is a collection of plot points that are connected together to form a
 * cohesive story. The story is the tapestry that the GM weaves to create the
 * adventure. The story is the main building block of an adventure. The plot
 * describes how the world develops.
 *
 * The character development describes how the characters develop. The session
 * brings together one or both of these two types of developments.
 *
 * Both types of developments are organized into a tree structure. The root of
 * the tree is the story. The story is the place where all plot points exist. The
 * story is the only plot point that cannot be deleted.
 *
 * The story has a collection of plot points that are its children. Each plot
 * point can have a collection of plot points that are its children. Plot points
 * can be nested as deeply as needed. The GM can create a plot point anywhere in
 * the tree. The GM can also move a plot point to a different plot point in the
 * tree.
 */
type PlotDevelopment = {
  name: string
  description: string
  images: Image[]
  preRequisites: string
  children: PlotDevelopment[]
  completed: boolean
}

type CharacterDevelopment = {
  character: Character
  preRequisites: string
  images: Image[]
  children: CharacterDevelopment[]
  completed: boolean
  known: boolean
  progress: number
}

type SessionSummary = {
  date: Date
  plotDevelopments: PlotDevelopment[]
  characterDevelopments: CharacterDevelopment[]
  shortcuts: string // the items that are ready to go for this session, links to notes, encounters, monsters, and so on
  notes: string
}

type Story = {
  name: string
  description: string
  images: Image[]
  plotDevelopments: PlotDevelopment
  characterDevelopments: CharacterDevelopment[]
  sessionSummaries: SessionSummary[]
}
