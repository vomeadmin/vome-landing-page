import React, { useState, Component } from "react";
import {
	makeStyles,
	Grid,
	Typography,
  Hidden,
} from "@material-ui/core";
import { connect } from "react-redux";
import { withTranslation, useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import DemoPopup from "./DemoPopup";
import history from "../../../history/history";
import { RiFindReplaceLine } from 'react-icons/ri';
import { BsFillCalendarFill, BsBarChartFill } from 'react-icons/bs';
import { IoMdCheckboxOutline } from 'react-icons/io';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { BsFillPlayFill } from 'react-icons/bs'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import ReactPlayer from 'react-player';
import CancelIcon from "@material-ui/icons/Cancel";
import { GoChecklist } from 'react-icons/go';
import { AiFillClockCircle } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';
import Recruitment from './featureTabs/Recruitment';
import Onboarding from './featureTabs/Onboarding';
import Scheduling from './featureTabs/Scheduling';
import HourTracking from './featureTabs/HourTracking';
import DataReports from './featureTabs/DataReports';
import Communications from './featureTabs/Communications';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#f0eff4',
    padding: '8% 10% 5% 10%',
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.only('md')]: {
      padding: '8% 0%'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '8%',
      padding: 0
    },
    [theme.breakpoints.up('xl')]: {
      padding: '8% 16% 8% 16%'
    },    
  },
  vidOuter: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #fa935b',
    borderRadius: '35px',
    padding: '8px 25px',
    marginTop: 25,
    marginBottom: 35,
    background: '#fff',
    "&:hover": {
      background: '#fafafa',
      cursor: 'pointer'
    },
  },
  vidIcon: {
    color: '#fa935b',
    fontSize: 25,
  },
  watchVidTxt: {
    marginLeft: 10,
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: '#fa935b',
    fontSize: '18px',
  },
  outerTabs: {
    [theme.breakpoints.down('xs')]: {
      overflowX: 'auto'
    },    
  },
  mainHeader: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '38px',
    width: '75%',
    position: 'relative',
    zIndex: 5,
    lineHeight: 1.3,
    [theme.breakpoints.up('xl')]: {
      width: '90%',
      fontSize: '40px',
    },
    [theme.breakpoints.down('md')]: {
      width: '95%',
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
  mainSubHeader: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '24px',
    width: '65%',
    marginTop: '20px',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.up('xl')]: {
      width: '50%',
      fontSize: '21px',
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
      fontSize: '18px',
      lineHeight: 1.4,
      marginTop: 15,
      paddingLeft: '5%',
      paddingRight: '5%'
    },
  },
  mainSubHeaderFr: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '21px',
    width: '81%',
    marginTop: '20px',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.up('xl')]: {
      width: '60%',
      fontSize: '21px',
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
      fontSize: '17px',
      lineHeight: 1.4,
      marginTop: 15,
      paddingLeft: '5%',
      paddingRight: '5%'
    },
  },
  mainImage: {
    position: 'relative',
    zIndex: 1,
    marginTop: '-100px',
    [theme.breakpoints.down('sm')]: {
     marginTop: 0,
    },
  },
  demoButton: {
    marginLeft: 15,
    minWidth: 160,
    fontWeight: 500,
    background: '#ffff',
    fontSize: 16,
    padding: '9px 20px',
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
  outerFeatures: {
    borderRadius: 6,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    padding: 25,
    width: 1150,
    [theme.breakpoints.down('md')]: {
      width: '100%',
     },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
     },
  },
  tabSection: {
    borderBottom: '1px solid #f1f1f1',
    marginBottom: 25,
    "&:css-heg063-MuiTabs-flexContainer": {
      justifyContent: 'center !important'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      overflowX: 'auto',
     },
  },
  featContainer: {
    borderRadius: 6,
    padding: '6%',
    marginTop: '15%',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    marginRight: 15,
    marginLeft: 15,
    maxWidth: 330,
    paddingTop: '8%',
    paddingBottom: '8%',
    [theme.breakpoints.up("xl")]: {
      paddingTop: '8%',
      paddingBottom: '8%'
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: 'inherit'
    },
  },
  featContainerFr: {
    borderRadius: 6,
    padding: '5%',
    marginTop: '15%',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    backgroundColor: '#ffffff',
    marginRight: 15,
    marginLeft: 15,
    maxWidth: 370,
    paddingTop: '8%',
    paddingBottom: '8%',
    [theme.breakpoints.up("xl")]: {
      paddingTop: '8%',
      paddingBottom: '8%'
    },
    [theme.breakpoints.only("md")]: {
      marginRight: 8,
      marginLeft: 8,
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: 'inherit'
    },
  },
  featureHeader: {
    fontFamily: "Montserrat",
    fontSize: 16,
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 10,
    color: '#fa935b',
    fontWeight: 500,
    [theme.breakpoints.only("sm")]: {
      fontSize: 20,
      marginTop: 30,
      marginBottom: 20,
    },
  },
  featureList: {
    fontFamily: "Montserrat",
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 10,
    color: '#000',
    fontWeight: 500,
    [theme.breakpoints.only("sm")]: {
      fontSize: 18,
    },
  },
  featureListFr: {
    fontFamily: "Montserrat",
    fontSize: 13,
    textAlign: 'left',
    marginLeft: 10,
    color: '#000',
    fontWeight: 500,
    [theme.breakpoints.only("md")]: {
      fontSize: 11
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 18,
    },
  },
  featOuter: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCheck: {
    color: '#fa935b',
    fontSize: 21,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  orangeOuter: {
    color: '#fa935b',
    fontSize: 50
  },
  featureText: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'left',
    marginLeft: 25,
    width: '47%' ,
    [theme.breakpoints.only("sm")]: {
      fontSize: 24,
      fontWeight: 600,
      width: '100%'
    },
  },
  indicator: {
    background: '#fa935b'
  },
  featureTextTwo: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'left',
    marginLeft: 25,
    width: '51%'  ,
    [theme.breakpoints.only("md")]: {
      width: '55%'
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 24,
      fontWeight: 600,
      width: '100%'
    },
  },
  featureTextTwoFr: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'left',
    marginLeft: 25,
    width: '58%' ,
    [theme.breakpoints.only("md")]: {
      width: '65%'
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 24,
      fontWeight: 600,
      width: '100%'
    },
  },
  featureDesc: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 500,
    marginTop: 10,
    textAlign: 'left',
    marginTop: 20,
    [theme.breakpoints.only("md")]: {
      fontSize: 13,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 20,
    },
  },
  featureDescFr: {
    fontFamily: "Montserrat",
    fontSize: 13,
    fontWeight: 500,
    marginTop: 10,
    textAlign: 'left',
    marginTop: 20,
    [theme.breakpoints.only("sm")]: {
      fontSize: 20,
    },
  },
  registerOuter: {
    background: '#fa935b',
    borderRadius: '4px',
    padding: '11px 20px',
    color: '#fff',
    cursor: 'pointer',
    minWidth: 133,
    "&:hover": {
      background: '#fa935b',
      color: '#fff',
      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    },
  },  
  
  butSec: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  butSecFr: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("xs")]: {
      display: 'block'
    },
  },
  registerOuterFr: {
    background: '#fa935b',
    borderRadius: '4px',
    padding: '11px 20px',
    color: '#fff',
    cursor: 'pointer',
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
  signUpButton: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 16,
    color: '#fff'
  }, 
  selectedLabel: {
    color: '#fa935b'
  },
  otherLabel: {
    color: '#000'
  },
  parentButtonStyle: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 16,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      minWidth: 230,
      margin: 'auto',
      marginBottom: 15,
    },
  },
  tabLabelSelected: {
    color: "#fa935b",
    fontWeight: 600,
    fontFamily: 'Montserrat',
    fontSize: 18,
    marginBottom: 10
},
tabLabel: {
    color: "rgba(0,0,0,0.8)",
    fontWeight: 600,
    fontFamily: 'Montserrat',
    fontSize: 18,
    marginBottom: 10
},
reactPlayerStyle: {
  border: '3px solid #f1f1f1',
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
tabIndicatorSelected: {
    backgroundColor: "fa935b",
    height: '3px',
},
tabIndicator: {
    backgroundColor: "black"
},
iconSelectedRec: {
  color: '#fa935b',
  fontSize: 24,
  height: 28
},
iconOtherRec: {
  color: "rgba(0,0,0,0.8)",
  fontSize: 24,
  height: 28
},
iconSelectedOnb: {
  color: '#fa935b',
  fontSize: 27,
  height: 28
},
iconOtherOnb: {
  color: "rgba(0,0,0,0.8)",
  fontSize: 27,
  height: 28
},
iconSelectedSch: {
  color: '#fa935b',
  fontSize: 20,
  height: 28
},
iconOtherSch: {
  color: "rgba(0,0,0,0.8)",
  fontSize: 20,
  height: 28
},
iconSelected: {
  color: '#fa935b',
  fontSize: 22,
  height: 28
},
iconOther: {
  color: "rgba(0,0,0,0.8)",
  fontSize: 22,
  height: 28
}

}));

