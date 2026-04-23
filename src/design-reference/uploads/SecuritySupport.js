import React, { useState, useEffect, Component } from "react";
import {
	makeStyles,
	Grid,
	Typography,
  Hidden,
} from "@material-ui/core";
import { connect } from "react-redux";
import { withTranslation, useTranslation } from "react-i18next";
import complianceLP from '../../../assets/images/landing/complianceLP.png';
import complianceLPtwo from '../../../assets/images/landing/complianceLPtwo.png';
import supportPerson from '../../../assets/images/landing/supportPerson.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GiTicket } from 'react-icons/gi'
import { BsFillChatDotsFill, BsPersonLinesFill } from 'react-icons/bs';


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
      padding: 0
    },
    [theme.breakpoints.up('xl')]: {
      padding: '6% 18% 0% 18%',

    },
  },
  linkOuter: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
    [theme.breakpoints.down('xs')]: {
      marginTop: 5,
    },
  },
  imageOuter: {
    width: '65%'
  },
  mainContainerTwo: {
    background: '#fafafa',
    padding: '0% 10% 8% 10%',
    display: 'flex',
    position: 'relative',
    
    [theme.breakpoints.only('md')]: {
      padding: '8% 0%'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '10%',
      padding: 0
    },
    [theme.breakpoints.up('xl')]: {
      padding: '6% 18%',

    },
  },
  outerFeatures: {
    borderRadius: 6,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    padding: '5%',
    [theme.breakpoints.down('xs')]: {
      padding: '15%',
      padding: 0
    },
  },
  innerFeatures: {
    display: 'flex',
    alignItemsL: 'center', 
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      padding: '5%'
    },
  },
  outerFeaturesList: {
    paddingTop: 25,
    marginLeft: '5%',
    paddingRight: '20%',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '2%',
      marginLeft: '0%',
    },
  },
  outerSupport: {
    borderRadius: 35,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    padding: 5,
    display: 'flex',
    marginRight: 25,
    marginBottom: 15,
    width: 'fit-content',
    padding: '13px 15px',
    minWidth: '300px',
    marginLeft: 'auto',
    [theme.breakpoints.only("md")]: {
      minWidth: '221px',
		},    
  },
  outerSupportEnd: {
    borderRadius: 35,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    padding: 5,
    display: 'flex',
    marginRight: 25,
    width: 'fit-content',
    padding: '13px 15px',
    minWidth: '300px',
    marginLeft: 'auto',
    marginBottom: 0,
    [theme.breakpoints.only("md")]: {
      minWidth: '221px',
		},    
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
		},    
  },
  outerSupportRight: {
    borderRadius: 35,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    padding: 5,
    display: 'flex',
    marginBottom: 15,
    width: 'fit-content',
    padding: '13px 15px',
    minWidth: '300px',
    marginRight: 'auto',
    [theme.breakpoints.only("md")]: {
      minWidth: '221px',
		},    
  },
  outerSupportRightEnd: {
    borderRadius: 35,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    padding: 5,
    display: 'flex',
    width: 'fit-content',
    padding: '13px 15px',
    minWidth: '300px',
    marginRight: 'auto',
    marginBottom: 0,
    [theme.breakpoints.only("md")]: {
      minWidth: '221px',
		},    
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
		},        
  },
  mainHeader: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '38px',
    // width: '60%',
    // margin: 'auto',
    position: 'relative',
    zIndex: 5,
    lineHeight: 1.3,
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      fontSize: '40px',
    },
    [theme.breakpoints.down('md')]: {
      width: '95%',
      fontSize: '31px',
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
  compImage: {
    width: '50%',
    height: '50%',
    margin: 'auto' ,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%',
      marginTop: 21,
    },
  },

  mainHeaderFr: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '29px',
    position: 'relative',
    zIndex: 5,
    lineHeight: 1.3,
    [theme.breakpoints.up('xl')]: {
      width: '74%',
      fontSize: '40px',
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      fontSize: '31px',
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
  mainHeaderTwo: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '38px',
    width: '80%',
    marginLeft: '5%',
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
  mainHeaderTwoFr: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '29px',
    width: '80%',
    // marginLeft: '40%',
    textAlign: 'right',
    position: 'relative',
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
      textAlign: 'center',
      paddingLeft: '0%',
      paddingRight: '0%',
      width: '90%',
      margin: 'auto'
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
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: '14px',
      }
  },
  supportText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '15px',
    margin: 'auto 0',
    color: 'rgba(0,0,0,0.8)',
    [theme.breakpoints.only("md")]: {
      fontSize: 11
		},
  },
  supportTextFr: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '13px',
    margin: 'auto 0',
    color: 'rgba(0,0,0,0.8)',
    [theme.breakpoints.only("md")]: {
      fontSize: 11
		},
  },
  iconSupport: {
    color: '#fa935b',
    fontSize: 18,
    padding: 6,
    background: '#f1f1f1',
    borderRadius: '50%',
    marginRight: 8,
  }

}));

