import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
          <div className='navbar'>
              <img className='img' src="https://tse2.mm.bing.net/th?id=OIP.WsN0A5herGM-ZmVXLanACQHaHa&pid=Api&P=0&h=220" />
               <Link  to="/general">General</Link>
               <Link  to="/business">Business</Link>
               <Link  to="/entertainment"> Entertainment</Link>
               <Link  to="/health">Health</Link>
               <Link  to="/science">Science</Link>
               <Link  to="/sports"> Sports</Link>
               <Link  to="/technology">Technology</Link>
               <input type='text' placeholder='search news'/>
               <button className='btn btn-success'>search</button>
          </div>
      </>
    )
  }
}