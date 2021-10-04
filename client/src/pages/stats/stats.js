import React from "react";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar} from "recharts";
import './stats.css';


const barChartData = [
  {
    subject: "React js",
    topics: 50,
    fees: 120
  },
  {
    subject: "CSS",
    topics: 75,
    fees: 20
  },
  {
    subject: "javaScript",
    topics: 65,
    fees: 140
  },
  {
    subject: "HTML",
    topics: 90,
    fees: 40
  
  },
  {
    subject: "Node.js",
    topics: 70,
    fees : 150
  },
  {
    subject: "python",
    topics: 250,
    fees: 180
  }
];
function Stats(){
    return (
    <div className="chartcontainer" > 
      <React.Fragment>
    <h3 id="chartHeader">like button stats</h3>
    <ResponsiveContainer width="100%" aspect={2}>
     <BarChart data= {barChartData} margin={{left:50, right:50, top:80, bottom:80}}>
       <CartesianGrid strokeDasharray="2 2"/>
       <Tooltip />
       <Bar dataKey="fees" fill="red" />
       <Bar dataKey="topics" fill="green" />
       <XAxis dataKey ="subject"  interval="preserveStartEnd" tickFormatter={(value)=> value+" Language"}/>
       <YAxis />
       <Legend />
     </BarChart>
    </ResponsiveContainer>
  </React.Fragment></div>
   
   
    );
}
export default Stats