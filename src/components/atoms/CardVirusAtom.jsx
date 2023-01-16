import React from 'react'
import UseCovidAPI from '../../hooks/UseCovidAPI';

function CardVirusAtom() {
    //let url = 'https://disease.sh/v3/covid-19/all';
    //<h1>Casos Activos: {data.active}</h1>
    let url = 'https://disease.sh/v3/covid-19/countries';
    let {data} = UseCovidAPI(url)
    console.log (data)
    
  return (
    <div>CardVirusAtom
      <ul>
        {data.map(country => (
          <li>{country.country}</li>
        ))
        }
      </ul>   
    </div>
  )
}

export default CardVirusAtom;
