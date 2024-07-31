/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import municipios_json from '@renderer/data/municipios_sv.json'
import DistritoModel from '@renderer/data/DistritoModel'

function SearchBar({
  placeholder = 'lugar a buscar',
  data
}: {
  placeholder: string
  data: (DistritoModel) => void
}): JSX.Element {
  const [input, setInput] = useState('')
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setInput(e.target.value.toLowerCase())
  }
  addEventListener('keypress', (event: KeyboardEvent) => {
    if (event.key == 'Enter') searchData()
  })

  const searchData = (): void => {
    data([])
    data(municipios_json.filter((i) => i.Distrito.toLowerCase().includes(input)))
  }

  return (
    <div className="w-fu1l flex h-auto">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-base-content text-base-100 rounded-l-xl w-96 text-xl p-3 outline-none"
        value={input}
        onChange={handleInput}
      />

      <button
        className="bg-primary border-base-200 text-xl rounded-r-xl p-3 hover:bg-primary-focus"
        onClick={searchData}
      >
        Buscar
      </button>
    </div>
  )
}

export default SearchBar
