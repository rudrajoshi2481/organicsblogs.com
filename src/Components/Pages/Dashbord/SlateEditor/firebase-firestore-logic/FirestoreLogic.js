import React,{useContext} from 'react'
import {Button,TextField} from '@material-ui/core'
import {firestore} from '../../../../../firebase/firebaseStater'
import {Authcontext} from '../../../../../Contexts/AuthContext'


function FirestoreLogic() {
    
    const [authData,setAuthData] = useContext(Authcontext)
    const [docId,setDocId] = React.useState('')
    const saveToFirestore = (e) => {
        
        e.preventDefault()
        firestore
            .collection('blogs')
            .add({editorData:authData.editorData})
            .then((doc) => {
                console.log('Document saved successfully with Id' ,doc.id);
                setDocId(doc.id)
            })
            .catch((err) => {
                console.log('Error',err)
            })
    }

    const updateToFirestore = (e) => {
        e.preventDefault()
        firestore
            .collection('blogs')
            .doc(docId)
            .add({editorData:authData.editorData})
            .then((doc) => {
                console.log('Updated', doc.id);
            })
            .catch(err => {
                console.log('ERROR',err);
            })
    }
    
    return (
        <div>
            {docId ? <Button variant="outlined" color="primary" onClick={(e) => updateToFirestore(e)}>Update</Button>: <Button variant="outlined" color="primary" onClick={(e) => saveToFirestore(e)}>Save</Button>}
            <Button variant="outlined" color="secondary">Delete</Button>
            <hr/>
            <TextField multiline type="text" placeholder="What is Bacteria ?"></TextField>
            
        </div>
    )
}

export default FirestoreLogic
