
const dailyRecommendation = ({day}) => {

    let rainyIcon = []

    let snowyIcon = []

    let tempIcon = []
    
    const couldRain = () => {
        if (day.day.daily_chance_of_rain >= 60) {
            rainyIcon = "☂️"
        }
    }

    const couldSnow = () => {
        if (day.day.daily_chance_of_snow >= 70) {
            snowyIcon = "🐧"
        }
    }

    const clothesRecommendation = () => {
        if (day.day.avgtemp_c <= 4) {
            tempIcon = "🧣"
        } else if (day.day.avgtemp_c > 4 && day.day.avgtemp_c <= 10) {
            tempIcon = "🧥"
        } else if (day.day.avgtemp_c > 10 && day.day.avgtemp_c <= 17) {
            tempIcon = "🦺"
        } else if (day.day.avgtemp_c > 17 ) {
            tempIcon = "👕"
        } else {
            return
        }
    }

    couldRain()
    couldSnow()
    clothesRecommendation()
       
    return (<>
        <p>{rainyIcon}</p>
        <p>{snowyIcon}</p>
        <p>{tempIcon}</p>
    </>)
}
 
export default dailyRecommendation;