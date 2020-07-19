import React, { Component } from "react";
import "./movies-detail.css";
import { Formik, Form } from "formik";
import { getMovie } from "../../services/fakeMovieService";
import { genres } from "../../services/fakeGenreService";
import Select from "../../_commons/select/select";
import { movieValidation } from "./movieValidation";
class MoviesDetail extends Component {
  state = {
    title: "",
    numberInStock: 1,
    rate: 1,
    genre: "000",
  };

  dropdownOptions = [{ _id: "000", name: "Select an option" }];

  componentDidMount() {
    this.dropdownOptions = [...this.dropdownOptions, ...genres];
    const movieId = this.props.match.params.id;
    const movie = getMovie(movieId);
    if (!!movie) {
      this.setState({
        title: movie.title,
        numberInStock: movie.numberInStock,
        rate: movie.dailyRentalRate,
        genre: this.dropdownOptions.find((_) => _._id === movie.genre._id)._id,
      });
    }
  }

  handleSave = (values) => {
    console.log(values);
    // this.props.history.push('/movies');
  };

  render() {
    console.log(this.state.title);
    return (
      <div className="col-sm-6">
        <h4 className="display-4">Movie Form: {this.state.title}</h4>
        <Formik
          enableReinitialize
          initialValues={this.state}
          validationSchema={movieValidation}
          onSubmit={this.handleSave}
          validateOnMount
        >
          {(formik) => {
            return (
              <Form>
                <Input label="Title" name="title" type="text" />
                <Input
                  label="Number in stock"
                  name="numberInStock"
                  type="number"
                />
                <Input label="Rate" name="rate" type="number" />
                <Select
                  label="Genre"
                  name="genre"
                  options={this.dropdownOptions}
                />

                <button
                  disabled={!formik.isValid}
                  type="button"
                  className="btn btn-primary"
                >
                  Save Movie
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default MoviesDetail;
