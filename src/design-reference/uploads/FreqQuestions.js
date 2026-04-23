import React, { useState, Component } from "react";
import {
	withStyles,
  makeStyles,
	Hidden,
	Grid,
	Typography,
} from "@material-ui/core";
// import styles from "../../../assets/css/LandingPage.style";
import { withTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import ContactUs from "../../../components/ContactUsPopupMainNav/ContactUs.js";
import history from "../../../history/history";



const useStyles = makeStyles((theme) => ({
  secContainer: {
    paddingLeft: '17%',
    paddingRight: '17%',
    paddingTop: '5%',
    paddingBottom: '5%',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '5%',
      paddingRight: '5%'
    },
  },
  freqHeader: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: '3%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '5%',
      marginBottom: '6%'
    },
  },
  freqQuestionsOuter: {
    // paddingLeft: '22%',
    // paddingRight: '22%'
  },
  questionOuter: {
    background: '#f9f9f9',
    marginBottom: 20,
    '&:hover': {
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.16)",
      cursor: 'pointer'
    },
  },
  questionOuterOpen: {
    marginBottom: 20,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
    border: 'solid 1px #e2e0e0',
    '&:hover': {
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.16)",
      cursor: 'pointer'
    },
  },
  questionHead: {
    paddingLeft: '3%',
    paddingRight: '3%',
    justifyContent: 'space-between',
    display: 'flex',
    padding: '2%',
    alignItems: 'center',

  },
  questionRespCon: {
    paddingLeft: '3%',
    paddingRight: '3%',
    justifyContent: 'space-between',
    display: 'flex',
    paddingBottom: '2%',
    alignItem: 'center'
  },
  contactButton: {
    display: 'inline-block'
  },
  questionTxt: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 16,
    color: 'rgba(0,0,0,0.8)',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      width: '95%'
    },    
  },
  questionResp: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 15,
    marginBottom: 15,
  },
  linkStyle: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 15,
    marginBottom: 15,
    color: '#fa935b',
    "&:hover": {
      cursor: 'pointer',
      fontWeight: 600
    }
  },
  iconStyle: {
    [theme.breakpoints.down('xs')]: {
      fontWeight: 15,
    },  
  },
  hypeLink: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 15,
    color: '#fa935b',
    "&:hover": {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }

}));


