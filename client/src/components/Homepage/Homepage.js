import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    const [totalVisitors, setTotalVisitors] = useState(0);
    const [certificatesGenerated, setCertificatesGenerated] = useState(0);
    const [certificatesValidated, setCertificatesValidated] = useState(0);

    const finalTotalVisitors = 1856;
    const finalCertificatesGenerated = 1531;
    const finalCertificatesValidated = 1293;

    useEffect(() => {
        const updateCounter = (current, target, setter) => {
            if (current < target) {
                setTimeout(() => {
                    setter(current + 1);
                    updateCounter(current + 5, target, setter);
                }, 1);
            }
        };

        updateCounter(0, finalTotalVisitors, setTotalVisitors);
        updateCounter(0, finalCertificatesGenerated, setCertificatesGenerated);
        updateCounter(0, finalCertificatesValidated, setCertificatesValidated);
    }, []);


    return (
        <div className="container-fluid"
            style={{
                height: '100%'
            }}
        >
            <section className='part-1'>
                <div
                    className="row"
                    style={{
                        backgroundColor: 'rgba(17, 236, 157, 0.16)',
                        borderRadius: '0 0 400px 0',
                        marginTop: '10px',
                        height: '450px',
                    }}
                >
                    <div className="col-md-6">
                        <h2
                            style={{
                                fontSize: '45px',
                                padding: '40px',
                                width: '500px',
                                lineHeight: '60px',
                                marginLeft: '150px',
                            }}
                        >
                            Your <span className="text-success">Certificates</span>, Our{' '}
                            <span className="text-success">Assurance</span>, Welcome to the{' '}
                            <span className="text-success">Future</span>
                        </h2>
                        <div
                            style={{
                                marginTop: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Link to="/create-certificate" className="btn btn-success btn-lg">
                                Get Certified
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6" style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding: '0px',
                    }}>
                        <img
                            src="/images/hero-img.png"
                            alt=""
                            style={{
                                maxHeight: '450px',
                                borderRadius: '0 0 400px 0',
                            }}
                        />
                    </div>
                </div>
            </section>
            <section className='part-2'>
                <div
                    className="row"
                    style={{
                        padding: '80px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <div className="col-md-6"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(17, 236, 157, 0.16)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50px',
                                height: '300px',
                                width: '500px',
                                lineHeight: '50px',
                            }}
                        >
                            <h2 style={{ fontSize: '30px' }}>Birth Certificates</h2>
                            <p style={{ marginBottom: '10px', fontSize: '18px' }}>
                                Create your Birth Certificate here
                            </p>
                            <div style={{ marginTop: '10px' }}>
                                <Link to="/create-birth-certificate" className="btn btn-success">
                                    Birth Certificate
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <img
                            src="/images/about-img1.png"
                            alt=""
                            style={{
                                width: '400px',
                                height: '300px',
                            }}
                        />
                    </div>
                </div>
                <div
                    className="row"
                    style={{
                        padding: '80px',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <div className="col-md-6"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}>
                        <div
                            style={{
                                backgroundColor: 'rgba(17, 236, 157, 0.16)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50px',
                                height: '300px',
                                width: '500px',
                                lineHeight: '50px',
                            }}
                        >
                            <h2 style={{ fontSize: '30px' }}>Degree Certificates</h2>
                            <p style={{ marginBottom: '10px', fontSize: '18px' }}>
                                Create your Degree Certificate here
                            </p>
                            <div style={{ marginTop: '10px' }}>
                                <Link to="/create-degree-certificate" className="btn btn-success">
                                    Degree Certificate
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}>

                        <img
                            src="/images/about-img2.png"
                            alt=""
                            style={{
                                width: '400px',
                                height: '300px',
                            }}
                        />
                    </div>
                </div>
                <div
                    className="row"
                    style={{
                        padding: '80px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <div className="col-md-6"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}>
                        <div
                            style={{
                                backgroundColor: 'rgba(17, 236, 157, 0.16)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50px',
                                height: '300px',
                                width: '500px',
                                lineHeight: '50px',
                            }}
                        >
                            <h2 style={{ fontSize: '30px' }}>Property Certificates</h2>
                            <p style={{ marginBottom: '10px', fontSize: '18px' }}>
                                Create your Property Certificate here
                            </p>
                            <div style={{ marginTop: '10px' }}>
                                <Link
                                    to="/create-property-certificate"
                                    className="btn btn-success"
                                >
                                    Property Certificate
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}>
                        <img
                            src="/images/about-img3.png"
                            alt=""
                            style={{
                                width: '400px',
                                height: '300px',
                            }}
                        />
                    </div>
                </div>
            </section>
            <section className='part-3'>
                <div
                    className="row"
                    style={{
                        backgroundColor: 'rgba(71, 190, 185, 0.4)',
                        borderRadius: '100px 0 100px 0',
                        marginTop: '10px',
                        height: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        className="row"
                        style={{
                            backgroundColor: 'rgba(249, 249, 249, 1)',
                            borderRadius: '0 50px 0 50px',
                            marginTop: '30px',
                            height: '60px',
                            width: '600px',
                        }}
                    >
                        <p
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '25px',
                            }}
                        >Secure And Validate Your Certificate</p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <div
                            className='col-md-6'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',

                            }}
                        >
                            <img
                                src="/images/about-img4.png"
                                alt=""
                                style={{
                                    width: '400px',
                                    height: '350px',
                                    padding: '20px',
                                }}
                            />
                        </div>
                        <div
                            className='col-md-6'
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                padding: '20px',
                            }}
                        >
                            <Link to="/secure-certificate" className="btn btn-success btn-lg">
                                Secure Certificate
                            </Link>
                            <Link to="/validate-certificate" className="btn btn-success btn-lg">
                                Validate Certificate
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='part-4'>
                <div
                    className="row"
                    style={{
                        // backgroundColor: 'rgba(71, 190, 185, 0.4)',
                        // borderRadius: '100px 0 100px 0',
                        marginTop: '10px',
                        height: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >

                </div>
            </section>
            <section>
                <div
                    className="row"
                    style={{
                        backgroundColor: 'rgba(17, 236, 157, 0.1)',
                        borderRadius: '50px',
                        height: '300px',
                        fontSize: '30px',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        marginTop: '10px',
                    }}>
                    <div
                        className="col-md-4"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '40px',
                            padding: '20px',
                        }}>
                        <h2 style={{
                            color: 'rgba(17, 236, 78, 1)',
                        }}>Total Visitors</h2>
                        <p>{totalVisitors}+</p>
                    </div>
                    <div
                        className="col-md-4"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '40px',
                            padding: '20px',
                        }}>
                        <h2 style={{
                            color: 'rgba(17, 236, 78, 1)',
                        }}>Certificates Generated</h2>
                        <p>{certificatesGenerated}+</p>
                    </div>
                    <div
                        className="col-md-4"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '40px',
                            padding: '20px',
                        }}>
                        <h2 style={{
                            color: 'rgba(17, 236, 78, 1)',
                        }}>Certificates Validated</h2>
                        <p>{certificatesValidated}+</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
