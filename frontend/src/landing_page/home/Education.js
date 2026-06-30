import React from 'react';

function Education() {
    return ( 
   
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <img src='media/Images/education.svg' />
                </div>
                <div className='col-6 mt-5'>
                    <h1 className='fs-3 mb-3 text-muted'>Free and open market education</h1>
                    <p className=' mt-5 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    
                     <a href=''  style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className='mt-5 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    
                    <a href=''  style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>

                </div>
            </div>
        </div>
 );
}

export default Education;