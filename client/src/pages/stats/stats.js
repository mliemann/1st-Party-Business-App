import React, { useState, useEffect } from "react";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar} from "recharts";
import './stats.css';
import API from "../../utils/API";



// const barChartData = [
//   {
//     dish: "eggplant al vapor",
//     likes: 120
//   },
//   {
//     dish: "au poivre a la mexicana",
//     likes: 20
//   },
//   {
//     dish: "grilled pork chop",
//     likes: 140
//   },
//   {
//     dish: "pescado enacahuatado",
//     likes: 40
  
//   },
//   {
//     dish: "alambre",
//     likes : 150
//   },
//   {
//     dish: "hongo asado",
//     likes: 180
//   },
//   {
//     dish: "esquites en ceniza",
//     likes: 50
//   },
//   {
//     dish: "suadreo tacos",
//     likes: 150
//   }
// ];

const Stats= () => {
const [barChartData, setBarChartData] = useState({});

useEffect(() => {
  API.getLike().then((res) => {
    setBarChartData(res.data);
  });
}, []);

console.log(barChartData)


    return (
    <div className="chartcontainer" > 
      <React.Fragment>
    <h3 id="chartHeader">favorite dishes</h3>
    <p id="chartHeader2"> *make sure to hover to see dish names</p>
    <ResponsiveContainer width="100%" aspect={2}>
     <BarChart data= {barChartData} id="barChartData">
       <CartesianGrid strokeDasharray="2 2"/>
       <Tooltip />
       <Bar dataKey="likeCount" fill="#25335a" />
       <XAxis dataKey ="dish"  interval="preserveStartEnd"/>
       <YAxis />
       <Legend />
     </BarChart>
    </ResponsiveContainer>
  </React.Fragment></div>
   
   
    );
}
export default Stats