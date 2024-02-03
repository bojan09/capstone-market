const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label htmlFor="displayName">{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
