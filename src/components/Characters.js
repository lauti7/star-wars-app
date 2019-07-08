import React from 'react'
import CharactersBodyTable from './CharactersBodyTable'

const Characters = ({characters, getData, nextPage}) => {
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
            {
              characters.map(({name, gender, eye_color, height, mass}, index) =>
                  <CharactersBodyTable
                    key={index}
                    id={index}
                    name={name}
                    gender={gender}
                    eye_color={eye_color}
                    height={height}
                    mass={mass}
                  />
              )
            }
          </tbody>
      </table>
      <div className="py-3">
        <button type="button" onClick={() => getData(nextPage)} className="btn btn-primary keloke" id="load-more"  name="button">ver mas</button>
      </div>
    </div>
  )
}

export default Characters
