import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$xs',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '$medium',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
