import React,{useEffect,useCallback,useState,useMemo,useContext} from 'react'

import {Authcontext} from '../../../../Contexts/AuthContext'


import './css/MainEditor.css'

import {Button} from '@material-ui/core'
import FormatBold from '@material-ui/icons/FormatBold'
import FormatItalic from '@material-ui/icons/FormatItalic'
import FormatUnderlined from '@material-ui/icons/FormatUnderlined'
import BorderColorIcon from '@material-ui/icons/BorderColor';


import {withReact,Slate,Editable} from 'slate-react'
import {createEditor,Transforms,Text,Editor} from 'slate'
import FireStoreLogic from './firebase-firestore-logic/FirestoreLogic'

import {makeCode} from './RenderElement/RenderElement'



function MainEditor() {
    
    
    const editor = useMemo(() => withReact(createEditor()), [])

    const [authData,setAuthData] = useContext(Authcontext)


    const makeBold = (e) => {
       console.log(editor , '555');
       const [match] = Editor.nodes(editor,{
            match:n => n.bold === true
        })
        
        Transforms.setNodes(
            editor,
            // {bold:true},
            {bold:match ? null : true},
            {match:n => Text.isText(n),split:true}
        )
    }

    const makeItalics = (e) => {
        // e.preventDefault()
        const [match] = Editor.nodes(editor,{
            match:n => n.italics === true
        })
        Transforms.setNodes(
            editor,
            {italics:match ? null : true},
            {match:n => Text.isText(n),split:true}
            )
        }
        
        const makeUnderline = (e) => {
            const [match] = Editor.nodes(editor,{
                match:n => n.underline === true
            })
        e.preventDefault()
        Transforms.setNodes(
            editor,
            {underline:match ? null : true},
            {match:n => Text.isText(n),split:true}
        )
    }

    const makeMark = (e) => {
        e.preventDefault()
        Transforms.setNodes(
            editor,
            {mark:true},
            {match:n => Text.isText(n),split:true}
        )
    }
    

    const renderLeaf = React.useCallback(({attributes,children,leaf}) => {
        console.log(leaf);
        if(leaf.bold){
            return (<span {...attributes} style={{fontWeight:leaf.bold ? 'bold' : 'null',fontStyle:leaf.underline ? 'underline' : 'null'}} >{children}</span>)
        }
        else if(leaf.italics){
            return (<span {...attributes} >{children}</span>)
        }
        else if(leaf.underline){
            return (<span style={{fontWeight:leaf.bold ? 'bold' : 'null',textDecoration:leaf.underline ? 'underline' : 'null'}} {...attributes}>{children}</span>)
        }
        else if(leaf.mark){
            return (<span {...attributes}>{children}</span>)
        }
        

        return <span {...attributes}>{children}</span>
    },[])

    return (
        <div className="">
            <div className="all_Buttons">
                <Button variant="outlined" onClick={(e) => makeBold(e)} startIcon={<FormatBold/>}></Button>
                <Button variant="outlined" onClick={(e) => makeItalics(e)} startIcon={<FormatItalic/>}></Button>
                <Button variant="outlined" onClick={(e) => makeUnderline(e)} startIcon={<FormatUnderlined/>}></Button>
                <Button variant="outlined" onClick={(e) => makeMark(e)} startIcon={<BorderColorIcon/>}></Button>
                
            </div>
            <Slate editor={editor} value={authData.editorData} onChange={newValue => {setAuthData({...authData,editorData:newValue})}} >
                <Editable 
                    renderLeaf={renderLeaf}
                    onKeyDown={e => {
                        // e.preventDefault()
                        console.log('Shortcut Key');
                    }}
                />
            </Slate>
            <div className="footer-editor">
                <FireStoreLogic />
            </div>
        </div>
    )
}

export default MainEditor