const SectionTwo = ({
  t,
}) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const languageValue = i18n.language;
  const goToRegistration = () => {
    history.push(`/register`);
  }
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className={classes.mainContainer}>
      <Typography className={languageValue === 'fr' ? classes.mainHeaderFr : classes.mainHeader}>
        {t('designed_help_streamline')} <span style={{color: '#fa935b'}}>{t('end_to_end')}</span>.
      </Typography>
      {/* <Typography className={languageValue === 'fr' ? classes.mainSubHeaderFr : classes.mainSubHeader}>
        {t('all_tools_help_you')}
       </Typography> */}

       {/* Button section */}
       <Grid item xs={12} className={languageValue === 'fr' ? classes.butSecFr : classes.butSec} >
          {/* Watch video */}
          <div onClick={() => handleClickOpen()} className={classes.vidOuter}>
              <BsFillPlayFill className={classes.vidIcon}/>
              <Typography className={classes.watchVidTxt}>{t('watch_a_video')}</Typography>
          </div>       
       </Grid>
       {/* Feature section */}
       <div className={classes.outerFeatures}>
        <div className={classes.tabSection}>
          <Hidden smDown>
          {/* Feature section */}
            <Tabs 
              value={value} 
              onChange={handleChange}
              centered
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#fa935b",
                }
              }} >
                {/* <div className={classes.outerTabs} > */}
                  <Tab icon={<RiFindReplaceLine className={value === 0 ? classes.iconSelectedRec : classes.iconOtherRec} />} label={<span className={value === 0 ? classes.tabLabelSelected : classes.tabLabel}>{t('rec_header')}</span>}/>        
                  <Tab icon={<GoChecklist className={value === 1 ? classes.iconSelectedOnb : classes.iconOtherOnb} />} label={<span className={value === 1 ? classes.tabLabelSelected : classes.tabLabel}>{t('onboard_header')}</span>}/>        
                  <Tab icon={<BsFillCalendarFill className={value === 2 ? classes.iconSelectedSch : classes.iconOtherSch} />} label={<span className={value === 2 ? classes.tabLabelSelected : classes.tabLabel}>{t('sched_header')}</span>}/>        
                  <Tab icon={<AiFillClockCircle className={value === 3 ? classes.iconSelected : classes.iconOther} />} label={<span className={value === 3 ? classes.tabLabelSelected : classes.tabLabel}>{t('hr_tracking_head')}</span>}/>        
                  <Tab icon={<BsBarChartFill className={value === 4 ? classes.iconSelected : classes.iconOther} />} label={<span className={value === 4 ? classes.tabLabelSelected : classes.tabLabel}>{t('data_reports')}</span>}/>        
                  <Tab icon={<BsFillChatDotsFill className={value === 5 ? classes.iconSelected : classes.iconOther} />} label={<span className={value === 5 ? classes.tabLabelSelected : classes.tabLabel}>{t('commu_header')}</span>}/>        
                {/* </div> */}
            </Tabs> 
          </Hidden>
          <Hidden mdUp>
          {/* Feature section */}
          <Tabs 
              value={value} 
              onChange={handleChange}
              // centered
              variant="scrollable"
              scrollButtons="auto"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#fa935b",
                }
              }} >
                {/* <div className={classes.outerTabs} > */}
                  <Tab icon={<RiFindReplaceLine className={value === 0 ? classes.iconSelectedRec : classes.iconOtherRec} />} label={<span className={value === 0 ? classes.tabLabelSelected : classes.tabLabel}>{t('rec_header')}</span>}/>        
                  <Tab icon={<GoChecklist className={value === 1 ? classes.iconSelectedOnb : classes.iconOtherOnb} />} label={<span className={value === 1 ? classes.tabLabelSelected : classes.tabLabel}>{t('onboard_header')}</span>}/>        
                  <Tab icon={<BsFillCalendarFill className={value === 2 ? classes.iconSelectedSch : classes.iconOtherSch} />} label={<span className={value === 2 ? classes.tabLabelSelected : classes.tabLabel}>{t('sched_header')}</span>}/>        
                  <Tab icon={<AiFillClockCircle className={value === 3 ? classes.iconSelected : classes.iconOther} />} label={<span className={value === 3 ? classes.tabLabelSelected : classes.tabLabel}>{t('hr_tracking_head')}</span>}/>        
                  <Tab icon={<BsBarChartFill className={value === 4 ? classes.iconSelected : classes.iconOther} />} label={<span className={value === 4 ? classes.tabLabelSelected : classes.tabLabel}>{t('data_reports')}</span>}/>        
                  <Tab icon={<BsFillChatDotsFill className={value === 5 ? classes.iconSelected : classes.iconOther} />} label={<span className={value === 5 ? classes.tabLabelSelected : classes.tabLabel}>{t('commu_header')}</span>}/>        
                {/* </div> */}
            </Tabs> 
          </Hidden>          
        </div>
        {/* Content for features */}
        {
          value === 0 ?
            <Recruitment />
        : value === 1 ?
            <Onboarding />
        : value === 2 ?
            <Scheduling />
        : value === 3 ?
            <HourTracking />
        : value === 4 ?
            <DataReports />
        : value === 5 ?
            <Communications />
        : null}        
      </div>      
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
            width='99%'
            height="97%"
          />
        </DialogContent>
      </Dialog>          
    </Grid>
  );
};
  
const mapStateToProps = state => ({

});


export default connect(mapStateToProps)(
  withTranslation()(SectionTwo)
)