import './App.css';

function App() {
  return (
    <>
      <h1 className='text-center mt-3'>Realtime chat app</h1>
      <div className='justify-content-center container mt-5'>
        <div className="row justify-content-md-center" style={{ padding: 0 }}>
          <div className="card" style={{ width: "40rem" }}>
            <div className="card-body">
              <div className='row' style={{ marginRight: 100 }}>
                <div className="card" style={{ backgroundColor: 'blue' }}>
                  <div className="card-body" >
                    <div className='row'>
                      <div className='col-2'>
                        <img src="https://avatars.githubusercontent.com/u/74610360?v=4" className="img-fluid rounded-circle" alt="Cinque Terre" style={{ width: '3rem' }} />
                      </div>
                      <div className='col mt-2'>
                        <h5>RadinTiholov</h5>
                        <p>Hello!! I'am here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row' style={{ marginRight: 100 }}>
                <div className="card" style={{ backgroundColor: 'blue' }}>
                  <div className="card-body" >
                    <div className='row'>
                      <div className='col-2'>
                        <img src="https://avatars.githubusercontent.com/u/74610360?v=4" className="img-fluid rounded-circle" alt="Cinque Terre" style={{ width: '3rem' }} />
                      </div>
                      <div className='col mt-2'>
                        <h5>RadinTiholov</h5>
                        <p>Lololoolo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row' style={{ marginLeft: 100 }}>
                <div className="card" style={{ backgroundColor: 'red' }}>
                  <div className="card-body" >
                    <div className='row'>
                      <div className='col-10 mt-2 text-end'>
                        <h5>RadinTiholov</h5>
                        <p>Lololoolo</p>
                      </div>
                      <div className='col'>
                        <img src="https://avatars.githubusercontent.com/u/74610360?v=4" className="img-fluid rounded-circle" alt="Cinque Terre" style={{ width: '3rem' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className='row'>
                  <div className='col-8'>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="message"
                        name="message"
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className='col-4'>
                    <button type="submit" class="btn btn-primary btn-lg" style={{}}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
