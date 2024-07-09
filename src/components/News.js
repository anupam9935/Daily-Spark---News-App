import React, { Component } from 'react'
import NavItem from './NavItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class news extends Component {
  static defaultProps={
    country:'in'
  }
  static propTypes={
      country: PropTypes.string
  }
   articles= [];
  // capitalizeFirstLetter=(string)=> {
  //     return string.charAt(0).toUpperCase() + string.slice(1);
  // }
   constructor(props){
    super();
    this.state={
      articles:this.articles,
      loading: false,
      page:1,
      ct:1
    }
    // document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
   }
   async componentDidMount(){
    this.setState({
      loading:true
     }) 
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0037fcb263794ce99980d1d441101168&page=1&pageSize=6`;
       let data= await fetch (url);
       data= await data.json();
       this.setState({articles : data.articles,
           ct:data.totalResults,
           loading: false
       });
       
   }
   handlePrevClick=async()=>{
       this.setState({
        loading:true
       })  
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0037fcb263794ce99980d1d441101168&page=${this.state.page-1}&pageSize=6`;
      let data= await fetch (url);
      data= await data.json();
    this.setState({
      page:this.state.page-1,
      articles : data.articles,
      loading: false
    })
   }
  handleNextClick=async()=>{
    this.setState({
      loading:true
     })  
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0037fcb263794ce99980d1d441101168&page=${this.state.page+1}&pageSize=6`;
    let data= await fetch (url);
    data= await data.json();
   this.setState({
     page:this.state.page+1,
     articles : data.articles,
     loading: false

   })
  
  }
   // sabse pahle {constructor} run hota hai fir {render} vala part then {componentDidMount} 
  render() {
    return (
      <div className='container  my-3'>
      <h1 className='text-center'>GlobalWatch News Top-Headlines</h1>
      {this.state.loading && <Spinner/>}
      <div className='row'>
 
          {this.state.loading===false && this.state.articles.map((e)=>{
            if(e.description!=null && e.title!=null){
                return  <div className='col  md-4' key={e.url}>
                    <NavItem  title={e.title} description ={e.description}  
                    imgUrl={e.urlToImage=="https://www.theweek.in/etc/designs/week/img/logo-main.png"?"https://ichef.bbci.co.uk/news/1024/branded_news/883b/live/95b06ea0-32d7-11ef-bdc5-41d7421c2adf.png":e.urlToImage}
                        n={e.url} author={e.author==null?"unknown" : e.author} date={e.publishedAt.slice(0,10)}
                     /> 
                </div>   
            }    
          })}
          <div className="d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePrevClick}>&larr; previous</button>
              <button disabled={this.state.page>=Math.ceil(this.state.ct/6)} type="button" className="btn btn-info" onClick={this.handleNextClick}>next &rarr; </button>    
          </div>
                                                                                                                                                                                                                                                                                                    
      </div>       
        
      </div>
    )
  }
}
