import React from 'react'
import CharactersBodyTable from './CharactersBodyTable'

const Characters = ({characters, getData, nextPage, like, unlike, route}) => {
  const checkRoute = () => {
    const currentRoute = route

    if (currentRoute === '/personajes') {
      return (
        characters.map(({id,name, gender, eye_color, height, mass, saved}, index) =>
            <CharactersBodyTable
              key={id}
              id={id}
              name={name}
              gender={gender}
              eye_color={eye_color}
              height={height}
              mass={mass}
              like={like}
              route={route}
              saved={saved}
            />
        )
      )
    } else {
      const filteredCharacters = characters.filter(character => character.saved === true);
      return(
        filteredCharacters.map(({id,name, gender, eye_color, height, mass, saved}, index) =>
            <CharactersBodyTable
              key={id}
              id={id}
              name={name}
              gender={gender}
              eye_color={eye_color}
              height={height}
              mass={mass}
              like={like}
              unlike={unlike}
              route={route}
              saved={saved}
            />
        )
      )
    }
  }
  return (
    <div>
      <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Genero</th>
              <th>Color de ojos</th>
              <th>Altura (M)</th>
              <th>Peso (Kg)</th>
              <th>Guardar</th>
            </tr>
          </thead>
          <tbody className="tBody">
            {checkRoute()}
          </tbody>
      </table>
      <div className="py-3">
        <button type="button" onClick={() => getData(nextPage)} className="btn btn-primary keloke" id="load-more"  name="button">ver mas</button>
      </div>
    </div>
  )
}

export default Characters
