import { EditorElement } from './components/Editor/editor-element'

function App() {
  return (
    <div id='main' className='flex flex-col gap-5 justify-center items-center bg-blue-500 w-dvw h-dvh'>
      <h1 className='text-3xl font-bold text-white'>Editor.js Custom Plugin Demo</h1>
      <EditorElement className='p-5 pl-16 bg-white w-1/2 h-1/2 rounded-md overflow-y-scroll' />
    </div>
  )
}

export default App
