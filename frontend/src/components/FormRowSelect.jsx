const FormRowSelect = ({ type, name, labelText, onChange, value = "" }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        className="form-select"
        value={value}
        required
      />
    </div>
  );
};
export default FormRowSelect;
