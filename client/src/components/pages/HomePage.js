import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import SideMenu from "../layout/Navigation/SideMenu";
import stockFollows from "../layout/HomePage/stockFollows";
import browseMatches from "../layout/HomePage/browseMatches";
import myMatches from "../layout/HomePage/myMatches";

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  }
});

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <SideMenu />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid container spacing={24}>
            <Grid item md={6}>
              <Typography variant="h4" gutterBottom component="h2">
                Following Stocks
              </Typography>
              <stockFollows />
            </Grid>
            <Grid item md={6}>
              <Typography variant="h4" gutterBottom component="h2">
                My Matches
              </Typography>
              <Paper className={classes.paper} />
            </Grid>
            <Grid item md={12}>
              <Typography variant="h4" gutterBottom component="h2">
                Browse Matches
              </Typography>
              <Paper className={classes.paper} />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DashboardPage);
