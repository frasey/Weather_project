const SearchBar = ({cityName, setCityName}) => {
    
    const handleInputChange = (event) => {
        setCityName(event.target.value)
    }

    return ( 
        <>
        <input type="text" placeholder="City name" value={cityName} onChange={handleInputChange} required/>
        </>
    )
}
export default SearchBar