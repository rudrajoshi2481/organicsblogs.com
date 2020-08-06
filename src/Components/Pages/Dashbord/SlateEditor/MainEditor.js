import React,{useEffect,useCallback,useState,useMemo} from 'react'

import {withReact,Slate,Editable} from 'slate-react'
import {createEditor} from 'slate'

import {makeCode} from './RenderElement/RenderElement'



function MainEditor() {
    
    const renderElement = React.useCallback(props => {
        console.log("Worked");
        switch (props.element.type){
            case 'code':
                return <code {...props.attributes}>{props.children}</code>
            default:
                return <p {...props.attributes}>{props.children}</p>
        }
    },[])

    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
          },
    ])


    return (
        <div className="">
                <select>
                    <option>Normal</option>
                    <option>h1</option>
                    <option>h2</option>
                    <option>h3</option>
                </select>
                <button>Bold</button>
                <button>Italics</button>
                <button>UnderLine</button>
                <button>Strike</button>
                <button onClick={() => makeCode()}>Code</button>
                <button>Block Quote</button>
                <select>
                    <option>Danger Notes</option>
                    <option>Warning Notes</option>
                    <option>Success Notes</option>
                </select>
                <button>Highlight</button>
                <button>Add Image</button>
                <button>Add 3d Model</button>
                <button>Add Illustration</button>
                <button>Add Videos</button>
                <button>Add Links</button>
                <select>
                    <option type="disabled">Alignment</option>
                    <option>Left</option>
                    <option>Right</option>
                    <option>center</option>
                </select>

            <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)} >
                <Editable 
                    renderElement={renderElement}
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
