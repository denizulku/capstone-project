import React from 'react'
import Home from './Home'
import Create from './Create'
import Overview from './Overview'

export default function Sites({ siteName }) {
  const Site = getSite(siteName)
  return (
    <div>
      <Site />
    </div>
  )

  function getSite(siteName) {
    const sites = {
      Home: Home,
      Create: Create,
      Overview: Overview,
    }

    return sites[siteName]
  }
}
