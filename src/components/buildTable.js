import React from 'react'

function BuildTable(props){
    var table = props.data.map(music => {
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
    return (<tbody>{table}</tbody>)
  }

export default BuildTable;