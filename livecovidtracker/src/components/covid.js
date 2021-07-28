import React, { useEffect,useState } from 'react'
import './covid.css';
const Covid = () => {
 
    const [data, setData] = useState([])

    const getCovidData = async () => {
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }

        
    }
     
useEffect(()=> {
  getCovidData();
},[]);

  return(
    <>
    <section>
        <h1>🔴Live</h1>
        <h2> Covid-19 Live Tracker</h2>
        <div class="grid-container">
            <div className="card_inner-1">
                <p className="card_name"><span>OUR</span>COUNTRY</p>
                <p className="card_total_card_small">INDIA</p>
            </div>
            <div className="card_inner-2">
                <p className="card_name"><span>Total</span>Recovered</p>
                <p className="card_total_card_small">{data.recovered}</p>
            </div>
            <div className="card_inner-3">
                <p className="card_name"><span>Total</span>Confirmed</p>
                <p className="card_total_card_small">{data.confirmed}</p>
            </div>
            <div className="card_inner-4">
                <p className="card_name"><span>Total</span>Deaths</p>
                <p className="card_total_card_small">{data.deaths}</p>
            </div>
            <div className="card_inner-5">
                <p className="card_name"><span>Total</span>Active</p>
                <p className="card_total_card_small">{data.active}</p>
            </div>
            <div className="card_inner-6">
                <p className="card_name"><span>Last</span>Updated</p>
                <p className="card_total_card_small">{data.lastupdatedtime}</p>
            </div>

        </div>
        
    </section>
    </>
  )
}

export default Covid