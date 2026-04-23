import React, { useState, useEffect, Component } from "react";
import {
	makeStyles,
	Grid,
	Typography,
  Hidden,
} from "@material-ui/core";
import { connect } from "react-redux";
import { withTranslation, useTranslation } from "react-i18next";
// App Store icons
import appStoreIconEN from '../../../assets/images/appStoreIcon.PNG';
import appStoreIconFR from '../../../assets/images/appStoreIcon_fr.PNG';
import googlePlayEn from '../../../assets/images/google-play-badge.png';
import googlePlayFr from '../../../assets/images/google-play-badge_fr.png';
import mobileAppImage from '../../../assets/images/landing/mobileApp_LP-min_1.png'
import iphoneSmall from '../../../assets/images/landing/iphoneSmall.png'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#fafafa',
    padding: '8% 10%',
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.only('md')]: {
      padding: '8% 0%'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '15%',
      padding: 0
    },
    [theme.breakpoints.up('xl')]: {
      padding: '2% 18%',
    },
  },
  mainHeader: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '38px',
    width: '63%',
    margin: 'auto',
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
      paddingLeft: '0%',
      paddingRight: '0%'
    },
  },
  mainHeaderFr: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '38px',
    width: '67%',
    margin: 'auto',
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
      paddingLeft: '0%',
      paddingRight: '0%'
    },
  },
  mainSubHeader: {
    fontFamily: 'Omnes, Montserrat',
    fontWeight: 400,
    fontSize: '24px',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.up('xl')]: {
      // width: '50%',
      // fontSize: '21px',
    },
    [theme.breakpoints.down('md')]: {
      width: '71%',
      fontSize: '22px',
      marginBottom: 30
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '25px',
      marginBottom: 30,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
      lineHeight: 1.4,
      marginTop: 15,
      paddingLeft: '0%',
      paddingRight: '0%'
    },
  },
  mainSubHeaderFr: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '21px',
    // width: '81%',
    marginTop: '20px',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.up('xl')]: {
      // width: '56%',
      // fontSize: '21px',
    },
    [theme.breakpoints.down('md')]: {
      width: '71%',
      fontSize: '22px',
      marginBottom: 30
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '20px',
      marginBottom: 30,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      lineHeight: 1.4,
      marginTop: 15,
      paddingLeft: '0%',
      paddingRight: '0%'
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
  outerMobileImage: {
    borderRadius: 6,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    marginTop: '3%',
    // width: 1150,,
    position: 'relative',
    zIndex: 9999,
    height: 470,
    [theme.breakpoints.down('md')]: {
      width: '100%'
     },
     [theme.breakpoints.down('xs')]: {
        width: '75%',
        height: '100%',
        margin: 'auto',
        marginTop: '5%',
        boxShadow: 'none',
        border: 'none',
        backgroundColor: 'transparent',        
    },          

  },
  outerMobileImageSmall: {
    borderRadius: 6,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    marginTop: '3%',
    // width: 1150,,
    position: 'relative',
    zIndex: 9999,
    height: 470,
    [theme.breakpoints.down('md')]: {
      width: '100%'
     },
     [theme.breakpoints.down('xs')]: {
        width: '75%',
        height: '100%',
        marginTop: 25
    },     
  },
  mobileImageSmall: {
    width: '90%',
    margin: 'auto',
  },
  mobileImage: {
    width: '116%',
    marginLeft: '-8%',
    margin: 'auto',
    marginTop: '-5%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: '0%',
      margin: 'auto',
      marginTop: '0%',
   },     
  }

}));

const MobileAppScreen = ({
  t,
}) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const languageValue = i18n.language;

  const handleAndroid = () => {
		window.open('https://play.google.com/store/apps/details?id=com.vome.vomevolunteer', '_blank')
	};
	const handleApple = () => {
		window.open('https://apps.apple.com/ca/app/vome-volunteer/id1490871417', '_blank')
	};



 
  return(
    <Grid className={classes.mainContainer}>
      <Typography className={languageValue === 'fr' ? classes.mainHeaderFr : classes.mainHeader}>
        {t('provide_vols_engaging_head')}<span style={{color: '#fa935b'}}>{t('provide_vols_mobile_app')}</span>{t('provide_vols_exp')}
      </Typography>
      <Typography className={languageValue === 'fr' ? classes.mainSubHeaderFr : classes.mainSubHeader}>
        {t('provide_vols_engaging_sub_head')}
      </Typography>
      {/* App store icons */}
      {languageValue === "fr" ?
          <div className={classes.appIconSec} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: -15}}>
              {/* Apple */}
              <div>
                  <img src={appStoreIconFR} onClick={() => handleApple()} style={{width: '162px', cursor: 'pointer'}} />
              </div>
              {/* Google play */}
              <div>
                  <img src={googlePlayFr} onClick={() => handleAndroid()} style={{width: '160px', cursor: 'pointer'}}/>
              </div>                                
          </div>
          :
          <div className={classes.appIconSec} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: -15}}>
              {/* Apple */}
              <div>
                  <img src={appStoreIconEN} onClick={() => handleApple()} style={{width: '141px', cursor: 'pointer'}}  />
              </div>
              {/* Google play */}
              <div>
                  <img src={googlePlayEn} onClick={() => handleAndroid()}  style={{width: '160px', cursor: 'pointer'}} />
              </div>                                
          </div>
      }            
      {/* Phone image */}
      <Hidden smDown>
        <div className={classes.outerMobileImage}>
          <img src={mobileAppImage}className={classes.mobileImage} alt="" />
          {/* <img src={mobileAppImage} /> */}
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.outerMobileImage}>
          <img src={iphoneSmall} className={classes.mobileImageSmall} alt="" />
          {/* <img src={mobileAppImage} /> */}
        </div>
      </Hidden>
    </Grid>
  );
};
  
const mapStateToProps = state => ({

});


export default connect(mapStateToProps)(
  withTranslation()(MobileAppScreen)
)