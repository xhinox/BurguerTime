import React, { Component } from "react";

import BurgerModal from "./BurgerModal";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  withStyles,
  Modal
} from "@material-ui/core";
import PropTypes from "prop-types";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  media: {
    height: 108,
    width: 100,
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    }
  },
  card: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column"
    }
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: "none",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 50
    }
  }
});

class BurgerCard extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.burger.imageUrl}
          title={this.props.burger.name}
        />
        <CardContent>
          <Typography variant="subtitle2">{this.props.burger.name}</Typography>
          <Typography variant="h6">${this.props.burger.price} mxn</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={this.handleOpen}
            variant="contained"
            component="span"
            size="medium"
            color="primary"
          >
            detalles
          </Button>
          <Modal open={this.state.open} onClose={this.handleClose}>
            <div style={getModalStyle()} className={classes.paper}>
              <BurgerModal burger={this.props.burger} />
            </div>
          </Modal>
        </CardActions>
      </Card>
    );
  }
}

BurgerCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BurgerCard);
