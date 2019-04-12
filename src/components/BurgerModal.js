import React, { Component } from "react";
import {
  Card,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  CardContent,
  CardMedia
} from "@material-ui/core";

const styles = {
  root: { display: "flex" },
  image: {
    width: 180,
    height: 264
  },
  content: {
    width: 200
  }
};

class BurgerModal extends Component {
  state = {
    value: ""
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <Card>
        <div style={styles.root}>
          <CardMedia
            style={styles.image}
            image={this.props.burger.imageUrl}
            title={this.props.burger.name}
          />
          <CardContent style={styles.content}>
            <Typography variant="h6">{this.props.burger.name}</Typography>
            <Typography variant="body2">
              {this.props.burger.description}
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                name="size"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="small"
                  control={<Radio color="primary" />}
                  label="S"
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio color="primary" />}
                  label="M"
                />
                <FormControlLabel
                  value="large"
                  control={<Radio color="primary" />}
                  label="L"
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </div>
      </Card>
    );
  }
}

export default BurgerModal;
