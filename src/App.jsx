import { useState } from 'react'
import './App.css'
import HeaderNav from './Components/Header-Nav'
import Footer from './Components/Footer-Bar'
import Note from './Components/Note-box'
import Notes from './Components/Notes'

// function CreateNotes(NoteItem) {
//   return (
//     <Note 
//     key={NoteItem.key}
//     title={NoteItem.title}
//     content={NoteItem.content} />
//   )
// }

// console.log(Notes)
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HeaderNav />
      <div className='body'>{Notes.map((NoteItem) => <Note key={NoteItem.key} title={NoteItem.title} content={NoteItem.content} />
        )}</div>
      

      <Footer></Footer>
    </>
  )
}

export default App
