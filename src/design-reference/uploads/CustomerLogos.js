import React, { lazy } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
// Import customer logos with original paths
import alz_dimentia from '../../../assets/images/landing/customerLogos/alz_dimentia.png';
import molaalogo from '../../../assets/images/landing/customerLogos/molaalogo.png';
import centerstagelogo from '../../../assets/images/landing/customerLogos/centerstage_logo_site.png';
import mhwss_logo from '../../../assets/images/landing/customerLogos/MHWSS_logo.png';
import hospice_logo from '../../../assets/images/landing/customerLogos/hospice_northidahologo.png';
import missionhall_logo from '../../../assets/images/landing/customerLogos/Logo_MBA_hor_RGB.png';
import italian_festival from '../../../assets/images/landing/customerLogos/italian_festival.png';
import dsorc_logo from '../../../assets/images/landing/customerLogos/dsorc_logo.png';
import habitat_logo from '../../../assets/images/landing/customerLogos/habitat_logo.png';
import KWMClogo from '../../../assets/images/landing/customerLogos/KWMClogo.png';
import golf_canada from '../../../assets/images/landing/customerLogos/golf-canada_logo.png';
import ronaldmacdonaldlogo from '../../../assets/images/landing/customerLogos/ronaldmacdonaldlogo.png';
import volleyballcanadaimage from '../../../assets/images/landing/customerLogos/volleyballcanadaimage.jpeg';
import MaltaRedCross from '../../../assets/images/landing/customerLogos/MaltaRedCross.png';
import maltanew from '../../../assets/images/landing/customerLogos/mrc-logo-horizontal.svg'

const Slider = lazy(() => import("react-slick"));

// Create css 
const useStyles = makeStyles((theme) => ({
    container: {
        // background: '#f3f3f3',
        // padding: '0 10% 0 10%'
    },
    logoTitle: {

    },
    imageStyle: {
        width: '96px',
        height: '96px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '24px',
        borderRadius: '50%',
        border: '1px solid #ececec',
        background: '#fff',
        padding: '14px',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            width: '84px',
            height: '84px',
            padding: '12px',
            marginRight: '18px',
        },
    },
    logoImage: {
        width: '92%',
        height: '92%',
        objectFit: 'contain',
    },
    logoImageLarge: {
        width: '108%',
        height: '108%',
        objectFit: 'contain',
    },
    logoImageXLarge: {
        width: '120%',
        height: '120%',
        objectFit: 'contain',
    },
    logoImageSmall: {
        width: '78%',
        height: '78%',
        objectFit: 'contain',
    },
    logoImageVolleyball: {
        width: '72%',
        height: '72%',
        objectFit: 'contain',
    },
    // sliderTera: {
    //     margin: 'auto',
    //     width: '190px',
    //     marginTop: '0px',
    //     [theme.breakpoints.up("xl")]: {
    //         width: '190px',
    //         marginTop: '0px',
    //     },
    //     [theme.breakpoints.down("xs")]: {
    //         width: '138px',
    //         marginTop: '0px',
    //     },
    // },
    // sliderImgFest: {
    //     margin: 'auto',
    //     marginTop: '0px',
    //     width: '170px',
    //     [theme.breakpoints.up("xl")]: {
    //         width: '138px',
    //     },
    //     [theme.breakpoints.down("xs")]: {
    //         width: '138px',
    //         marginTop: '0px',
    //     },
    // },
    // sliderImgDsorc: {
    //     width: '150px',
    //     margin: 'auto',
    //     [theme.breakpoints.up("xl")]: {
    //         width: '139px',
    //         // marginTop: '-14px',
    //     },
    // },
    // sliderImgMed: {
    //     marginTop: '-15px',
    //     width: '185px',
    //     margin: 'auto',
    //     [theme.breakpoints.up("xl")]: {
    //         width: '150px',
    //         marginTop: '-15px',
    //         // marginTop: '-14px',
    //     },
    // },
    // slickSlide: {
    //     marginRight: '40%'
    // },
    // slickOuter: {
    //     height:'max-content',
    //     '& .slick-initialized .slick-slide': {
    //         width: '230px !important',
    //     },
    //     '& .slick-initialized .slick-list': {
    //         padding: 10,
    //     },
    //     //   '& .slick-initialized .slick-track': {
    //     //     width: '100%'
    //     //   }
    // },
    headerPartners: {
        fontFamily: ' montserrat',
        color: 'rgba(0,0,0,0.7)',
        fontWeight: 600,
        padding: '25px 10% 25px 10%',
        paddingBottom: '20px',
        textAlign: 'center',
        fontSize: 18,
        [theme.breakpoints.up("xl")]: {
            padding: '20px 10% 15px 10%'
        },
    },
}));


const CustomerLogos = ({
    t,
}) => {
    const classes = useStyles();




    return (
        <div className={classes.container}>
            <Typography className={classes.headerPartners}>
                {t('trusted_by_amazing_orgs')}
            </Typography>
            <div className={`${classes.marqueeContainer} ${classes.slickOuter}`}>
                <Marquee
                    direction="left"
                    speed={40}
                    loop={0}
                >
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImage} src={molaalogo} alt="molaalogo" loading="lazy" />
                    </div>
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImage} src={habitat_logo} alt="habitat_logo" loading="lazy" />
                    </div>
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImageLarge} src={golf_canada} alt="golf_canada" loading="lazy" />
                    </div>         
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImageSmall} src={maltanew} alt="red_cross" loading="lazy" />
                    </div>                                 
                    <div className={classes.imageStyle}>
                        <img src={ronaldmacdonaldlogo} className={classes.logoImage} alt="rmhc_logo" loading="lazy" />
                    </div>    
                    <div className={classes.imageStyle}>
                        <img src={volleyballcanadaimage} className={classes.logoImageVolleyball} alt="volleyballcanada_logo" loading="lazy" />
                    </div>    
                                
                    {/* <div className={classes.imageStyle}>
                        <img className={classes.sliderImg} src={hospice_logo} alt="hospice_logo" />
                    </div > */}
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImageLarge} src={missionhall_logo} alt="missionhall_logo" loading="lazy" />
                    </div>
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImageXLarge} src={KWMClogo} alt="KWMClogo" loading="lazy" />
                    </div>
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImage} src={italian_festival} alt="italian_festival" loading="lazy" />
                    </div>
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImage} src={dsorc_logo} alt="dsorc_logo" loading="lazy" />
                    </div>
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImageLarge} src={centerstagelogo} alt="centerstagelogo" loading="lazy" />
                    </div >
                    <div className={classes.imageStyle}>
                        <img src={mhwss_logo} className={classes.logoImageXLarge} alt="mhwss_logo" loading="lazy" />
                    </div>
                    <div className={classes.imageStyle}>
                        <img className={classes.logoImage} src={alz_dimentia} alt="alz_dimentia" loading="lazy" />
                    </div>

                </Marquee>
            </div>
        </div>
    );
};



export default (withTranslation()(CustomerLogos));