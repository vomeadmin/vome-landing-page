import React, { useState, Component } from "react";
import {
	withStyles,
	makeStyles,
	Grid,
	Typography,
	Hidden
} from "@material-ui/core";
// import styles from "../../../assets/css/LandingPageVersion5.style";
import { withTranslation, useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CancelIcon from "@material-ui/icons/Cancel";
import history from "../../../history/history";
import LanguageSwitcher from '../../../components/settings/LanguageSwitcherBN';
import ContactUs from '../../../components/ContactUsBottomNav/ContactUs';
import DemoPopup from "./DemoPopup";
import { useDialogBox } from '../../../hooks/useDialogBox';
import OpenDialog from '../../../components/Common/OpenDialog';

// App Store icons
import appStoreIconEN from '../../../assets/images/appStoreIcon.PNG';
import appStoreIconFR from '../../../assets/images/appStoreIcon_fr.PNG';
import googlePlayEn from '../../../assets/images/google-play-badge.png';
import googlePlayFr from '../../../assets/images/google-play-badge_fr.png';
// Social Icons
import fb_icon from '../../../assets/images/landing/fb_icon.png';
import insta_icon from '../../../assets/images/landing/insta_icon.png';
import twitter_icon from '../../../assets/images/landing/Xlogoblack.png';
import linkedin_icon from '../../../assets/images/landing/linkedin_icon.png';
// logo
import logo from '../../../assets/images/logos/vome-orange.png'


const useStyles = makeStyles((theme) => ({
	outerSec: {
		background: '#fff',
		padding: '3% 5% 1% 5%',
		[theme.breakpoints.only("md")]: {
			padding: '3% 2% 1% 2%',
		},
	},
	videoOutGrid: {
		padding: '8%',
		[theme.breakpoints.up("xl")]: {
			padding: '10%',
			paddingLeft: '13%'
		},
		[theme.breakpoints.down("md")]: {
			padding: '8%',
			paddingLeft: '3%'
		},
		[theme.breakpoints.down("sm")]: {
			padding: '8%',
			paddingLeft: '6%'
		},
	},
	videoFullView: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		width: 50,
		height: 50,
		cursor: 'pointer',
		[theme.breakpoints.down("xs")]: {
			top: '61%',
			right: '10%'
		},
	},
	videoPopupHeader: {
		width: '98%',
		paddingTop: 15,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	cancelIcon: {
		fontSize: 30,
		cursor: 'pointer'
	},
	dialogPaper: {
		width: 'calc(512px * 2)',
		height: 'calc(288px * 2)'
	},
	reactPlayerStyle: {
		border: '3px solid #f1f1f1',
	  },
	  dialogStyle: {
		width: '90%'
	  },
	  bottomLinkSec: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '1% 4% 4% 2%',
		[theme.breakpoints.down("sm")]: {
			display: 'block',
			borderTop: '1px solid #f1f1f1'
		  },
	  },
	  bottomHead: {
		  fontSize: 15,
		  marginBottom: 20,
		  fontWeight: 600,
		  color: 'rgba(0,0,0,0.8)',
		  [theme.breakpoints.down("sm")]: {
			marginTop: 30,
			fontSize: 18,
		  },
	  },
	  pageLink: {
		fontSize: 14,
		marginBottom: 15,
		fontFamily: "Montserrat",
		fontWeight: 500,
		color: '#fa935b',
		"&:hover": {
			textDecoration: 'underline',
			cursor: 'pointer'
		},
		[theme.breakpoints.down("md")]: {
			fontSize: 13,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 16,
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
	parentButtonStyle: {
        borderRadius: '0px',
        padding: '0px',
		color: '#fa935b',
        background: 'transparent',
        border: '0',
		fontSize: 14,
		marginBottom: 15,
		fontFamily: "Montserrat",
		fontWeight: 500,
		"&:hover": {
			textDecoration: 'underline',
			cursor: 'pointer',
			background: 'transparent',
			color: '#fa935b',
			boxShadow: "none",
		},
		[theme.breakpoints.only("md")]: {
			padding: '0px',
			fontSize: 13,
		},
	},
	iconClassLeft: {
		height: 30,
		width: 30,
		cursor: 'pointer',
	},
	iconClass: {
		height: 30,
		width: 30,
		marginLeft: 8,
		cursor: 'pointer',
	},
	socialHead: {
		fontSize: 18,
		width: '67%',
		fontFamily: "Montserrat",
		fontWeight: 500,
		marginBottom: 12,
		[theme.breakpoints.only("md")]: {
			fontSize: 15,
			marginBottom: 26,
		},
		[theme.breakpoints.down("sm")]: {
			width: '100%',
			marginTop: 30,
			marginBottom: 15,
			fontWeight: 600,
		},
	},
	socialHeadFr: {
		fontSize: 18,
		width: '67%',
		fontFamily: "Montserrat",
		fontWeight: 500,
		marginBottom: 12,
		[theme.breakpoints.only("md")]: {
			fontSize: 15,
			marginBottom: 26,
			width: '72%'
		},
		[theme.breakpoints.down("sm")]: {
			width: '100%',
			marginTop: 30,
			marginBottom: 15,
			fontWeight: 600,
		},
	},
	socialContainer: {
		[theme.breakpoints.down("sm")]: {
			marginBottom: 30,
		},
	},
	loginText: {
		fontFamily: "Montserrat",
		fontWeight: 500,
		color: '#fa935b',
		fontSize: 15,
		"&:hover": {
			textDecoration: 'underline',
			cursor: 'pointer'
		},
		[theme.breakpoints.only("md")]: {
			fontSize: 11,
			fontWeight: 600,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 19,
		},
	},
	loginContainer: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 13,
	},
	bottomSec: {
		borderTop: '1px solid #f1f1f1',
		paddingTop: '1%',
		marginTop: '1%',
		alignItems: 'center',
		[theme.breakpoints.down("sm")]: {
			paddingTop: '5%',
			marginTop: '5%'
		},
	},
	logoCon: {
		// textAlign: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.down("sm")]: {
			marginTop: 10,
			marginBottom: 10,
		},
	},
	logoSize: {
		width: '35%'
	},
	footBack: {
		background: '#fa935b',
	},
	copyRightIcon: {
		textAlign: 'center',
		fontFamily: "Montserrat",
		fontWeight: 500,
		fontSize: 11,
		padding: '1%',
		color: '#fff',

	},
}));

