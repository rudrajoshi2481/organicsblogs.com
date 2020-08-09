import React from 'react'
import * as qs from 'query-string'
import {firestore} from '../../../firebase/firebaseStater'

import {withReact,Slate,Editable} from 'slate-react'
import {createEditor} from 'slate'

function SpecBlogs(props) {
    // console.log(props.match.params);
    const {blog} = props.match.params

    const [blogData,setBlogData] = React.useState([])
    // console.log(blog,'BLOG ');

    const editor = React.useMemo(() => withReact(createEditor()), [])

    

    React.useEffect(() => {
        firestore
            .collection('blogs')
            .where('blogTitle' ,'==',blog)
            .get()
            .then(snap => {
                const totalData = []
                snap.forEach((blog) => {
                    totalData.push(blog.data())
                    console.log(blog.data().editorData,'15151');
                })
                setBlogData(totalData)
            })
            .catch((err) => console.log(err))
    },[])

    
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
        <div>
            <h1>specificBlogs</h1>
{/*             
            {
                JSON.stringify(blogData.map(e => {
                   return e.editorData
                }))
            } */}


    
{
                blogData.map(e => {
                    
                    return (
                        <div>
                            <h1>{e.blogTitle}</h1>
                            <Slate value={e.editorData} editor={editor}> 
                       <Editable
                        renderLeaf={renderLeaf}
                        readOnly
                        
                        /> 
                    </Slate>
                        </div>
                    ) 
                })
            }

{/* 
            {
                blogData.map(e => {
                    
                    return <Slate value={e.editorData} editor={editor}> 
                       <Editable readOnly/> 
                    </Slate> 
                })
            } */}

        </div>
    )
}

export default SpecBlogs
