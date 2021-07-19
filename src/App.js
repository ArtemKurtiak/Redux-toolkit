import {useDispatch, useSelector} from "react-redux";
import {addNote, removeNote} from "./store/slices/notesSlice";
import './App.css'
import {useState} from 'react'

const App = () => {

    const [text, setText] = useState('');
    const [color, setColor] = useState('#fff')

    const notes = useSelector(state => state.notes.notes);
    const dispatch = useDispatch();

    const createNote = () => {
        if (!text.trim().length) {

        } else {
            dispatch(addNote({text: text, back: color}))
            setText('')
        }
    }

    const deleteItem = (id) => {
        dispatch(removeNote({id: id}))
    }

    return <div className={'app'}>
        {notes.length ? <div className={'notes'}>
            {notes.map(el => {
                return <div className={'item'} style={{backgroundColor: el.back}}><div style={{ maxWidth: 160, wordBreak: 'break-all' }} >{el.text}</div>
                    <div className={'delete'} onClick={() => {
                        deleteItem(el.id)
                    }
                    }>
                        <img src="https://img.icons8.com/cotton/2x/delete-sign--v2.png" width={30} height={30} alt=""/>
                    </div>
                </div>
            })}
        </div> : <div className={'no-notes'}>
            No notes now :(
        </div>}
        <br/>
        <div className={'inputs'}>
            <input value={text} type="text" className={'text-input'} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <input type="color" value={color} onChange={(e) => {
                setColor(e.target.value)
            }}/>
        </div>
        <button className={'btn'} onClick={createNote}>Add note
        </button>
    </div>
}

export default App;
