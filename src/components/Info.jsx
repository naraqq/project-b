function Info() {
  return (
    <div className="body">
      <div className="w-full flex justify-center">
        <div className="w-11/12 md:w-9/12 lg:w-8/12 h-full">
          <h3 className="">Онцлох мэдээ</h3>
        </div>
      </div>
      <main className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title">Mountain View</h2>
            <p className="copy">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn">View Trips</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">To The Beach</h2>
            <p className="copy">
              Plan your next beach trip with these fabulous destinations
            </p>
            <button className="btn">View Trips</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Desert Destinations</h2>
            <p className="copy">It's the desert you've always dreamed of</p>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Explore The Galaxy</h2>
            <p className="copy">
              Seriously, straight up, just blast off into outer space today
            </p>
            <button className="btn">Book Now</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Info;
