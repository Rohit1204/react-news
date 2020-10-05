import React, { Component } from 'react';
import axios from 'axios';


class SourceSelection extends Component {
  constructor(props){
    super(props);
    this.state  = {
      isopen:false,
      ISIN: "",
      Yield:0,
      stdate:"",
      accured_interest:0,
      YTC:0,
      YTM:0,
      cashflow_ytc:null,
      cashflow_ytm:null,
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSUbmit=this.handleSUbmit.bind(this);
  }

  handleChange=(e)=> {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value});
    console.log(this.state.ISIN)
    console.log(this.state.Yield)
    
}
handleSUbmit=(e)=>{
  const url ='http://13.233.124.3/Common/BondService.asmx/Y2P';
  const   bodyData  =  {
    "ISIN": this.state.ISIN,
    "Yield": this.state.Yield,
    "ValueDate": this.state.stdate, 
    "Generate_CashFlow": 0

  }
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    "Content-Type" : "application/json"
  };
  axios
  .post(url,bodyData,headers)
  .then((resp) => {
    
    var value= (resp.data.d).split(',')
    console.log(value)
  //   const fvc=value[3].slice(20,27)
  //  const fvo=value[2].slice(30,37)
      const ytc=value[3].slice(7,14)
     const ytm=value[5].slice(7,14)
   const cytc=value[6].slice(15,19)
   const cytm=value[4].slice(15,19)
       const ai=value[2].slice(25,41)
       console.log(ytc)
       console.log(cytc)
       console.log(cytm)


  //  const pa=value[7].slice(19,27)
  //  const sa=value[9].slice(19,30)

    
    // let dict=[]
  



    
  
    
    // JSON.parse(JSON.stringify(resp.data.d)).map(feature=>{
    //   let dict = {name:feature[0],isActive:Boolean(feature[1])}
    //   data.push(dict)        
    // })
   //const posts = JSON.parse(resp.data.body);
  // console.log(posts)
   this.setState({accured_interest:ai,YTC:ytc,YTM:ytm,cashflow_ytc:cytc,cashflow_ytm:cytm,isopen:!this.state.isopen});
  })
  .catch((error) => {
    // this.setState({ error, isLoading: false })
    console.log(error);
  });
}

  componentDidMount() {
   
  }
  // renderTableData() {
  //   const Rohit = JSON.stringify(this.state.data);
  //   // console.log(Shivam.length)
  //   return Rohit.map((student,index) => {
  //     <li key={index} data={student} />

  //       })}
  render() {
    const open=this.state.isopen;
    return (
      <div className="container">
        <label for="ISIN">ISIN:</label>
  <input type="text" id="ISIN" name="ISIN" onChange={this.handleChange}/><br/>
  <label for="PRice">Yield:</label>
  <input type="text" id="yield" name="Yield" onChange={this.handleChange}/><br/>
  <label for="Settlement date">SETTLEMENT DATE:</label>
  <input type="text" id="sdate" name="stdate" onChange={this.handleChange}/><br/>
  <button type="submit" onClick={this.handleSUbmit}> submit </button>
     {open?  <table>
        <tr>
    <th>Accured Interest</th>
    <th>YTM </th>
    <th>YTC</th>
    <th>cashflow ytc</th>
    <th>cashflow ytm</th>
  </tr>
  <tr>
    <td>{this.state.accured_interest}</td>
    <td>{this.state.YTC}</td>
    <td>{this.state.YTM}</td>
    <td>{this.state.cashflow_ytc}</td>
    <td>{this.state.cashflow_ytm}</td>
  </tr>
        </table>:void(0)}
        <div className="footer">
  {/* {this.renderTableData()} */}

        </div>
      </div>
    );
  }
}

export default SourceSelection;