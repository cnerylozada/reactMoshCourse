import React, { useEffect, useState } from "react";
import "./movies-detail.css";
import { Formik, Form } from "formik";
import Input from "../../_commons/input/input";
import { movieValidation } from "./movieValidation";
import Select from "../../_commons/select/select";
import moviesService from "../../services/movies.service";
import genresService from "../../services/genres.service";

const MoviesDetail = (props) => {
  const [movieForm, setMovieForm] = useState({
    id: "",
    title: "",
    stock: 1,
    rate: 1,
    genreId: "",
  });
  const [genres, setGenres] = useState([
    { _id: "000", name: "Select a genre" },
  ]);

  useEffect(() => {
    genresService.get().then((genres) => setGenres((_) => [..._, ...genres]));
  }, []);

  useEffect(() => {
    const movieId = props.match.params.id;
    moviesService.getById(movieId).then((movie) => {
      if (!!movie) {
        setMovieForm({
          id: movie._id,
          title: movie.title,
          stock: movie.numberInStock,
          rate: movie.dailyRentalRate,
          genreId: movie.genre._id,
        });
      }
    });
  }, [props.match.params.id]);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="col-sm-6">
      <h4 className="display-4">Movie Form</h4>
      <Formik
        initialValues={movieForm}
        validationSchema={movieValidation}
        onSubmit={onSubmit}
        validateOnMount
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <Input label="Title" name="title" type="text" />
              <Input label="Number in stock" name="stock" type="number" />
              <Input label="Rate" name="rate" type="number" />
              <Select label="Genres" name="genreId" options={genres}></Select>
              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn btn-primary"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MoviesDetail;
