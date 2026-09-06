const Card = ({ elem }) => {
  return (
    <div className="card">
      <img src={elem.image} alt={elem.title} />
      <h2>{elem.title}</h2>
      <h4>{elem.description}</h4>
    </div>
  );
};

export default Card;
