export const Details = ({ info }: any) => {
  if (!info) return <></>;
  const { id, name, avatar, details } = info;
  const { city, company, position } = details;
  return (
    <div className="info" data-id={id}>
      <img className="info-img info-item" src={avatar} alt="avatar" />
      <div className="info-name info-item">{name}</div>
      <div className="info-city info-item">City: {city}</div>
      <div className="info-company info-item">Company: {company}</div>
      <div className="info-position info-item">Position: {position}</div>
    </div>
  );
};
