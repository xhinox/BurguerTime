import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import firebase from "./Firebase";
import BurgerList from "./BurgerList";

const styles = {
  container: {
    padding: 20
  }
};

class Main extends Component {
  state = {
    error: null,
    loading: false,
    lastItem: 0,
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true, error: null });

    try {
      const menu = firebase.database().ref("menu");
      menu.once("value").then(snap => {
        let Burgers = snap.val();
        let newState = [];
        for (let burger in Burgers) {
          newState.push(Burgers[burger]);
        }
        this.setState({
          lastItem: newState.length,
          data: newState,
          loading: false
        });
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    if (this.state.loading === true && !this.state.data) {
      return (
        <React.Fragment>
          <h3>Loading</h3>
        </React.Fragment>
      );
    }

    if (this.state.error) {
      return (
        <React.Fragment>
          <h3>Error</h3>
        </React.Fragment>
      );
    }
    return (
      <Grid container style={styles.container}>
        <Grid item xs>
          <BurgerList burgers={this.state.data} />
        </Grid>
      </Grid>
    );
  }
}

export default Main;
