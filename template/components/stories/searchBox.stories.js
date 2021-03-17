/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { withActions } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-vue-router'

import searchResults from '~/tests/mocks/search-results'

export default {
  title: 'Components | Search',

  decorators: [
    withKnobs,
    StoryRouter(),
    withActions(),
    () => ({
      template: `
        <div style="max-width: 450px; margin: 3rem auto;"><story/></div>
      `
    })
  ]
}

export const SearchBoxGlobal = () => ({
  template: `
    <search-box />
  `,
  created() {
    const mock = new MockAdapter(axios)

    mock.onGet('/data/search.json').reply(200, searchResults)
  }
})

SearchBoxGlobal.story = {
  name: 'Search Box - Global',
  parameters: {
    info: {
      // summary: "Hello"
    }
  }
}

export const SearchBoxPage = () => ({
  template: `
    <search-box position="in-page" />
  `,
  created() {
    const mock = new MockAdapter(axios)

    mock.onGet('/data/search.json').reply(200, searchResults)
  }
})

SearchBoxPage.story = {
  name: 'Search Box - In Page',
  parameters: {
    info: {
      // summary: "Hello"
    }
  }
}
