import React from 'react'

const CharactersBodyTable = ({id, name, gender, eye_color, height, mass, saved, like, unlike, route}) => {
  const checkSaved = (character) => {
    if (character) {
      return (
        <React.Fragment>
          <button id='btn-save' onClick={unlike} className="btn btn-danger">unlike</button>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <button id='btn-save' onClick={like} className="btn btn-success">Like</button>
        </React.Fragment>
      )
    }
  }
  const checkRoute = (character) => {
    const currentRoute = route;
    if (currentRoute === '/personajes') {
      return checkSaved(character)
    } else {
      return (
        <React.Fragment>
          <button id='btn-save' onClick={unlike} className="btn btn-danger">unlike</button>
        </React.Fragment>
      )
    }
  }
  return (
    <React.Fragment>
      <tr id={id}>
        <th>{id}</th>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{eye_color}</td>
        <td>{height}</td>
        <td>{mass}</td>
        <td>
          {checkRoute(saved)}
        </td>
      </tr>
    </React.Fragment>
  )
}

export default CharactersBodyTable
