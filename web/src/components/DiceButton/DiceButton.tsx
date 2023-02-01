import { Button, useToast } from '@chakra-ui/react'

/*
 * The DiceButton component is a button that rolls a dice and displays the result in a toast
 * in the lower right corner of the screen. It does this by taking in a dice string. What
 * we want to show in the toast is: 1) the dice string, 2) the net result of the roll, and
 * 3) the calculation of the roll. For example, if the dice string is "1d20+5", we want to
 * show "1d20+5 = 15 (10 + 5)" in the toast.
 */
const DiceButton = ({ diceDef, modifier, children }) => {
  const toast = useToast()
  const roll = 5
  const result = roll + modifier
  return (
    <Button
      onClick={() =>
        toast({
          title: `${diceDef} = ${result} (${roll} + ${modifier})}`,
          position: 'bottom-right',
          isClosable: true,
        })
      }
    >
      {children}
    </Button>
  )
}

export default DiceButton
