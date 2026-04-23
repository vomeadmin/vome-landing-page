import React, { Component } from "react";
import {
	withStyles,
	Grid,
	Typography} from "@material-ui/core";
import styles from "../../../../assets/css/LandingPageVersion5.style";
import { withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import frontImageExcel from '../../../../assets/images/landing/lp_main_excel.png';
//import ContactUs from '../../../../components/ContactUsPopupStyleTwo/ContactUs';
//import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import history from "../../../../history/history.js";
//import { IoIosArrowForward } from 'react-icons/io';
//import DemoPopup from '../DemoPopup';

class SectionOneContent extends Component {
  componentDidMount() {
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.default.init('874048119994461');
  }
	handleClickOpen = () => {
		this.props.ShowContactUsPopUp(true)
		this.props.changeToContactUs();
	};
	handleClose = () => {
		this.props.ShowContactUsPopUp(false)
  };
  
  fbqCustomTracking = () => {
    console.log('fbqCustomTracking')
    ReactPixel.trackCustom('register', {'event': 'register'});
    history.push(`/register`);
  }

	render() {
		const { classes, t, locale } = this.props;
		return (
			<Grid container className={classes.contentRoot} style={{overflow: 'hidden', padding: '0 10% 0 10%' }}>
				<Grid item lg={6} md={6} sm={12} className={classes.leftPanel}>
					<Typography className={locale === 'fr' ? classes.firstSectionContentHeaderOneFr :  classes.firstSectionContentHeaderOne} >
						{t('manage_head')} <span style={{color: '#fa935b'}}>{t('volunteers_header')}</span>
					</Typography>
					<Typography className={locale === 'fr' ? classes.firstSectionContentHeaderOneFr : classes.firstSectionContentHeaderOne}>
						{t('with_one_solution')}
					</Typography>
					{/* <Typography className={locale === 'fr' ? classes.firstSectionContentHeaderFr : classes.firstSectionContentHeader}>
						{t('lp_header_three_1')}<span className={locale === 'fr' ? classes.boldHeadFr : classes.boldHead}>{t('lp_header_three')}</span>
					</Typography> */}
					<Typography className={classes.firstSectionContentText}>
						{t('main_subtext_lp')}
					</Typography>
						<div className={classes.firstSectionButtons}>
							<div className={classes.mainLandingButton}>
								{/* <Link to="/register" onClick={ReactPixel.grantConsent} > */}
								<div onClick={()=>this.fbqCustomTracking()} id="register" className={locale === 'fr' ? classes.mainSignupButtonFr : classes.mainSignupButton} >
									<Typography className={classes.mainLandingText}>
										{t("sign_up_free")}
									</Typography>
									{/* <IoIosArrowForward style={{color: '#fa935b'}} className={classes.landingArrow} /> */}
								</div>
							</div>
							{/* <ContactUs handleSnackOpen={this.handleSnackOpen} handleClose={this.handleClose} asButton /> */}
							
							{/* Request demo button */}
							{/* <div>
								<DemoPopup/>	
							</div> */}
						</div>
					{/* Dislaimer on free version */}
					<Typography className={locale === 'fr' ? classes.disclaimerTextFr : classes.disclaimerText}>
						{t('get_started_free_tools')}
					</Typography>						
				</Grid>
				<Grid item lg={6} md={6} sm={12} className={classes.imageSecMain}>
					<div style={{ margin: 'auto', marginLeft: '5%',}} >
						<img 
							src={frontImageExcel} 
							alt="Volunteer Management Excel Dashboard" 
							className={classes.fontLpImage} 
							loading="eager" 
							fetchpriority="high"
						/>
					</div>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = state => ({
	locale: state.translations.language
});  

export default (withTranslation()(withStyles(styles)(connect(mapStateToProps)(SectionOneContent))));
