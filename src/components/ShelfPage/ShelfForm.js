import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  descriptionField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class ShelfForm extends Component {
  state = {
    description:'',
    imageUrl:''
  }


  handleURLChange = event => {
    this.setState({
        imageUrl: event.target.value,
    });


handleDescriptionChange = event => {
    this.setState({
        description: event.target.value,
    });
};
handleAddItem = () => {
  axios({
    method: 'POST',
    url: '/api/shelf',
    data:this.state,
  }).then((response) =>{
      //Where should we go after submission?
  });

}

};
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form
          id="input-form"
          className={classes.container}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-name"
            label="Description Required"
            className={classes.textField}
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-date"
            label="Required"
            className={classes.textField}
            value={this.state.imageUrl}
            onChange={this.handleUrlChange}
            margin="normal"
            variant="outlined"
          />
          {/* <TextField
            // required
            id="outlined-tag"
            select
            label="Select a project tag"
            className={classes.textField}
            value={this.state.tag}
            onChange={this.handleTagChange}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select your project type"
            margin="normal"
          >
            {this.props.reduxStore.tags.map(tag => (
              <MenuItem key={tag.id} value={tag.name}>
              {tag.name}
              </MenuItem>
            ))}
          </TextField> */}

          
          <Button
            className={classes.button}
            id="submit-btn"
            onClick={this.handleAddItem}
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

ShelfForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStoreToProps = reduxStore => ({
    reduxStore
  });

export default connect(mapStoreToProps)(withStyles(styles)(ShelfForm));
