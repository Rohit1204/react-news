  
import React, { Component } from 'react';
import axios from 'axios';
import "./GetCalculator.css";

class GetCalculator extends Component {
  constructor(props){
    super(props);
    this.state  = {
      isopen:false,
      ISIN: "",
      Price:0,
      bonds:0,
      stdate:"",
      face_value_current:0,
      face_value_original:0,
      quantum:0,
      last_IP_date:"",
      accured_interest_days:0,
      accued_interest:0,
      principal_amount:0,
      settlement_amount:0
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSUbmit=this.handleSUbmit.bind(this);

  }

  handleChange=(e)=> {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value});
    console.log(this.state.ISIN)
    console.log(this.state.Price)
    console.log(this.state.bonds)
    
}
handleSUbmit=(e)=>{
  const url ='http://13.233.124.3/Common/BondService.asmx/Get_Settl_Calc';
    const   bodyData  =  {
      "ISIN": this.state.ISIN,
      "Price": this.state.Price,
      "ValueDate": this.state.stdate, 
      "No_Of_Bonds": this.state.bonds
    }
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      "Content-Type" : "application/json"
    };
    axios
    .post(url,bodyData,headers)
    .then((resp) => {
      
      var val=JSON.parse(resp.data.d)
            
      var value= (resp.data.d).split(',')
      console.log(value)
    const pa=val[0]['OUTPUT'][0]['data'][0]['Principal_Amount']
    const aid=val[0]['OUTPUT'][0]['data'][0]['Accrued_Interest_Days']
    const sa=val[0]['OUTPUT'][0]['data'][0]['Settlment_Amount']
    const ai=val[0]['OUTPUT'][0]['data'][0]['Accrued_Interest']
    const sd=val[0]['OUTPUT'][0]['data'][0]['Stamp_Duty']
    const CA=val[0]['OUTPUT'][0]['data'][0]['Consideration_Amount']
    const fvc=val[0]['OUTPUT'][0]['data'][0]['FaceValue_Current']
    const fvo=val[0]['OUTPUT'][0]['data'][0]['FaceValue_Original']
    const q=val[0]['OUTPUT'][0]['data'][0]['Quantum']
    const lid=val[0]['OUTPUT'][0]['data'][0]['LastIp_Date']

      
      let dict=[]
    


  
      
    
      
      // JSON.parse(JSON.stringify(resp.data.d)).map(feature=>{
      //   let dict = {name:feature[0],isActive:Boolean(feature[1])}
      //   data.push(dict)        
      // })
     //const posts = JSON.parse(resp.data.body);
    // console.log(posts)
     this.setState({ face_value_current:fvc,face_value_original:fvo,quantum:q,last_IP_date:lid,accured_interest_days:aid,accued_interest:ai,principal_amount:pa,settlement_amount:sa,isopen:!this.state.isopen});
    })
    .catch((error) => {
      // this.setState({ error, isLoading: false })
      console.log(error);
    });
}

  // componentDidMount() {
  //   const url ='http://13.233.124.3/Common/BondService.asmx/Get_Settl_Calc';
  //   const   bodyData  =  {
  //     "ISIN": this.state.ISIN,
  //     "Price": 100,
  //     "ValueDate": '2020-06-27', 
  //     "No_Of_Bonds": 10
  //   }
  //   const headers = {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  //     "Content-Type" : "application/json"
  //   };
  //   axios
  //   .post(url,bodyData,headers)
  //   .then((resp) => {
      
  //     var value= (resp.data.d).split(',')
  //     console.log(value)
  //     const fvc=value[3].slice(20,27)
  //    const fvo=value[2].slice(30,37)
  //    const q=value[4].slice(10,19)
  //    const lid=value[5].slice(15,25)
  //    const aid=value[6].slice(24,26)
  //    const ai=value[8].slice(19,28)
  //    const pa=value[7].slice(19,27)
  //    const sa=value[9].slice(19,30)

      
  //     let dict=[]
    


  
      
    
      
  //     // JSON.parse(JSON.stringify(resp.data.d)).map(feature=>{
  //     //   let dict = {name:feature[0],isActive:Boolean(feature[1])}
  //     //   data.push(dict)        
  //     // })
  //    //const posts = JSON.parse(resp.data.body);
  //   // console.log(posts)
  //    this.setState({ face_value_current:fvc,face_value_original:fvo,quantum:q,last_IP_date:lid,accured_interest_days:aid,accued_interest:ai,principal_amount:pa,settlement_amount:sa});
  //   })
  //   .catch((error) => {
  //     // this.setState({ error, isLoading: false })
  //     console.log(error);
  //   });
  // }
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
  <label for="PRice">Price:</label>
  <input type="text" id="price" name="Price" onChange={this.handleChange}/><br/>
  <label for="Bonds">NO. of bonds:</label>
  <input type="text" id="bonds" name="bonds" onChange={this.handleChange}/><br/>
  <label for="Settlement date">SETTLEMENT DATE:</label>
  <input type="text" id="sdate" name="stdate" onChange={this.handleChange}/><br/>
  <button type="submit" onClick={this.handleSUbmit}> submit </button>
  {open?
        <table>
        <tr>
    <th>face value current</th>
    <th>Face value original </th>
    <th>quantum</th>
    <th>Last ip date</th>
    <th>accured interest days</th>
    <th>accured interest</th>
    <th>principal amount</th>
    <th>settlement date</th>
  </tr>
  <tr>
    <td>{this.state.face_value_current}</td>
    <td>{this.state.face_value_original}</td>
    <td>{this.state.quantum}</td>
    <td>{this.state.last_IP_date}</td>
    <td>{this.state.accured_interest_days}</td>
    <td>{this.state.accued_interest}</td>
    <td>{this.state.principal_amount}</td>
    <td>{this.state.settlement_amount}</td>
  </tr>
        </table>:void(0)}
        <div className="footer">
  {/* {this.renderTableData()} */}

        </div>
      </div>
    );
  }
}

export default GetCalculator;