import {usteState} from 'react'
import Item from './Item'






export default function Form() {

    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            {/* Ajustement de la taille de la div en fonction de la taille de l'écran avec col (12 : très petit, 100%, 10 : petit, 80%, 6 : ecran ordinateur, 50%) */}
         <form action="" className="mb-3">
            <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
            <input type="text" className="form-control" id="todo" />

            <button className="mt-2 btn btn-primary d-block">Envoyer</button>

         </form>

         <h2>Liste des choses à faire :</h2>
         <ul className="list-group">
            <Item />
         </ul>
        </div>

    )



}