import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/newheader.scss';



export const Newmain = () => {
  return (
    <div className='first-view'>
        <div className="container">
            <div className="row">
                <div className="col-9 mt-4">
                    <nav>
                        <a className='anchor-nav' >HOME PAGE</a>
                        <a className='anchor-nav' >SHOP</a>
                        <a className='anchor-nav' >BLOG</a>
                    </nav>

                </div>
                <div className="col-3 mt-4">
                    <h1>logo</h1>
                </div>
            </div>

            <div className="row tittle-cont">
                <div className="col-8">
                    <h2>We can help you buy <br /> best wines </h2>
                    <div className="line l-header"></div>
                    <p>The best wines from Sutamarchan</p>

                    <div className="btns-header">
                            <a className='btn-header' > DISCOVER WINES </a>
                            <a className='btn-header-white' >SUPPORT HELP</a>
                    </div>

                    <div className="col">

                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}
