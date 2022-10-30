import { useState } from 'react';
import Editor from './EditorComponent';

const ArticleRegister = () => {

    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }
    
    return (
        <div>
          <Editor value={desc} onChange={onEditorChange} />
        </div>
    )

}

export default ArticleRegister;