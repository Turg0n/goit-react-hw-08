import { addContact } from '../../redux/contacts/operations';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ContactSchema, contactFormInitValues } from '../../const';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';


export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={contactFormInitValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {formikValid => {
        return (
          <Form className={css.contactForm}>
            <div>
              <label className={css.formLabel} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                className={clsx(css.formField, {
                  [css.formFieldWarning]:
                    formikValid.touched.name && formikValid.errors.name,
                })}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage
                className={css.alert}
                name="name"
                component="span"
              />
            </div>

            <div>
              <label className={css.formLabel} htmlFor={numberFieldId}>
                Number
              </label>
              <Field
                className={clsx(css.formField, {
                  [css.formFieldWarning]:
                    formikValid.touched.number && formikValid.errors.number,
                })}
                type="tel"
                name="number"
                id={numberFieldId}
              />
              <ErrorMessage
                className={css.alert}
                name="number"
                component="span"
              />
            </div>

            <button className={css.addBtn} type="submit">
              Add contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}