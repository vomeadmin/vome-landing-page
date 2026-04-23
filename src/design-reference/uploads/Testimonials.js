import React, { useState, useEffect, Component } from "react";
import {
	makeStyles,
	Grid,
	Typography,
  Hidden,
} from "@material-ui/core";
import Box from '@mui/material/Box';
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { connect } from "react-redux";
import { withTranslation, useTranslation } from "react-i18next";
import compliance_image from '../../../assets/images/landing/compliance_image.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GiTicket } from 'react-icons/gi'
import { BsFillChatDotsFill, BsPersonLinesFill } from 'react-icons/bs';
import gia_photo from '../../../assets/images/landing/gia_mannone.png';
import alz_logo from '../../../assets/images/landing/customerLogos/alz_dimentia.png';
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
import rochesterlogo from '../../../assets/images/landing/customerLogos/rochesterlogo.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#fafafa',
    padding: '0% 10% 8% 10%',
    position: 'relative',
    [theme.breakpoints.only('md')]: {
      padding: '8% 0%'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '15%',
      padding: '0% 2%',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0% 18% 6% 18%'
    },
  },
  outerFeatures: {
    borderRadius: 6,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
  },
  outerSupport: {
    borderRadius: 35,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    padding: 5,
    display: 'flex',
    marginBottom: 15,
    width: 'fit-content',
    padding: '6px 15px',
    minWidth: '245px'
  },
  mainHeaderTwo: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '38px',
    // margin: 'auto',
    // marginLeft: '40%',
    textAlign: 'left',
    position: 'relative',
    zIndex: 5,
    lineHeight: 1.3,
    [theme.breakpoints.up('xl')]: {
      width: '85%',
      fontSize: '40px',
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      fontSize: '37px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '36px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '21px',
      lineHeight: 1.4,
      width: '90%'
,      paddingLeft: '0%',
      paddingRight: '0%'
    },
  },
  mainHeaderFr: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '38px',
    width: '67%',
    position: 'relative',
    zIndex: 5,
    lineHeight: 1.3,
    [theme.breakpoints.up('xl')]: {
      width: '70%',
      fontSize: '40px',
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      fontSize: '37px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '31px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '21px',
      lineHeight: 1.4,
      paddingLeft: '5%',
      paddingRight: '5%'
    },
  },
  mainHeaderTwoFr: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    width: '80%',
    // marginLeft: '40%',
    textAlign: 'right',
    position: 'relative',
    position: 'relative',
    zIndex: 5,
    lineHeight: 1.3,
    [theme.breakpoints.up('xl')]: {
      width: '65%',
      fontSize: '40px',
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      fontSize: '37px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '36px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '21px',
      lineHeight: 1.4,
      paddingLeft: '5%',
      paddingRight: '5%'
    },
  },  
  appImages: {
		[theme.breakpoints.only("sm")]: {
			textAlign: 'initial',
			marginTop: 30,
			marginBottom: 30,
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: 30,
			textAlign: 'end'
		}
	},
  comingRight: {
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
  },
  mobileImage: {
    width: '70%',
    margin: 'auto',
    marginTop: '5%'
  },
  linkText:{
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: '20px',
      color: '#fa935b',
      textDecoration: 'underline',
      textDecorationColor: '#fa935b',
      textDecorationStyle: "dashed",
      '&:hover': {
        fontWeight: 600,
        cursor: 'pointer'
      }
  },
  supportText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '15px',
    margin: 'auto 0',
    color: 'rgba(0,0,0,0.8)'
  },
  iconSupport: {
    color: '#fa935b',
    fontSize: 18,
    padding: 6,
    background: '#f1f1f1',
    borderRadius: '50%',
    marginRight: 8,
  },
  quoteText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '15px',
  },
  nameText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    marginTop: 15,
  },
  titleText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '13px',
  },
  logoTest: {
    width: '32%',
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      width: '36%',
      marginTop: 15,
    }
  },
  logoMolaa: {
    width: '32%',
    marginLeft: -7,
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      width: '36%',
      marginTop: 15,
    }
  },
  photoPersonOuter: {
    width: '70%',
    paddingRight: '5%',
    [theme.breakpoints.down("xs")]: {
			width: '32%',
      paddingRight: 0,
      paddingTop: 25,
    },

  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  ratingContainerTwo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 25,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  ratingContainerOuter: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("xs")]: {
      display: 'block',
    },
  },
  ratingText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
  },
  numbRatingText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '20px',
  },  
  ratingLine: {
    borderRight: '1px solid rgba(0,0,0,0.1)',
    paddingLeft: 10,
    marginRight: 15
  } , 
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: theme.spacing(2),
    gridTemplateRows: 'masonry', // Enable masonry layout
    gridAutoFlow: 'dense', // Fill the gaps efficiently
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  sliderContainer: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  slide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    boxSizing: 'border-box',
  },
}));

