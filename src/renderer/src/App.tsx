/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import SearchBar from './components/SearchBar'

function App(): JSX.Element {
  const [municipios, setMunicipios] = useState([
    {
      Id: 0,
      Departamento: '',
      Municipio: '',
      Distrito: ''
    }
  ])

  return (
    <div className="bg-base-200 h-screen text-base-content overflow-y-auto">
      <div className="block relative bg-beachImage bg-cover bg-center bg-no-repeat text-4xl text-center font-serif font-bold h-72 w-full overflow-hidden rounded-b-2xl">
        <div className="absolute flex items-center z-30 h-full w-full bg-gradient-to-b from-gray-600">
          <label className="w-full text-center text-5xlxl font-sans uppercase">
            distribución de distritos de El Salvador
          </label>
        </div>
      </div>
      <div className="w-full p-3">
        <div className="flex justify-center">
          <SearchBar placeholder="Ingresa un distrito" data={setMunicipios} />
        </div>
        <table className="table-fixed w-9/12 border-collapse border-base-100 mx-auto my-8">
          <thead className="bg-base-100">
            <tr>
              <th className="border border-slate-500 p-2 text-left uppercase">Distrito</th>
              <th className="border border-slate-500 p-2 text-left uppercase">Municipio</th>
              <th className="border border-slate-500 p-2 text-left uppercase">Departamento</th>
            </tr>
          </thead>
          <tbody>
            {municipios.map((m) => (
              <tr key={m.Id}>
                <td>{m.Distrito}</td>
                <td>{m.Municipio}</td>
                <td>{m.Departamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
