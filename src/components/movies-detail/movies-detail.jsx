import React, { Component } from 'react';
import './movies-detail.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../_commons/input/input';
import { getMovie } from '../../services/fakeMovieService';
class MoviesDetail extends Component {
  state = {
    title: '',
    numberInStock: 1,
    rate: 1
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    const movie = getMovie(movieId);
    if (!!movie) {
      this.setState({
        title: movie.title,
        numberInStock: movie.numberInStock,
        rate: movie.dailyRentalRate
      })
    }
  }

  validationSchema = Yup.object({
    title: Yup.string().required('Title is required')
      .min(2, 'Title must has at least 2 chars'),
    numberInStock: Yup.number().required('Number in stock is required')
      .moreThan(0, 'Min number is 1')
      .lessThan(101, 'Max number is 100')
  })

  handleSave = values => {
    console.log(values);
    // this.props.history.push('/movies');
  }

  render() {
    console.log(this.state.title)
    return (
      <div className="col-sm-6">
        <h4 className="display-4">
          Movie Form: {this.state.title}
        </h4>
        <Formik
          enableReinitialize
          initialValues={this.state}
          validationSchema={this.validationSchema}
          onSubmit={this.handleSave}
          validateOnMount>
          {formik => {
            return (
              <Form>
                <Input label='Title' name='title' type='text' />
                <Input label='Number in stock' name='numberInStock' type='number' />
                <Input label='Rate' name='rate' type='number' />

                <button disabled={!formik.isValid}
                  type="button" className="btn btn-primary">
                  Save Movie
                </button>

              </Form>
            )
          }}
        </Formik>
      </div>
    );
  }
}

export default MoviesDetail;