/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.css';

registerLocale('fr', fr);
const DatePicker = ({
  selectedDate,
  onChange,
  isClearable = false,
  showPopperArrow = false,
  isInvalid,
}) => {
  useEffect(() => {
    const datePickerContainer = document.querySelector('.react-datepicker__input-container');

    if (isInvalid) {
      datePickerContainer.classList.add('error');
    } else {
      datePickerContainer.classList.remove('error');
    }
  }, [isInvalid]);
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={onChange}
      isClearable={isClearable}
      showPopperArrow={showPopperArrow}
      dateFormat="dd/MM/yyyy"
      locale="fr"
      placeholderText="Date d'échéance"
      className="red-border"
    />
  );
};

export default DatePicker;
