import {useState} from 'react'
import Item from './Item'
import {v4 as uuidv4} from 'uuid'






export default function Form() {

    const [dataArr, setDataArr] = useState([])

    const [stateInput, setStateInput] = useState()

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id
            // Retourne un tableau qui ne contient pas l'item avec l'id passé en paramètre
        })
        setDataArr(filteredState)
    }

    const linkedInput = e => {
        setStateInput(e) 
    }

    const addToDo = e => {
        e.preventDefault()
        const newArr = [...dataArr]
        //toujours travailler à partir d'une copie du state actuel
        
        const newTodo = {}
        newTodo.txt = stateInput
        newTodo.id = uuidv4()

        newArr.push(newTodo)
        setDataArr(newArr)

        setStateInput("")
        // lié  avec value de input pour two way data binding
    }

    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            {/* Ajustement de la taille de la div en fonction de la taille de l'écran avec col (12 : très petit, 100%, 10 : petit, 80%, 6 : ecran ordinateur, 50%) */}
         <form onSubmit={e => addToDo(e)} className="mb-3">
            <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
            <input 
            value={stateInput}
            onInput={(e) => linkedInput(e.target.value)}
            type="text" 
            className="form-control" 
            id="todo" />

            <button className="mt-2 btn btn-primary d-block">Envoyer</button>

         </form>

         <h2>Liste des choses à faire :</h2>
         <ul className="list-group">
            {dataArr.map((item) => {
                return (
                    <Item 
                    txt={item.txt}
                    key={item.id}
                    id={item.id}
                    delFunc={deleteElement}
                    />
                )
            })}
         </ul>
        </div>

    )



}