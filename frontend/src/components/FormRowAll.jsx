const FormRowAll = ({ id, nazwaPL, nazwaENG }) => {
  return (
    <div className="form-row">
      <label htmlFor={`id_${id}`} className="form-label">
        ID
      </label>
      <span id={`id_${id}`} className="form-text">
        {id}
      </span>

      <label htmlFor={`nazwaPL_${id}`} className="form-label">
        Nazwa po polsku
      </label>
      <span id={`nazwaPL_${id}`} className="form-text">
        {nazwaPL}
      </span>

      <label htmlFor={`nazwaENG_${id}`} className="form-label">
        Nazwa po angielsku
      </label>
      <span id={`nazwaENG_${id}`} className="form-text">
        {nazwaENG}
      </span>
    </div>
  );
};

export default FormRowAll;
