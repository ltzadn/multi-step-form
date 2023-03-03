export const isAPhoneNumber = textField => {
	return textField.includes(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
};
