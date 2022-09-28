import React from 'react'
import '../../../styles/footer.scss';


export const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row d-flex text-center my-4  contact">
                <div className="col-6">
                    <h3 className='tittle-footer'>Vinitos Pa!</h3>
                </div>
                <div className="col-6">
                    <input type="text" placeholder='Enter your e-mail'/>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-3">
                    <h4>ABOUT US</h4>
                    <div className="line"></div>
                    <ul className='my-4'>
                        <li> <a href="">About us</a>  </li>
                        <li> <a href="">Privacy</a>  </li>
                        <li> <a href="">Public realtions</a>  </li>
                        <li> <a href="">Contact</a>  </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h4>CUSTOM CARE</h4>
                    <div className="line"></div>
                    <ul className='my-4'>
                        <li> <a href="">FAQ</a>  </li>
                        <li> <a href="">Delivery info</a>  </li>
                        <li> <a href="">Returns</a>  </li>
                        <li> <a href="">Payment</a>  </li>
                    </ul>
                </div>

                <div className="col-3">
                    <h4>OPEN HOURS</h4>
                    <div className="line"></div>
                    <ul className='d-flex flex-wrap p-3'>
                        <li className=' open-li'> <a href="">Mon - Thu:</a>   </li>
                        <li className='li-fixed  open-li'> <a href="">8:00 AM - 7:00 PM</a>  </li>
                        <li className=' open-li'> <a href="">Fri - Sat:</a>   </li>
                        <li className='li-fixed open-li'> <a href="">8:00 AM - 2:00 AM</a>  </li>
                        <li className=' open-li'> <a href="">Sun:</a>   </li>
                        <li className='li-fixed open-li'> <a href="">Closed</a>  </li>
                    </ul>
                    <button className='btn-footer'> SEE MORE </button>
                </div>

                <div className="col-3">
                    <h4>CONTACT</h4>
                    <div className="line"></div>
                    <ul className='my-4'>
                        <li> <a href="">OneTaste</a>  </li>
                        <li> <a href="">Opera Street 172</a>  </li>
                        <li className='mb-4'> <a href="">Sydney, Australia</a>    </li>
                        <li className='email-fixed'> <a href="">contact@onetaste.com.au</a>    </li>
                        <li className='li-fixed'> <a href="">123123123123123123</a>  </li>
                    </ul>
                </div>
            </div>
        </div>
            <div className="row footer-fixed">
              
                    <h3 className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, minus!</h3>
            </div>
    </footer>
  )
}
