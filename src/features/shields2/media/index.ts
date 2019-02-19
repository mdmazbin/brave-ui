/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'
import { StyledComponentClass } from 'styled-components'
import ArrowDown from './arrowDown'

import { ComponentType } from 'react'
import { ShieldAlertIcon } from '../../../components/icons'
import palette from '../../../theme/palette'

// rotated variants
function RotatedIconComponent (
  iconComponent: StyledComponentClass<any, any>,
  degrees: number
) {
  return styled(iconComponent)`
    transform: rotate(${degrees}deg);
  `
}

export const ShieldIcon = styled(ShieldAlertIcon as ComponentType)`
  box-sizing: border-box;
  display: block;
  width: 36px;
  margin: auto;
  color: #C5C5D3;
`

interface ArrowDownIconProps {
  tabIndex: number
}

export const ArrowDownIcon = styled(ArrowDown as ComponentType<ArrowDownIconProps>)`
  &:focus {
    outline-width: 2px;
    outline-offset: -6px;
    outline-color: ${palette.orange400};
  }

  &:active {
    outline: none;
  }
`
export const ArrowUpIcon = RotatedIconComponent(ArrowDown, 180)
