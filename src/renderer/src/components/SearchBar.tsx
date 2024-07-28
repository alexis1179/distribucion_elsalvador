function SearchBar({ placeholder = 'lugar a buscar' }: { placeholder: string }): JSX.Element {
  return (
    <div className="w-fu1l flex h-auto">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-base-content text-base-100 rounded-l-xl w-96 text-xl p-3 outline-none uppercase"
      />

      <button className="bg-primary border-base-200 text-xl rounded-r-xl p-3 hover:bg-primary-focus">Buscar</button>
    </div>
  )
}

export default SearchBar
