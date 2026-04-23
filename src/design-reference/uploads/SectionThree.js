import React, { Component } from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Hidden,
} from "@material-ui/core";
import { withTranslation, useTranslation } from "react-i18next";
import { connect } from "react-redux";
import history from "../../../history/history";
import DemoPopup from "./DemoPopup";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#fafafa',
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '9%',
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '15%',
      paddingRight: '15%'
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '1%',
      paddingRight: '1%'
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2%',
      paddingRight: '2%'
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '5%',
      paddingRight: '5%'
    },
  },
  mainHeader: {
    fontFamily: 'Montserrat',
    fontWeight: 800,
    fontSize: '38px',
    width: '100%',
    position: 'relative',
    zIndex: 5,
    lineHeight: 1.3,
    color: '#fa935b',
    textTransform: 'uppercase',
    marginBottom: "2%",
    [theme.breakpoints.up('xl')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '31px',
      marginTop: '15%',
      marginBottom: 25,
    },
  },
  stepOut: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: '1px solid #e2e0e0',
    background: '#fff',
    margin: 'auto',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 16%)'
  },
  stepText: {
    color: '#fa935b',
    fontWeight: 500,
    fontSize: 25,
    zIndex: 20,
    padding: 5,
  },
  stepHead: {
    color: '#fa935b',
    fontWeight: 600,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8
  },
  stepHeadFr: {
    color: '#fa935b',
    fontWeight: 600,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
    [theme.breakpoints.only('sm')]: {
      fontSize: 18,
    },
  },
  signUpLink: {
    textDecoration: 'underline',
    textDecorationStyle: "dashed",
    textDecorationColor: '#fa935b',
    cursor: 'pointer',
    "&:hover": {
      fontWeight: 600
    }
  },
  stepSub: {
    color: '#000',
    fontWeight: 500,
    fontSize: 16,
    width: '83%',
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 1.7,
    [theme.breakpoints.up('xl')]: {
      width: '66%',
    },
    [theme.breakpoints.only('sm')]: {
      width: '90%',
      fontSize: 16,
    },
    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
  },
  stepSubTwo: {
    color: '#000',
    fontWeight: 500,
    fontSize: 16,
    width: '73%',
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 1.7,
    [theme.breakpoints.up('xl')]: {
      width: '65%',
    },
    [theme.breakpoints.only('sm')]: {
      width: '90%',
      fontSize: 16,
    },
    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
  },
  stepSubThree: {
    color: '#000',
    fontWeight: 500,
    fontSize: 16,
    width: '95%',
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 1.7,
    [theme.breakpoints.up('xl')]: {
      width: '85%',
    },
    [theme.breakpoints.only('sm')]: {
      width: '90%',
      fontSize: 16,
    },
    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
  },
  stepSubFr: {
    color: '#000',
    fontWeight: 500,
    fontSize: 16,
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 1.7,
    [theme.breakpoints.up('xl')]: {
      width: '76%',
    },
    [theme.breakpoints.only('sm')]: {
      width: '80%',
      fontSize: 16,
    },
  },
  stepSubFrTwo: {
    color: '#000',
    fontWeight: 500,
    fontSize: 16,
    width: '91%',
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 1.7,
    [theme.breakpoints.up('xl')]: {
      width: '80%',
    },
    [theme.breakpoints.only('sm')]: {
      width: '88%',
      fontSize: 16,
    },
  },
  outContainer: {
    zIndex: 5,
    [theme.breakpoints.down('xs')]: {
      marginTop: 25,
    },
  },
  line: {
    borderTop: '1px solid #fa935b',
    width: '52%',
    position: 'absolute',
    top: '38%',
    borderTop: '2px dotted #fa935b',
    [theme.breakpoints.up('xl')]: {
      width: '49%',
      top: '38%',
    },
    [theme.breakpoints.down('md')]: {
      width: '65%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '58%',
    },
    [theme.breakpoints.down('xs')]: {
      borderTop: '0px #fa935b',
    },
  },
  demoButton: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 500,
    minWidth: 160,
    background: '#ffff',
    padding: '9px 20px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  signUpButton: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 16,
    color: '#fff'
  }, 
  demoButtonFr: {
    marginLeft: 15,
    minWidth: 160,
    fontWeight: 500,
    background: '#ffff',
    fontSize: 16,
    padding: '9px 20px',
    [theme.breakpoints.down('xs')]: {
      width: '268px',
      marginLeft: 0,
     },
  },
  registerOuter: {
    background: '#fa935b',
    borderRadius: '4px',
    padding: '12px 20px',
    marginLeft: 15,
    color: '#fff',
    cursor: 'pointer',
    textAlign: 'center',
    minWidth: 133,
    "&:hover": {
      background: '#fa935b',
      color: '#fff',
      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    },
  },
  registerOuterFr: {
    background: '#fa935b',
    borderRadius: '4px',
    padding: '11px 20px',
    color: '#fff',
    cursor: 'pointer',
    textAlign: 'center',
    marginLeft: 15,
    minWidth: 133,
    "&:hover": {
      background: '#fa935b',
      color: '#fff',
      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      width: 230,
      margin: 'auto',
      marginBottom: 15,
    },
  },  
  demoOuter: {
    [theme.breakpoints.down("xs")]: {
      textAlign: 'center'
    },
  },
  buttonSec: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
    [theme.breakpoints.down("md")]: {
      paddingBottom: 40
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
      paddingBottom: 40
    },
    [theme.breakpoints.down("xs")]: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 0
    },
  },
  buttonSecFr: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
    [theme.breakpoints.down("md")]: {
      paddingBottom: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
      paddingBottom: 40
    },
    [theme.breakpoints.down("xs")]: {
      display: 'block',
      justifyContent: 'center',
      paddingBottom: 50
    },
  },

}));

