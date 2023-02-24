export const Card = ({game, review}) => (
    <div key={game.id} className="col-auto mx-auto card mx-3 mb-4" style={{maxWidth: '500px', width: '30vw', minWidth: '200px'}} >
      <img src={game.photo} className="card-img-top p-3" alt={game.id} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title flex-grow-1">{game.name}</h5>
        <p className="card-text flex-grow-1">{game.summary}</p>
        <div className="d-flex">
          <span className="fw-bold">{game.similarGame}</span>
          <a href="#" className="btn btn-primary mx-2" onClick={() => review(game)}   >entrer</a>
        </div>
        

      </div>
    </div>
);
