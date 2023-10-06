import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();

    return (
        <div style={{
            flexGrow: 1,
            height: '100%',
        }}>
            <Grid container
                style={{
                    backgroundColor: 'rgba(17, 236, 157, 0.16)',
                    borderRadius: '0 0 400px 0',
                    marginTop: '10px',
                    height: '450px'
                }}>
                <Grid item xs={12} md={6} elevation={3} >
                    <Typography variant="h2" style={{
                        fontSize: '45px',
                        padding: '40px',
                        width: '500px',
                        lineHeight: '60px',
                        marginLeft: '150px',
                    }}>
                        Your <span className="text-success">Certificates</span>, Our{' '}
                        <span className="text-success">Assurance</span>, Welcome to the{' '}
                        <span className="text-success">Future</span>
                    </Typography>
                    <div style={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            onClick={() => navigate('#create-certificate')}
                        >
                            Get Certified
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '100%',
                }}>
                    <img
                        src="/images/hero-img.png"
                        alt=""
                        style={{
                            maxHeight: '450px',
                            borderRadius: '0 0 400px 0',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container-about style={{
                padding: '80px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Grid item xs={12} md={6} elevation={3} >
                    <div style={{
                        backgroundColor: 'rgba(17, 236, 157, 0.16)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50px',
                        height: '300px',
                        width: '500px',
                        lineHeight: '50px',
                    }}>
                        <Typography variant="h2" style={{
                            fontSize: '30px',
                        }}>
                            Birth Certificates
                        </Typography>
                        <Typography variant="p" style={{
                            marginBottom: '10px',
                            fontSize: '18px',
                        }}>
                            Create your Birth Certificate here
                        </Typography>
                        <div style={{ marginTop: '10px' }}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => navigate('/create-birth-certificate')}
                            >
                                Birth Certificate
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img
                        src="/images/about-img1.png"
                        alt=""
                        style={{
                            width: '400px',
                            height: '300px',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container-about style={{
                padding: '80px',
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Grid item xs={12} md={6} elevation={3} >
                    <div style={{
                        backgroundColor: 'rgba(17, 236, 157, 0.16)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50px',
                        height: '300px',
                        width: '500px',
                        lineHeight: '50px',
                    }}>
                        <Typography variant="h2" style={{
                            fontSize: '30px',
                        }}>
                            Degree Certificates
                        </Typography>
                        <Typography variant="p" style={{
                            marginBottom: '10px',
                            fontSize: '18px',
                        }}>
                            Create your Degree Certificate here
                        </Typography>
                        <div style={{ marginTop: '10px' }}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => navigate('/create-degree-certificate')}
                            >
                                Degree Certificate
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img
                        src="/images/about-img2.png"
                        alt=""
                        style={{
                            width: '400px',
                            height: '300px',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container-about style={{
                padding: '80px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Grid item xs={12} md={6} elevation={3} >
                    <div style={{
                        backgroundColor: 'rgba(17, 236, 157, 0.16)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50px',
                        height: '300px',
                        width: '500px',
                        lineHeight: '50px',
                    }}>
                        <Typography variant="h2" style={{
                            fontSize: '30px',
                        }}>
                            Property Certificates
                        </Typography>
                        <Typography variant="p" style={{
                            marginBottom: '10px',
                            fontSize: '18px',
                        }}>
                            Create your Property Certificate here
                        </Typography>
                        <div style={{ marginTop: '10px' }}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => navigate('/create-property-certificate')}
                            >
                                Property Certificate
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img
                        src="/images/about-img3.png"
                        alt=""
                        style={{
                            width: '400px',
                            height: '300px',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Homepage;