const SectionThree = ({
  t,
}) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const languageValue = i18n.language;
  const locale = i18n.language;
  const goToRegistration = () => {
    history.push(`/register`);
  }
  

  return (
    <Grid container className={classes.mainContainer}>
      <Typography className={classes.mainHeader}>
        {t('getting_started_is_easy')}
      </Typography>
      {/* Buttons */}
          <Grid item xs={12} className={locale === 'fr' ? classes.buttonSecFr : classes.buttonSec}>
            {/* Demo */}
            <div className={classes.demoOuter}>
              <DemoPopup
                parentButtonStyle={locale === 'fr'? classes.demoButtonFr : classes.demoButton}
            />	
            </div>   
            {/* Sign up */}
            <div onClick={()=> goToRegistration()} className={locale === 'fr' ? classes.registerOuterFr : classes.registerOuter} >
              <Typography className={classes.signUpButton}>
                {t("sign_up_free")}
              </Typography>
            </div>
          </Grid>


      {/* Line */}
      <div className={classes.line}>

      </div>
      {/* Step 1 */}
      <Grid item sm={4} className={classes.outContainer}>
        <div className={classes.stepOut}>
          <Typography className={classes.stepText}>
            1
          </Typography>
        </div>
        <Typography className={languageValue === 'fr' ? classes.stepHeadFr : classes.stepHead}>
          {t('create_account_alone')}
        </Typography>
        <Typography className={languageValue === 'fr' ? classes.stepSubFr : classes.stepSub}>
          {t('fill_out_the')} <span onClick={() => goToRegistration()} className={classes.signUpLink}>{t('sign_up_form')}</span>{t('for_your_org')}
        </Typography>
      </Grid>
      {/* Step 1 */}
      <Grid item sm={4} className={classes.outContainer}>
        <div className={classes.stepOut}>
          <Typography className={classes.stepText}>
            2
          </Typography>
        </div>
        <Typography className={languageValue === 'fr' ? classes.stepHeadFr : classes.stepHead}>
          {t('build_programs')}
        </Typography>
        <Typography className={languageValue === 'fr' ? classes.stepSubFrTwo : classes.stepSubTwo}>
          {t('customize_your_application')}
        </Typography>
      </Grid>
      {/* Step 1 */}
      <Grid item sm={4} className={classes.outContainer}>
        <div className={classes.stepOut}>
          <Typography className={classes.stepText}>
            3
          </Typography>
        </div>
        <Typography className={languageValue === 'fr' ? classes.stepHeadFr : classes.stepHead}>
          {t('add_volunteers')}
        </Typography>
        <Typography className={languageValue === 'fr' ? classes.stepSubFrTwo : classes.stepSubThree}>
          {t('add_or_invite_vols')}
        </Typography>
      </Grid>
    </Grid>
  );
};


const mapStateToProps = state => ({

});


export default connect(mapStateToProps)(
  withTranslation()(SectionThree)
)