const FreqQuestions = ({
  t
}) => {
  const classes = useStyles();
  const [openLPQuest1, setOpenLPQuest1] = useState(false);
  const [openLPQuest2, setOpenLPQuest2] = useState(false);
  const [openLPQuest3, setOpenLPQuest3] = useState(false);
  const [openLPQuest4, setOpenLPQuest4] = useState(false);

  const [oppDiff, setOppDiff] = useState(false);
  const [offerInt, setOfferInt] = useState(false);
  const [instMes, setInstMes] = useState(false);
  const [offVols, setOffVols] = useState(false);
  const [autUpd, setAutUpd] = useState(false);


  const [openQues1, setOpenQuest1] = useState(false);
  const [openQues2, setOpenQuest2] = useState(false);
  const [openQues3, setOpenQuest3] = useState(false);
  const [openQues4, setOpenQuest4] = useState(false);
  const [openQues5, setOpenQuest5] = useState(false);
  const [openQues6, setOpenQuest6] = useState(false);
  const [openQues7, setOpenQuest7] = useState(false);
  const [openQues8, setOpenQuest8] = useState(false);
  const [openQues9, setOpenQuest9] = useState(false);
  const [openQues10, setOpenQuest10] = useState(false);

  const handleSignUp = () => {
		history.push(`/register`)
  };

  const goToAbout = () => {
    history.push(`/about-us`);
  }
 

  return (
    <div className={classes.secContainer}>
      <Typography className={classes.freqHeader}>
          {t('frquently_ans_quest')}
      </Typography>
      <Grid container className={classes.freqQuestionsOuter}>
        {/* LP - Question 1 */}
        <Grid item xs={12}>
            <div className={openLPQuest1 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenLPQuest1(!openLPQuest1)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('lp_quest_one')}
                </Typography>
                {/* Arrow */}
                {openLPQuest1 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openLPQuest1 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('lp_ans_one')} 
                   </Typography>
                </div>
              : null}
            </div>
        </Grid>   
        {/* LP - Question 1 */}
        <Grid item xs={12}>
            <div className={offerInt ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOfferInt(!offerInt)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('does_vome_offer_int')}
                </Typography>
                {/* Arrow */}
                {offerInt ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {offerInt ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('does_vome_offer_int_ans')} 
                   </Typography>
                </div>
              : null}
            </div>
        </Grid>
        {/* LP - Question 2 */}
        <Grid item xs={12}>
            <div className={instMes ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setInstMes(!instMes)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('why_mes_so_impt')}
                </Typography>
                {/* Arrow */}
                {instMes ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {instMes ?
                <div className={classes.questionRespCon}>
                  <div>
                    <Typography className={classes.questionResp}>
                      {t('why_mes_so_impt_ans_1')} 
                    </Typography>
                    <br></br>
                    <Typography className={classes.questionResp}>
                      {t('why_mes_so_impt_ans_2')}
                    </Typography>
                    <br></br>
                    <Typography className={classes.questionResp}>
                      {t('why_mes_so_impt_ans_3')} 
                    </Typography>
                    <br></br>
                    <Typography className={classes.questionResp} style={{marginBottom: 0}}>
                      {t('why_mes_so_impt_ans_4')} 
                    </Typography>
                   </div>
                </div>
              : null}
            </div>
        </Grid>     
        {/* LP - Question 2 */}
        <Grid item xs={12}>
            <div className={offVols ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOffVols(!offVols)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('do_all_vols_signup')}
                </Typography>
                {/* Arrow */}
                {offVols ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {offVols ?
                <div className={classes.questionRespCon}>
                  <div>
                    <Typography className={classes.questionResp}>
                      {t('do_all_vols_signup_ans_1')} 
                    </Typography>
                    <Typography className={classes.questionResp}>
                      {t('do_all_vols_signup_ans_2')}
                    </Typography>
                    <Typography className={classes.questionResp}>
                      {t('do_all_vols_signup_ans_3')} 
                    </Typography>
                    <Typography className={classes.questionResp} style={{marginBottom: 0}}>
                      {t('do_all_vols_signup_ans_4')} 
                    </Typography>
                   </div>
                </div>
              : null}
            </div>
        </Grid>                     
        {/* LP - Question 1 */}
        {/* <Grid item xs={12}>
            <div className={openLPQuest3 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenLPQuest3(!openLPQuest3)}>
              <div className={classes.questionHead}>
                Question Header
                <Typography className={classes.questionTxt}>
                  {t('lp_quest_three')}
                </Typography>
                Arrow
                {openLPQuest3 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              Response
              {openLPQuest3 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('lp_ans_three')} 
                   </Typography>
                </div>
              : null}
            </div>
        </Grid>    */}
        <Grid item xs={12}>
            <div className={autUpd ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setAutUpd(!autUpd)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('automatic_updates')}
                </Typography>
                {/* Arrow */}
                {autUpd ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {autUpd ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('automatic_updates_ans')} 
                   </Typography>
                </div>
              : null}
            </div>
        </Grid>                               

        {/* Question 1 */}
        <Grid item xs={12}>
            <div className={openQues1 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenQuest1(!openQues1)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('question_pricing_one')}
                </Typography>
                {/* Arrow */}
                {openQues1 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openQues1 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('answer_pricing_one')} <span className={classes.hypeLink} onClick={() => handleSignUp()}>{t('sign_up_free_low')}</span> {t('answer_pricing_one_two')}
                   </Typography>
                </div>
              : null}
            </div>
        </Grid>
        {/* Question 2 */}
        <Grid item xs={12}>
            <div className={openQues2 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenQuest2(!openQues2)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('question_pricing_two')}
                </Typography>
                {/* Arrow */}
                {openQues2 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openQues2 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('answer_pricing_two')}
                  </Typography>
                </div>
              : null}
            </div>
        </Grid>      
        {/* Question 3 */}
        <Grid item xs={12}>
            <div className={openQues3 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenQuest3(!openQues3)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('question_pricing_three')}
                </Typography>
                {/* Arrow */}
                {openQues3 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openQues3 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('answer_pricing_three')}
                  </Typography>
                </div>
              : null}
            </div>
        </Grid>    
        {/* Question 4 */}
        <Grid item xs={12}>
            <div className={openQues4 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenQuest4(!openQues4)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('question_pricing_four')}
                </Typography>
                {/* Arrow */}
                {openQues4 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openQues4 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('answer_pricing_four')}
                  </Typography>
                </div>
              : null}
            </div>
        </Grid>    
        {/* Question 5 */}
        <Grid item xs={12}>
            <div className={openQues5 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenQuest5(!openQues5)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('question_pricing_five')}
                </Typography>
                {/* Arrow */}
                {openQues5 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openQues5 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('answer_pricing_five')}
                  </Typography>
                </div>
              : null}
            </div>
        </Grid>   

        {/* Question 6 */}
        <Grid item xs={12}>
            <div className={openQues6 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenQuest6(!openQues6)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('question_pricing_six')}
                </Typography>
                {/* Arrow */}
                {openQues6 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openQues6 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('answer_pricing_six')}
                  </Typography>
                </div>
              : null}
            </div>
        </Grid>   
        {/* Question 7 */}
        <Grid item xs={12}>
            <div className={openQues7 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenQuest7(!openQues7)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('question_pricing_seven')}
                </Typography>
                {/* Arrow */}
                {openQues7 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openQues7 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('answer_pricing_seven')} {t('contact_us')} {t('answer_pricing_seven_2')}
                  </Typography>
                </div>
              : null}
            </div>
        </Grid>   
        {/* Question 8 */}
        <Grid item xs={12}>
            <div className={openQues8 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenQuest8(!openQues8)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('question_pricing_eight')}
                </Typography>
                {/* Arrow */}
                {openQues8 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openQues8 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('answer_pricing_eight')}
                  </Typography>
                </div>
              : null}
            </div>
        </Grid>   
        {/* Question 9 */}
        <Grid item xs={12}>
            <div className={openQues9 ? classes.questionOuterOpen : classes.questionOuter} onClick={() => setOpenQuest9(!openQues9)}>
              <div className={classes.questionHead}>
                {/* Question Header */}
                <Typography className={classes.questionTxt}>
                  {t('question_pricing_nine')}
                </Typography>
                {/* Arrow */}
                {openQues9 ?
                  <IoIosArrowUp className={classes.iconStyle}/>
                  :
                  <IoIosArrowDown className={classes.iconStyle}/>
                }
              </div>
              {/* Response */}
              {openQues9 ?
                <div className={classes.questionRespCon}>
                  <Typography className={classes.questionResp}>
                    {t('answer_pricing_nine')} {t('contact_us_low')} {t('answer_pricing_nine_two')} {t('book_demo_low')} {t('answer_pricing_nine_three')}
                  </Typography>
                </div>
              : null}
            </div>
        </Grid>                           



      </Grid>
     </div>

  );
}


export default (withTranslation()(FreqQuestions));
