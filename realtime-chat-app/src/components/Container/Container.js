import { Card } from "../Card/Card"
import { useCollectionData, useCollection } from 'react-firebase-hooks/firestore'
import {useEffect, useRef, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Container = (props) => {
    const messagesRef = props.firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query);
    const [text, setText] = useState('');
    
    const dummy = useRef();
    useEffect(() => {
        dummy.current.scrollIntoView({behavior: 'smooth'})
    },[messages])

    const onSubmit = async (e) => {
        e.preventDefault();
        const {uid, photoURL, displayName} = props.user;

        await messagesRef.add({
            text: text,
            uid: uid,
            ownerPicture: photoURL,
            ownerName: displayName,
            createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
            id: uuidv4()
        })

        setText('');
        dummy.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
            <div className='text-center'>
                <button onClick={props.signOut} type="button" className="btn btn-lg btn-primary">Sign Out</button>
            </div>
            <div className='justify-content-center container mt-5'>
                <div className="row justify-content-md-center" style={{ padding: 0 }}>
                    <div className="card" style={{ width: "40rem" }}>
                        <div className="card-body">
                            {messages?.map(x => <Card key = {x.id} {...x} isOwner = {x.uid === props.user.uid}/>)}
                            <div ref = {dummy}></div>
                            <form onSubmit={onSubmit}>
                                <div className='row'>
                                    <div className='col-8'>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                value = {text}
                                                onChange = {(e) => setText(e.target.value)}
                                                autoFocus
                                            />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <button type="submit" className="btn btn-primary btn-lg" style={{}}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}