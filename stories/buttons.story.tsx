/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { BetterVisualizer } from './storyUtil'

// Components
import * as React from 'react'
import BrowserButton from '../brave-ui/src/browserButton'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Buttons', module).add('BrowserButton', () => {
  const label = 'Button Types'
  const options = {
    default: 'Default',
    primary: 'Primary',
    secondary: 'Secondary'
  }
  const defaultValue = 'default'
  const value = select(label, options, defaultValue)

  return (
    <BrowserButton
      theme={value}
      disabled={boolean('Disabled', false)}
      onClick={action('clicked the standard button!')}
      size={text('Size', '')}
      fontSize={text('Font Size', '')}>
      {text('Label', 'Hello Button')}
    </BrowserButton>
  )
})