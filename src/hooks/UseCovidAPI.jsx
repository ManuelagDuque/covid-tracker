import { useEffect, useState } from "react"

function UseCovidAPI(url) {
    /** States */
    const [data, setData] = useState([])

    /** Effects */
    useEffect(() => {
        const apiData = async (url) => {
            let apiResponse = await fetch(url);
            // console.log(apiResponse)
            let covidData = await apiResponse.json();
            //console.log(covidData);
            setData(covidData)
        }
        apiData(url)
    }, [url])

  return {data}
}

export default UseCovidAPI