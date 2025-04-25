//ContactForm.jsx
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <Field type="text" name="number" placeholder="Number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
