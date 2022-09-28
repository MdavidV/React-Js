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
                        <Link   to='/products' className='anchor-nav' >HOME PAGE</Link>
                        <Link   to='/products' className='anchor-nav'>SHOP</Link>
                        <Link   to='/products' className='anchor-nav' >BLOG</Link>
                    </nav>

                </div>
                <div className="col-3 mt-4">
                    <h2>logo</h2>
                </div>
            </div>

            <div className="row tittle-cont">
                <div className="col-8">
                    <h1>We can help you buy <br /> best wines </h1>
                    <div className="line l-header"></div>
                    <p>The best wines from Sutamarchan</p>

                    <div className="btns-header">
                            <Link   to='/products' className='anchor-nav' > DISCOVER WINES </Link>
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
