import React from 'react';

function Awards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/Images/largestBroker.svg' />

                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Stock in India</h1>
                    <p className='mb-5'>
                        “India’s leading stock broker empowering over 1.5 crore investors with low-cost, technology-driven trading and investment solutions.
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Future and Oprtions</p>
                                </li>
                                <li>
                                    <p> Commodity dervivativs</p>
                                </li>
                                <li>
                                    <p>Crrency Derivatives</p>
                                </li>
                            </ul>

                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks and IPO</p>
                                </li>
                                <li>
                                    <p> Direct mutual Funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Gov Securities</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <img src='media\Images\pressLogos.png' style={{width:"90%"}}/>


                </div>
            </div>

        </div>
    );
}

export default Awards;