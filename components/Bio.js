import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './instagrey-round-wb.png'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
          fontSize: rhythm(3/4),
          lineHeight: rhythm(1.5),
        }}
      >
        <img
          src={prefixLink(profilePic)}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(4),
            height: rhythm(4),
          }}
        />
        Written by <strong>{config.authorName}</strong> who lives and works in Dortmund, Germany building useful things. <a href="https://twitter.com/marcelreschke">You should follow him on Twitter</a>
      </p>
    )
  }
}

export default Bio
