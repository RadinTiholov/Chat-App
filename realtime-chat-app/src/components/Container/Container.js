import { Card } from "../Card/Card"

export const Container = () => {
    return (
        <div className='justify-content-center container mt-5'>
        <div className="row justify-content-md-center" style={{ padding: 0 }}>
          <div className="card" style={{ width: "40rem" }}>
            <div className="card-body">
              <Card isOwner = {false}/>
              <Card isOwner = {true}/>
              <Card isOwner = {true}/>
              <Card isOwner = {true}/>
              <Card isOwner = {false}/>
              <Card isOwner = {true}/>
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
    )
}