interface FormProps {
  title: string;
  onChange: any;
  onSubmit: any;
  formTitle: any;
  formTimeZone: any;
}

export const Form = ({
  title,
  onChange,
  onSubmit,
  formTitle,
  formTimeZone,
}: FormProps) => {
  return (
    <form className={title} onSubmit={onSubmit}>
      <div>
        <div className="title">Название</div>
        <input
          className={`${title}-city input`}
          onChange={onChange}
          name="title"
          value={formTitle}
        />
      </div>
      <div>
        <div className="title">Временная зона</div>
        <input
          className={`${title}-timeZone input`}
          onChange={onChange}
          name="timeZone"
          value={formTimeZone}
        />
      </div>
      <button className={`${title}-button`}>Добавить</button>
    </form>
  );
};
