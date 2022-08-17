export const Card = (props) => {
    return (
        <>
            {props.isOwner ?
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
                </div> :
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
                </div>}
        </>
    )
}