const MobileAppScreen = ({
  t,
}) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const languageValue = i18n.language;

 
  return(
    <div>
    <Grid className={classes.mainContainer}>
      <div className={classes.outerFeatures}>
        <div className={classes.innerFeatures}>
          <div>
            <Typography className={languageValue === 'fr' ? classes.mainHeaderFr : classes.mainHeader}>
              {t('keep_data_saf')} <span style={{color: '#fa935b'}}>{t('keep_data_saf_sec')}</span>{t('keep_data_saf_can')} <span style={{color: '#fa935b'}}>{t('keep_data_saf_trust')}</span>{t('keep_data_saf_per')}
            </Typography>
            <div className={classes.linkOuter} >
              <Typography className={classes.linkText}>
                {t('read_our_privacy')}
              </Typography>
              <MdKeyboardArrowRight style={{ color: '#fa935b', fontSize: 26, }}/>
            </div>
          </div>
          <img src={complianceLPtwo} className={classes.compImage}/>
        </div>

      </div>
    </Grid>
    <Grid className={classes.mainContainerTwo} >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Hidden smDown>
            <div className={classes.imageOuter}>
              <img src={supportPerson} className={classes.imageSupport}/>
            </div>
          </Hidden>
          <div>
              {/* features support */}
              <Typography className={ classes.mainHeaderTwo}>
                {t('and_make_life_easier_supp')} <span style={{color: '#fa935b'}}>{t('and_make_life_cust_sup')}</span> {t('and_make_life_can')} {t('and_make_life_rely')}.
              </Typography>
                <Grid container className={classes.outerFeaturesList}>
                  <Grid item md={6} >
                    <div className={classes.outerSupport}>
                      <IoMdSettings className={classes.iconSupport}/>
                      <Typography className={languageValue === 'fr' ? classes.supportTextFr : classes.supportText}>{t('free_acc_onb')}</Typography>
                    </div>
                  </Grid>
                  <Grid item md={6} >
                    <div className={classes.outerSupportRight}>
                      <RiEmotionHappyLine className={classes.iconSupport}/>
                      <Typography className={languageValue === 'fr' ? classes.supportTextFr : classes.supportText}>{t('faq_knowledge')}</Typography>
                    </div>
                  </Grid>
                  <Grid item md={6} >
                    <div className={classes.outerSupport}>
                      <FaChalkboardTeacher className={classes.iconSupport}/>
                      <Typography className={languageValue === 'fr' ? classes.supportTextFr : classes.supportText}>{t('unlimited_admin_tr')}</Typography>
                    </div>
                  </Grid>
                  <Grid item md={6} >
                    <div className={classes.outerSupportRight}>
                      <BsFillChatDotsFill  className={classes.iconSupport}/>
                      <Typography className={languageValue === 'fr' ? classes.supportTextFr : classes.supportText}>{t('live_chat_sup')}</Typography>
                    </div>
                  </Grid>
                  <Grid item md={6} >
                    <div className={classes.outerSupportEnd}>
                      <BsPersonLinesFill  className={classes.iconSupport}/>
                      <Typography className={languageValue === 'fr' ? classes.supportTextFr : classes.supportText}>{t('ded_acc_man')}</Typography>
                    </div>
                  </Grid>
                  <Grid item md={6} >
                    <div className={classes.outerSupportRightEnd}>
                      <GiTicket className={classes.iconSupport}/>
                      <Typography className={languageValue === 'fr' ? classes.supportTextFr : classes.supportText}>{t('email_supp_ticket')}</Typography>
                    </div>
                  </Grid>       
                </Grid>  
            </div>
                                                 
       

        </div>      
    </Grid>
    </div>
  );
};
  
const mapStateToProps = state => ({

});


export default connect(mapStateToProps)(
  withTranslation()(MobileAppScreen)
)