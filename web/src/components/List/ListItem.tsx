import Card from '../Card/Card'

export const ListItem = ({ onClick, children }) => {
  return (
    <Card
      cursor={'pointer'}
      _hover={{ background: 'red' }}
      backgroundColor="lightgray"
      width="100%"
      onClick={onClick}
    >
      {children}
    </Card>
  )
}

export default ListItem
