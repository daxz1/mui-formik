import React from 'react';
import { Field, FastField } from 'formik';
import DownshiftSelect from '../DownshiftSelect';
import { getErrorFromField } from '../utils/functions';

const Component = ({ field, form, helperText, ...props }) => {
  const [errorShown, errorText] = getErrorFromField({ field, form });
  const handleChange = value =>
    field.onChange({ target: { value, name: field.name, id: field.id } });
  return (
    <DownshiftSelect
      error={errorShown}
      helperText={errorShown ? errorText : helperText}
      onChange={handleChange}
      onBlur={handleChange}
      {...props}
    />
  );
};

const DsSelectField = ({ fastFieldUsed, ...props }) => {
  const similarProps = { ...props, component: Component };
  return fastFieldUsed ? (
    <FastField {...similarProps} />
  ) : (
    <Field {...similarProps} />
  );
};

DsSelectField.baseProps = {
  margin: 'normal',
  fullWidth: true,
  variant: 'outlined',
};

export default DsSelectField;