function AppStore({ t }) {
  const classes = useStyles();
  const value = 4.8;

  return (
    <Box className={classes.ratingContainer}>
      <Rating name="read-only" value={value} precision={0.1} readOnly />
      <Typography className={classes.ratingText} style={{ marginLeft: 8 }}>
        <span style={{ fontSize: 19, color: 'rgba(0,0,0,0.6)', marginRight: 8 }}>4.8</span> {t('from_app_store')}
      </Typography>
    </Box>
  );
}

function Capterra({ t }) {
  const classes = useStyles();
  const value = 4.6;

  return (
    <Box className={classes.ratingContainerTwo}>
      <Rating name="read-only" value={value} precision={0.1} readOnly />
      <Typography className={classes.ratingText} style={{ marginLeft: 8 }}>
        <span style={{ fontSize: 19, color: 'rgba(0,0,0,0.6)', marginRight: 8 }}>4.6</span> {t('from_capterra')}
      </Typography>
    </Box>
  );
}


const testimonialData = [
  {
    quote: 'gia_test',
    name: 'Gia',
    title: 'gia_title',
    logo: alz_logo,
  },
  {
    quote: 'kate_test',
    name: 'Kate',
    title: 'kate_title',
    logo: ronaldmacdonaldlogo,
  },
  {
    quote: 'elizabeth_test',
    name: 'Elizabeth',
    title: 'elizabeth_title',
    logo: rochesterlogo,
  },
  {
    quote: 'jessica_test',
    name: 'Jessica',
    title: 'jessica_title',
    logo: centerstagelogo,
  },
  {
    quote: 'wesley_test',
    name: 'Wesley',
    title: 'wesley_title',
    logo: molaalogo,
  },  
  {
    quote: 'deidre_test',
    name: 'Deidre',
    title: 'deidre_title',
    logo: mhwss_logo,
  },
];

const Testimonial = ({ image, quote, name, title, logo, t }) => {
  const classes = useStyles();
  return (
    <div className={classes.outerFeatures} style={name === "Kate" || name === "Jessica" || name === "Deidre" ? {boxShadow: '0 1px 3px 0 #fa935b'} : {}}>
      <div>
        <Typography className={classes.quoteText}>
          “{t(quote)}”
        </Typography>
        <Typography className={classes.nameText}>
          {name}
        </Typography>
        <Typography className={classes.titleText}>
          {t(title)}
        </Typography>
        <img src={logo} className={name === "Wesley" ? classes.logoMolaa : classes.logoTest} />
      </div>
    </div>
  );
};

const Testimonials = ({ t }) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const languageValue = i18n.language;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Grid className={classes.mainContainer}>
      {/* Title */}
      <Typography className={classes.mainHeaderTwo}>
        {t('testimonial_header')}
      </Typography>

      <div className={classes.ratingContainerOuter} style={{paddingTop: 12, paddingBottom: '3%'}}>
        <AppStore t={t} />
        <Capterra t={t} /> 
      </div>      

      {/* Grid for large screens */}
      <Grid container className={classes.gridContainer}>
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} t={t} />
        ))}
      </Grid>

      {/* Slider for small screens */}
      <div className={classes.sliderContainer}>
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className={classes.slide}>
              <Testimonial {...testimonial} t={t} />
            </div>
          ))}
        </Slider>
      </div>
    </Grid>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(
  withTranslation()(Testimonials)
);