import axios from "axios"

const getJobItemCartAddress = async(location) => {

    const lat = location.lat
    const lng = location.long

    const {data} = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_API}`)

    if(data?.results[5]?.formatted_address.length > 0){
        const address = data.results[5].formatted_address

        if(address === '5450, Portugal') return data.results[6].formatted_address

        if(address) return address
    }else{
        return 'Location not defined'
    }
}

export default getJobItemCartAddress