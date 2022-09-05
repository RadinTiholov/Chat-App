export const Card = (props) => {
    const toDateTime = (secs) => {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
    return (
        <>
            {props.isOwner ?
                <div className='row' style={{ marginLeft: 100 }}>
                    <div className="card" style={{ backgroundColor: 'lightgreen' }}>
                        <div className="card-body" >
                            <div className='row'>
                                <div className='col-8 mt-2 text-end'>
                                    <h5>{props.ownerName}</h5>
                                    <p>{props.text}</p>
                                </div>
                                <div className='col'>
                                    <img src={props.ownerPicture} referrerPolicy="no-referrer" className="img-fluid rounded-circle" alt="profile pic" style={{ width: '3rem' ,height: '3rem'}} />
                                    <p className="mx-1">{toDateTime(props.createdAt.seconds).getUTCDate() + "-" + toDateTime(props.createdAt.seconds).getUTCMonth() + '-' + toDateTime(props.createdAt.seconds).getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className='row' style={{ marginRight: 100 }}>
                    <div className="card" style={{ backgroundColor: 'blue' }}>
                        <div className="card-body" >
                            <div className='row'>
                                <div className='col-4'>
                                    <img src={props.ownerPicture} className="img-fluid rounded-circle" alt="Cinque Terre" style={{ width: '3rem', height: '3rem'}} />
                                    <p className="mx-1">{toDateTime(props.createdAt.seconds).getUTCDate() + "-" + toDateTime(props.createdAt.seconds).getUTCMonth() + '-' + toDateTime(props.createdAt.seconds).getFullYear()}</p>
                                </div>
                                <div className='col mt-2'>
                                    <h5>{props.ownerName}</h5>
                                    <p>{props.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}