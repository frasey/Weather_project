import styled from 'styled-components'

const SearchField = styled.input`
    background-color: #f5f5f5;
    color: #2f3e46;
`

const SearchBar = ({cityName, setCityName}) => {
    
    const handleInputChange = (event) => {
        setCityName(event.target.value)
    }

    return ( 
        <>
        <SearchField className="search-field" type="text" placeholder="City name" value={cityName} onChange={handleInputChange} required/>
        </>
    )
}
export default SearchBar