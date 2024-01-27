import { FormRow, FormRowSelect } from "./";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
//import { useAllFlashcardsContext } from "../pages/AllFlashcards";

const SearchContainer = () => {
  // const { searchValues } = useAllFlashcardsContext();
  const { search } = searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <FormRowSelect
            type="text"
            name="nazwaPL"
            labelText="Nazwa po polsku"
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            type="text"
            name="nazwaENG"
            labelText="Nazwa po angielsku"
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link
            to="/dashboard/all-flashcards"
            className="btn form-btn delete-btn"
          >
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
