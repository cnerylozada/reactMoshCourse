import * as Yup from "yup";

export const movieValidation = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(2, "Title must has at least 2 chars"),
  numberInStock: Yup.number()
    .integer("Number in stock must be an integer")
    .required("Number in stock is required")
    .moreThan(0, "Minimum stock number is 1 unit")
    .lessThan(11, "Maximum stock number are 10 units"),
  dailyRentalRate: Yup.number()
    .required("Rate is required")
    .moreThan(0, "Rate must be more than 0")
    .lessThan(6, "Rate must be less than 6"),
  genreId: Yup.string().required("Genre is required"),
});
