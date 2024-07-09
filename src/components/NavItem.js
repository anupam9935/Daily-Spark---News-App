import React, { Component } from 'react'

export default class NavItem extends Component {
 
  render() {
    let {title , description ,imgUrl ,n,author,date}=this.props
    return (
      <div className="card " style={{width : "18rem"}} >
      <img src={imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}<span class="badge text-bg-success">new</span></h5>
        <p className="card-text">{description}</p>
        <p class ="card-text"><small className='text-muted'>By {author} on {date}</small></p>
        <a href={n} target='_blank' className="btn btn-sm btn-dark">Read More...</a>
      </div>
    </div>
    )
  }
}
