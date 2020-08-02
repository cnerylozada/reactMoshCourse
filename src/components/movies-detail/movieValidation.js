import * as Yup from "yup";

export const movieValidation = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(2, "Title must has at least 2 chars"),
  stock: Yup.number()
    .integer("Number in stock must be an integer")
    .required("Number in stock is required")
    .moreThan(0, "Minimum stock number is 1 unit")
    .lessThan(101, "Maximum stock number are 100 units"),
  rate: Yup.number().required("Rate is required"),
  genreId: Yup.string().required("Genre is required"),
});
