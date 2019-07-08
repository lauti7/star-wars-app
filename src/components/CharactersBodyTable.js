import React from 'react'

const CharactersBodyTable = ({id, name, gender, eye_color, height, mass}) => {
  return (
    <React.Fragment>
      <tr>
        <th>{id}</th>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{eye_color}</td>
        <td>{height}</td>
        <td>{mass}</td>
        <td>
          <button className="btn btn-success">Guardar</button>
        </td>
      </tr>
    </React.Fragment>
  )
}

export default CharactersBodyTable
