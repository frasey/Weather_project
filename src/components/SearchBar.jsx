import styled from 'styled-components'

const SearchField = styled.input`
    height: 40px;
    border-radius: 5px;
    background-color: #f5f5f5;
    color: #2f3e46;
    font-weight: bold;
    font-size: 18px;
`

const SearchBar = ({cityName, setCityName}) => {
    
    const handleInputChange = (event) => {
        setCityName(event.target.value)
    }

    return ( 
        <>
            <SearchField className="search-field" type="text" placeholder="City name" onChange={handleInputChange} value={cityName}/>
        </>
    )
}
export default SearchBar