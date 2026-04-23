import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/css/LandingPageVersion5.style";
import MainHeaderLP from "../../../../layout/header/MainHeaderLP";
import TopHeaderMP from "../../../../layout/header/TopHeaderMP";
import SectionOneContent from "./SectionOneContent";
import { Grid, Hidden } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import CustomerLogos from "../CustomerLogos";

class SectionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }

  handleEvent = button => {
    this.setState({ componentToRender: button });
  };

  render() {
    const { classes, tabValue} = this.props;
    return (
      
      <Grid container className={classes.firstSectionRoot}>
        {/* Top header */}
        <Grid item xs={12} style={{maxHeight: 65}}>
          <Hidden xsDown>
            <TopHeaderMP
              scrollTo={this.props.scrollTo}
              switchToServeTab={this.props.switchToServeTab}
              swapToVol={this.props.swapToVol}
              enableDropDown
            />      
          </Hidden>    
        </Grid>
        <Grid item xs={12} style={{ maxHeight: 140 }}>
          <MainHeaderLP
            scrollTo={this.props.scrollTo}
            switchToServeTab={this.props.switchToServeTab}
            swapToVol={this.props.swapToVol}
            enableDropDown
          />
        </Grid>
        <Grid item xs={12} className={classes.firstSectonContentContainer}>
          <SectionOneContent
            handleEvent={this.handleEvent}
            value={this.state.componentToRender}
            tabValue={tabValue}
            changeToContactUs={this.props.changeToContactUs}
            changeToRegister={this.props.changeToRegister}
            scrollTo={this.props.scrollTo}
          />
        </Grid>
        <Grid item xs={12}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CustomerLogos />
          </React.Suspense>
        </Grid>
      </Grid>
    );
  }
}

SectionOne.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withTranslation()(withStyles(styles)(SectionOne));
