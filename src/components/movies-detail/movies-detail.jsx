import React, { useEffect, useState } from "react";
import "./movies-detail.css";
import { Formik, Form } from "formik";
import Input from "../../_commons/input/input";
import { movieValidation } from "./movieValidation";
import Select from "../../_commons/select/select";
import moviesService from "../../services/movies.service";
import genresService from "../../services/genres.service";

const MoviesDetail = (props) => {
  const [buttonForm, setButtonForm] = useState({
    label: "Guardar",
    isSaveOperation: true,
  });
  const [movieForm, setMovieForm] = useState({
    id: "",
    title: "",
    numberInStock: 1,
    dailyRentalRate: 1,
    genreId: "",
  });
  const [genres, setGenres] = useState([
    { _id: "000", name: "Select a genre" },
  ]);

  useEffect(() => {
    (async function () {
      const genres = await genresService.get();
      setGenres((_) => [..._, ...genres]);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const movieId = props.match.params.id;
      if (movieId !== "0") {
        try {
          const movie = await moviesService.getById(movieId);
          setButtonForm({ label: "Editar", isSaveOperation: false });
          setMovieForm({
            id: movie._id,
            title: movie.title,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
            genreId: movie.genre._id,
          });
        } catch (error) {
          props.history.replace("/not-found");
        }
      }
    })();
  }, [props.match.params.id]);

  const onSubmit = (values) => {
    !!buttonForm.isSaveOperation
      ? moviesService.save(values)
      : moviesService.put(values);
    props.history.push("/movies");
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
              <Input
                label="Number in stock"
                name="numberInStock"
                type="number"
              />
              <Input label="Rate" name="dailyRentalRate" type="number" />
              <Select label="Genres" name="genreId" options={genres}></Select>
              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn btn-primary"
              >
                {buttonForm.label}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MoviesDetail;
