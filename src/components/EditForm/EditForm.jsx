import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { EditSchema } from '../../const';
import css from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectModalData } from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import { editContact } from '../../redux/contacts/operations';

export default function EditForm() {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const dispatch = useDispatch();
    const contact = useSelector(selectModalData);
  
    function handleSubmit(values) {
      dispatch(
        editContact({
          id: contact.id,
          ...values,
        })
      );
      dispatch(closeModal());
    }
  
    return (
      <Formik
        initialValues={{
          name: contact.name,
          number: contact.number,
        }}
        onSubmit={handleSubmit}
        validationSchema={EditSchema}
      >
        {formikValid => {
          return (
            <Form className={css.editForm}>
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
  
              <div>
                <button className={css.addBtn} type="submit">
                  Save changes
                </button>
                <button
                  className={css.addBtn}
                  type="button"
                  onClick={() => {
                    dispatch(closeModal());
                  }}
                >
                  Cancel
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  }