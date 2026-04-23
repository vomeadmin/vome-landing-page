import React, { Suspense, useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import Helmet from '../../../helmets/helmet';
import LoadingImage from "../../LoadingImage";
import FreqQuestions from "./FreqQuestions";
import SectionBottomNav from "./SectionBottomNav";
import Testimonials from "./Testimonials";
import SecuritySupport from "./SecuritySupport";
import SectionOne from './sectionOne/SectionOne';
import SectionTwo from './SectionTwo';
import MobileAppScreen from './MobileAppScreen';
import SectionThree from './SectionThree';
import CenterLoader from "../../../components/Loaders/centerLoader";
import Api from "../../../constants/Api";
import OpenDialog from "../../../components/Common/OpenDialog";
import { useDialogBox } from "../../../hooks/useDialogBox";
import { loginUserSuccess } from "../../../store/login/actions";
import history from "../../../history/history";


const useStyles = makeStyles((theme) => ({
  containerStyle: {
    width: 700,
    maxWidth: 700
  },
  mainContainerStyle: {
    width: 'auto',
    padding: 0,
    margin: '30px 20px 20px 20px'
  },
  subHeadMessageStyle: {
    textAlign: 'left'
  },
  bottomButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
}));


const Login = ({
  t,
  loginUserSuccess,
  redirectRoutes,
}) => {
  const classes = useStyles()
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [tabValue, setTabValue] = useState(0);
  const [serveTab, setServeTab] = useState(1);
  const [volSwitch, setVolSwitch] = useState(0);
  const [signUpData, setSignUpdata] = useState({});
  const [bottomLoading, setBottomLoading] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const fragment = window.location.hash.substring(1); // Removes the '#'
  const paramsId = new URLSearchParams(fragment);
  const idToken = paramsId.get("id_token");

  useEffect(() => {
    if (idToken && isFirst) {
      handleUserAppleLogin();
    } else if (params && params.code && isFirst) {
      handleUserLogin();
    }
  }, [params]);


  const handleUserLogin = () => {
    setIsFirst(false);
    setBottomLoading(true);
    const dataItem = {
      code: params.code,
      account_type: 'volunteer'
    };

    Api.post(`/auth/google/register/`, dataItem)
      .then(resp => {
        if (resp && resp.data && resp.data.is_user_exist) {
          loginUserSuccess(resp, redirectRoutes);
          setBottomLoading(false);
        } else {
          setSignUpdata(resp.data);
          openDialogBox('volunteerAddSignUpData');
          setBottomLoading(false);
        }
      })
      .catch(err => {
        openDialogBox('successDialog')
        setBottomLoading(false);
      });
  }

  const handleUserAppleLogin = () => {
    setIsFirst(false);
    setBottomLoading(true);
    const dataItem = {
      id_token: idToken,
      is_web: true
    };

    Api.post(`/auth/apple/`, dataItem)
      .then(resp => {
        if (resp && resp.data && resp.data.is_user_exist) {
          loginUserSuccess(resp, redirectRoutes);
          setBottomLoading(false);
        } else {
          setSignUpdata(resp.data);
          openDialogBox('volunteerAddSignUpData');
          setBottomLoading(false);
        }
      })
      .catch(err => {
        setBottomLoading(false);
      });
  }


  const handleOk = () => {
    closeDialogBox();
    history.push('/login')
  }


  return (
    <div>
      <Helmet
        title="Volunteer Management Software | Volunteer Systems | Vome Volunteer"
        description="Volunteer Management Software and Volunteer Management Systems. Vome Volunteer is the all-in-one solution to help you manage and engage volunteers."
      />

      <Suspense fallback={<LoadingImage text={'Landing 1'} />}>
        <SectionOne
          tabValue={tabValue}
          changeToContactUs={() => setTabValue(1)}
          changeToRegister={() => setTabValue(0)}
          switchToServeTab={e => setServeTab(e)}
          volSwitch={volSwitch}
          swapToVol={e => setVolSwitch(e)}
        />
        <SectionTwo />
        <MobileAppScreen />
        <SecuritySupport />
        <Testimonials />
        <SectionThree />
        <FreqQuestions />
        <SectionBottomNav />
      </Suspense>

      {bottomLoading && <CenterLoader />}

      {!!dialogBoxName && (
        <OpenDialog
          componentName={dialogBoxName}
          open={true}
          closeBox={closeDialogBox}
          containerStyle={classes.containerStyle}
          mainContainerStyle={classes.mainContainerStyle}
          subHeadMessageStyle={classes.subHeadMessageStyle}
          errorMessageStyle={classes.subHeadMessageStyle}
          bottomButtonContainer={classes.bottomButtonContainer}
          disabledClose
          signUpData={signUpData}
          urlValue={redirectRoutes}
          okButtonText={t('got_it')}
          successMessage={t('admin_sso_restricted')}
          subHeadMessage={t('sso_restricted_message_1', {
            plan: t('ultimate_plan_text'),
          })}
          errorText={t('sso_restricted_message_2')}
          handleOk={handleOk}
          isHtmlSubHeadText
          isShowIcon
          center
        />
      )
      }
    </div>
  );
};

const mapStateToProps = state => ({
  redirectRoutes: state.login.redirectRoutes,
});

const mapDispatchToProps = dispatch => ({
  loginUserSuccess: (data, redirectRoutes) => dispatch(loginUserSuccess(data, redirectRoutes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Login));
