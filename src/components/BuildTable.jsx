import React from 'react'

function BuildTable(props){
    return props.data.map(music => {
      const { id, title, album, artist, genre } = music
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>{album}</td>
          <td>{artist}</td>
          <td>{genre}</td>
        </tr>
      )
    })
  }

export default BuildTable;