export const SignIn = (props) => {
    return (
        <div className='justify-content-center container mt-5'>
            <div className="row justify-content-md-center" style={{ padding: 0 }}>
                <div className="card" style={{ width: "40rem" }}>
                    <div className="card-body text-center">
                        <h3>This is real-time chat app for you. Have fun!</h3>
                        <button onClick = {props.signInWithGoogle} type="button" className="btn btn-lg btn-primary">Sign In (Google)</button>
                    </div>
                </div>
            </div>
        </div>
    )
}