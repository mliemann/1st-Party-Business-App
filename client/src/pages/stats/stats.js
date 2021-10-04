import React from "react";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar} from "recharts";
import './stats.css';


const barChartData = [
  {
    dish: "eggplant al vapor",
    likes: 120
  },
  {
    dish: "au poivre a la mexicana",
    likes: 20
  },
  {
    dish: "grilled pork chop",
    likes: 140
  },
  {
    dish: "pescado enacahuatado",
    likes: 40
  
  },
  {
    dish: "alambre",
    likes : 150
  },
  {
    dish: "hongo asado",
    likes: 180
  },
  {
    dish: "esquites en ceniza",
    likes: 50
  },
  {
    dish: "suadreo tacos",
    likes: 150
  }
];
function Stats(){
    return (
    <div className="chartcontainer" > 
      <React.Fragment>
    <h3 id="chartHeader">favorite dishes</h3>
    <ResponsiveContainer width="100%" aspect={2}>
     <BarChart data= {barChartData} id="barChartData">
       <CartesianGrid strokeDasharray="2 2"/>
       <Tooltip />
       <Bar dataKey="likes" fill="#25335a" />
       <XAxis dataKey ="dish"  interval="preserveStartEnd"/>
       <YAxis />
       <Legend />
     </BarChart>
    </ResponsiveContainer>
  </React.Fragment></div>
   
   
    );
}
export default Stats