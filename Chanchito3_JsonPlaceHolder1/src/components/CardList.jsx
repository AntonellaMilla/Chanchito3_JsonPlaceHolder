const CardList = ({ data }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-3">
      {data.map(({ id, title, body }) => (
        <div key={id} className="col">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body.slice(0, 100)}...</p>
              <a href="#" className="btn btn-outline-primary btn-sm">Ver más</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