const SectionBottomNav = ({
	t,
}) => {
	const classes = useStyles();
	const { i18n } = useTranslation();
	const languageValue = i18n.language;
	const [open, setOpen] = useState(false);
	const [hideButton, setHideButton] = useState(false);
	const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();


	const goToHome = () => {
		history.push(`/`);
	}
	const goToFeatures = () => {
		history.push(`/features`);
	}
	const goAppForm = () => {
		history.push(`/volunteer-application-forms`);
	}
	const goOnboard = () => {
		history.push(`/volunteer-onboarding-software`);
	}
	const goSchedule = () => {
		history.push(`/volunteer-scheduling-software`);
	}
	const goHour = () => {
		history.push(`/volunteer-hour-tracking`);
	}
	const goDatabase = () => {
		history.push(`/volunteer-database`);
	}
	const goCommunications = () => {
		history.push(`/volunteer-communications`);
	}
	const goApp = () => {
		history.push(`/app-for-volunteers`);
	}






	const goToPricing = () => {
		history.push(`/plans`);
	}
	const handleClose = () => {
		setOpen(false);
	};
	const handleClickOpen = () => {
		setOpen(true);
	};
	const goToAbout = () => {
		history.push(`/about-us`);
	};
	const goToAmb = () => {
		history.push('/ambassador')
	};
	const goToFeedback = () => {
		openDialogBox('sendFeedback')
	};
	const goToAffiliate = () => {
		openDialogBox('becomeAffiliate')
	};	
	const goToBlog = () => {
		history.push(`/blog`);
	};
	const goToTerms = () => {
		history.push(`/terms`);
	};
	const goToCookie = () => {
		history.push(`/cookie`);
	};
	const goToPrivacy = () => {
		history.push(`/privacy`);
	};		
	const goToSupport = () => {
		window.open(`https://support.vomevolunteer.com/portal/${languageValue === 'fr' ? 'fr' : 'en'}/home`, '_blank');
	}; 
	const goToGlossary = () => {
		history.push(`/glossary`);
	};
	const handleAndroid = () => {
		window.open('https://play.google.com/store/apps/details?id=com.vome.vomevolunteer', '_blank')
	};
	const handleApple = () => {
		window.open('https://apps.apple.com/ca/app/vome-volunteer/id1490871417', '_blank')
	};
	const handleFB = () => {
		window.open('https://www.facebook.com/vomevolunteer/', '_blank')
	};
	const handleInsta = () => {
		window.open('https://www.instagram.com/vomevolunteer/', '_blank')
	};
	const handleTwitter = () => {
		window.open('https://twitter.com/vomevolunteer', '_blank')
	};
	const handleLinkedIn = () => {
		window.open('https://ca.linkedin.com/company/vomevolunteer', '_blank')
	};
	const goToSignupOrg = () => {
		window.open(`/register`)
	};
	const goToSignupVol = () => {
		window.open(`/register-volunteer`)
	};
	const goToLogin = () => {
		window.open(`/login`)
	};

	// const handleHideButton = () => {
	// 	localStorage.setItem('hideColumn', true)
	// 	setHideButton(true);
	// }

	return (
		<div>
		<div className={classes.outerSec}>
			{/* Left section */}
			<Grid container>
				{/* First column*/}
				<Grid item xs={12} md={3} className={classes.logoCon}>
					<div>
						<div>
							{/* Logo */}
							<img src={logo} className={classes.logoSize}/>
							{/* App store icons */}
							{languageValue === "fr" ?
								<div style={{alignItems: 'center', display: 'flex', marginTop: 15, marginLeft: -10}}>
									{/* Apple */}
									<div>
										<img src={appStoreIconFR} onClick={() => handleApple()} style={{width: '153px', cursor: 'pointer'}} />
									</div>
									{/* Google play */}
									<div>
										<img src={googlePlayFr} onClick={() => handleAndroid()} style={{width: '155px', cursor: 'pointer'}}/>
									</div>                                
								</div>
								:
								<div style={{alignItems: 'center', display: 'flex', marginTop: 25, marginLeft: -5}}>
									{/* Apple */}
									<div>
										<img src={appStoreIconEN} onClick={() => handleApple()} style={{width: '141px', cursor: 'pointer'}}  />
									</div>
									{/* Google play */}
									<div>
										<img src={googlePlayEn} onClick={() => handleAndroid()}  style={{width: '143px', cursor: 'pointer'}} />
									</div>                                
								</div>
							}         
							{/* Social icons */}
							<div style={{display: 'flex', marginTop: 15, marginBottom: 15}}>
								<img src={fb_icon} onClick={() => handleFB()} className={classes.iconClassLeft}/>
								<img src={insta_icon} onClick={() => handleInsta()} className={classes.iconClass}/>
								<img src={twitter_icon} onClick={() => handleTwitter()} className={classes.iconClass}/>
								<img src={linkedin_icon} onClick={() => handleLinkedIn()} className={classes.iconClass} style={{width: 35}}/>
							</div>	
						</div>
						<div style={{marginTop: '10%'}}>
							{/* Language */}
							<div className={classes.languageSwitcher}>
								<LanguageSwitcher />
							</div>
						</div>
					</div>   												
				</Grid>

				{/* Second column */}
				<Grid item xs={12} md={9} className={classes.bottomLinkSec}>
					<div style={{minWidth: 180}}>
						{/* Section head */}
						<Typography className={classes.bottomHead}>
							{t('features')}
						</Typography>
						{/* Page link */}
						<Typography onClick={() => goToFeatures()} className={classes.pageLink}>
							{t('feature_overview')}
						</Typography>						
						{/* Page link */}
						<Typography onClick={() => goAppForm()} className={classes.pageLink}>
							{t('vol_app_form')}
						</Typography>	
						{/* Page link */}
						<Typography onClick={() => goOnboard()} className={classes.pageLink}>
							{t('vol_onboarding_software')}
						</Typography>
						<Typography onClick={() => goSchedule()} className={classes.pageLink}>
							{t('vol_scheduling_software')}
						</Typography>
						<Typography onClick={() => goHour()} className={classes.pageLink}>
							{t('vol_hour_tracking')}
						</Typography>
						<Typography onClick={() => goDatabase()} className={classes.pageLink}>
							{t('vol_database')}
						</Typography>
						<Typography onClick={() => goCommunications()} className={classes.pageLink}>
							{t('vol_communications')}
						</Typography>
						<Typography onClick={() => goApp()} className={classes.pageLink}>
							{t('app_for_vols')}
						</Typography>																														
					</div>							
					<div style={{minWidth: 180}}>
						{/* Section head */}
						<Typography className={classes.bottomHead}>
							{t('software_text')}
						</Typography>
						{/* Page link */}
						<Typography onClick={() => goToHome()} className={classes.pageLink}>
							{t('visit_our_homepage')}
						</Typography>							
						{/* Page link */}
						<Typography onClick={() => goToPricing()} className={classes.pageLink}>
							{t('view_plans_pricing')}
						</Typography>
						<Typography onClick={() => goToSignupOrg()} className={classes.pageLink}>
							{t('sign_up_as_npo')}
						</Typography>
						<Typography onClick={() => goToSignupVol()} className={classes.pageLink}>
							{t('signup_as_vol')}
						</Typography>
						<Typography onClick={() => goToLogin()} className={classes.pageLink}>
							{t('login')}
						</Typography>																		
					</div>								
				{/* Third section */}
					<div  style={{minWidth: 180}}>
						{/* Section head */}
						<Typography className={classes.bottomHead}>
							{t('about_vome')}
						</Typography>
						{/* Page link */}
						<Typography onClick={() => goToAbout()} className={classes.pageLink}>
							{t('our_story')}
						</Typography>
						{/* Page link */}
						<Typography onClick={() => handleClickOpen()} className={classes.pageLink}>
							{t('watch_a_video')}
						</Typography>
						<div>
							<DemoPopup
								parentButtonStyle={classes.parentButtonStyle}
							/>	
						</div> 		
						<ContactUs  asButton />		
						<Typography onClick={() => goToFeedback()} className={classes.pageLink}>
							{t('give_us_feedback')}
						</Typography>	
						<Typography onClick={() => goToAffiliate()} className={classes.pageLink}>
							{t('become_an_affilate')}
						</Typography>	
						<Typography onClick={() => goToAmb()} className={classes.pageLink}>
							{t('become_amb')}
						</Typography>																		
																		

					</div>															
				{/* Fourth section */}
					<div style={{minWidth: 180}}>
						{/* Section head */}
						<Typography className={classes.bottomHead}>
							{t('resources_txt')}
						</Typography>
						{/* Page link */}
						<Typography onClick={() => goToBlog()} className={classes.pageLink}>
							{t('blog')}
						</Typography>
						{/* Page link */}
						<Typography onClick={() => goToPrivacy()} className={classes.pageLink}>
							{t('privacy_pol')}
						</Typography>
						{/* Page link */}
						<Typography onClick={() => goToTerms()} className={classes.pageLink}>
							{t('terms_of_service')}
						</Typography>
						{/* Page link */}
						<Typography onClick={() => goToCookie()} className={classes.pageLink}>
							{t('cookie_policy')}
						</Typography>
						{/* Page link */}
						<Typography onClick={() => goToGlossary()} className={classes.pageLink}>
							{t('glossary_text')}
						</Typography>						
						{/* Page link */}
						<Typography onClick={() => goToSupport()} className={classes.pageLink}>
							{t('get_support')}
						</Typography>																								
					</div>			
				</Grid>				
			</Grid>
			</div>
			<Grid container>
				<Hidden xsDown>
					<Grid item xs={12} className={classes.footBack}>
						<Typography className={classes.copyRightIcon}> &copy;
							{" "}{t("copyright_1")} {t('copyright_2')} | 9145 Rue Boivin Suite, Montreal, Quebec H8R 2E5, Canada
						</Typography>
					</Grid>
				</Hidden>
				<Hidden smUp>
					<Grid item xs={12} className={classes.footBack}>
						<Typography className={classes.copyRightIcon}> &copy;
							{" "}{t("copyright_1")} {t('copyright_2')} <br></br> 9145 Rue Boivin Suite, Montreal, Quebec H8R 2E5, Canada
						</Typography>
					</Grid>
				</Hidden>				
			</Grid>
			

			{/* Popup for video */}
			<Dialog
				fullWidth={true}
				maxWidth={"lg"}
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				classes={{
					paper: classes.dialogPaper,
					scrollPaper: classes.scrollPaper
				}}
			>
				<div className={classes.videoPopupHeader}>
					<CancelIcon onClick={() => handleClose()} className={classes.cancelIcon} />
				</div>
				<DialogContent>
				<ReactPlayer className={classes.reactPlayerStyle}
					url='https://youtu.be/wEGJ49XhOQg' 
					playsinline={true}
					width='100%'
					height="90%"
				/>
				</DialogContent>
			</Dialog>     
			{!!dialogBoxName && (
				<OpenDialog
					dialogStyle={classes.dialogStyle}
					componentName={dialogBoxName}
					open={true}
					closeBox={closeDialogBox}
				/>
			)}					
		
		</div>
	)
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(
	withTranslation()(SectionBottomNav)
)