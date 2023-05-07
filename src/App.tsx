import './App.css';
import { Field, reduxForm, FormSubmitHandler, InjectedFormProps, WrappedFieldProps, formValueSelector, getFormValues } from "redux-form";

interface FormValues {
  username: string;
}

const postData = (values: FormValues) => {
  console.log(values)
}

let App: React.FC<InjectedFormProps<FormValues>> = ({handleSubmit}) => {
  return (
    <div className="App">
      <form onSubmit={handleSubmit(postData)}>
      <Field
        name="username"
        component="input"
        type="text"
      />
      <button type="submit">
        Submit
      </button>
      </form>
    </div>
  );
}

export default reduxForm<FormValues>({
  form: 'myForm',
  destroyOnUnmount: false,
})(App);
