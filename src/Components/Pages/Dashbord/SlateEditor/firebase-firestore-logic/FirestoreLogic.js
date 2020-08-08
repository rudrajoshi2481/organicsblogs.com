import React,{useContext} from 'react'
import {Button,TextField} from '@material-ui/core'
import {firestore} from '../../../../../firebase/firebaseStater'
import {Authcontext} from '../../../../../Contexts/AuthContext'


function FirestoreLogic() {
    
    const [authData,setAuthData] = useContext(Authcontext)
    const [docId,setDocId] = React.useState('')
    const [blogTitle,setBlogTitle] = React.useState('')
    const [blogIntro,setBlogIntro] = React.useState('')

    const saveToFirestore = (e) => {
        
        e.preventDefault()
        if(blogTitle && blogIntro){
            firestore
            .collection('blogs')
            .add({editorData:authData.editorData,blogTitle:blogTitle,blogIntro:blogIntro})
            .then((doc) => {
                console.log('Document saved successfully with Id' ,doc.id);
                setDocId(doc.id)
            })
            .catch((err) => {
                console.log('Error',err)
            })
        }
    }

    const updateToFirestore = (e) => {
        e.preventDefault()
        firestore
            .collection('blogs')
            .doc(docId)
            .update({editorData:authData.editorData,blogTitle:blogTitle,blogIntro:blogIntro})
            .then((doc) => {
                console.log('Updated', doc);
            })
            .catch(err => {
                console.log('ERROR',err);
            })
    }
    
    return (
        <div>
            {docId ? <Button variant="outlined" color="primary" onClick={(e) => updateToFirestore(e)}>Update</Button>: <Button variant="outlined" color="primary" onClick={(e) => saveToFirestore(e)}>Save</Button>}
            {/* <Button variant="outlined" color="secondary">Delete</Button> */}
            <hr/>
            <TextField multiline type="text" onChange={e => setBlogTitle(e.target.value)} variant="outlined" placeholder="What is Bacteria ?"></TextField>
            <hr />
            <TextField multiline type="text" onChange={e => setBlogIntro(e.target.value)} placeholder="Bacteria is living Organism "></TextField>
            
        </div>
    )
}

export default FirestoreLogic
