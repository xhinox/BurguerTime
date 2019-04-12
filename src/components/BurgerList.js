import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import BurgerCard from "./BurgerCard";

class BurgerList extends Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-around"
        alignContent="flex-start"
        spacing={8}
      >
        {this.props.burgers.map(burger => {
          return (
            <Grid item xs={12} sm={3} md={2} key={burger.id}>
              <BurgerCard burger={burger} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default BurgerList;
