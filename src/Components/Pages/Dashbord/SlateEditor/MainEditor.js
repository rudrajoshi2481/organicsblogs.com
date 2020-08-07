import React,{useEffect,useCallback,useState,useMemo} from 'react'

import {Button} from '@material-ui/core'
import FormatBold from '@material-ui/icons/FormatBold'
import FormatItalic from '@material-ui/icons/FormatItalic'
import FormatUnderlined from '@material-ui/icons/FormatUnderlined'
import BorderColorIcon from '@material-ui/icons/BorderColor';


import {withReact,Slate,Editable} from 'slate-react'
import {createEditor,Transforms,Text} from 'slate'

import {makeCode} from './RenderElement/RenderElement'



function MainEditor() {
    
    
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
          },
    ])

    const makeBold = (e) => {
       
        Transforms.setNodes(
            editor,
            // {bold:true},
            {bold:true},
            {match:n => Text.isText(n),split:true}
        )
    }

    const makeItalics = (e) => {
        e.preventDefault()
        Transforms.setNodes(
            editor,
            {italics:true},
            {match:n => Text.isText(n),split:true}
        )
    }

    const makeUnderline = (e) => {
        e.preventDefault()
        Transforms.setNodes(
            editor,
            {underline:true},
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
            return (<span {...attributes} style={{fontWeight:leaf.bold ? 'bold' : 'null'}} >{children}</span>)
        }
        else if(leaf.italics){
            return (<i {...attributes} >{children}</i>)
        }
        else if(leaf.underline){
            return (<u {...attributes}>{children}</u>)
        }
        else if(leaf.mark){
            return (<mark {...attributes}>{children}</mark>)
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
            <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)} >
                <Editable 
                    renderLeaf={renderLeaf}
                    onKeyDown={e => {
                        e.preventDefault()
                        console.log('Shortcut Key');
                    }}
                />
            </Slate>
        </div>
    )
}

export default MainEditor
