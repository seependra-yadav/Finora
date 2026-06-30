import React from 'react';

function Pricing() {
    return (

        <div className='container my-5'>
            <div className='row align-items-center'>

                {/* LEFT SIDE */}
                <div className='col-md-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href='' style={{ textDecoration: "none" }}>See pricing →</a>
                </div>

                <div className='col-md-2'></div>

                {/* RIGHT SIDE (3 ITEMS IN ONE ROW) */}
                <div className='col-md-6'>
                    <div className='row text-center'>

                        {/* ITEM 1 */}
                        <div className='col-4 d-flex align-items-center justify-content-center'>
                            <img
                                src='media/Images/pricing-eq.svg'
                                className='img-fluid me-2'
                                style={{ width: "80px" }}
                            />
                            <p className='mb-0 text-start'>
                                Free account <br /> opening
                            </p>
                        </div>

                        {/* ITEM 2 */}
                        <div className='col-4 d-flex align-items-center justify-content-center'>
                            <img
                                src='media/Images/pricing-eq.svg'
                                className='img-fluid me-2'
                                style={{ width: "80px" }}
                            />
                            <p className='mb-0 text-start'>
                                Free equity delivery <br /> and direct mutual funds
                            </p>
                        </div>

                        {/* ITEM 3 */}
                        <div className='col-4 d-flex align-items-center justify-content-center'>
                            <img
                                src='media/Images/trade-20.svg'
                                className='img-fluid me-2'
                                style={{ width: "80px" }}
                            />
                            <p className='mb-0 text-start'>
                                Intraday and <br /> F&amp;O
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;