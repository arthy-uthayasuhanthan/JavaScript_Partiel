import React, {useState} from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
   

function Home(){
    const [ produits ] = useState(['Salade', 'Cornichons','Pain','Lait',])
    const [ ProduitCheckbox, setProduitCheckbox ] = useState([false, false, false, false])
    const [ ProduitSelected, setProduitsSelected ] = useState([])
    const [produit, setProduit] = useState(null)
    const [checked, setChecked] = React.useState(false);
    const {id} = useParams()

    const handleChange = () => {
            setChecked(!checked);
        };

    const produits = [ "Salade", "Cornichons", "Pain", "Lait"  ];
    const listItems = produits.map((produit) =>
         <li> {produit} </li>
    );

    // useEffect(() => {
    //     fetch(`http://localhost:4000/getProduits/${id}`)
    //         .then(response => response.json())
    //         .then( (data) => {
    //             setProduit(data.label)
    //         }  
    //     );

       

return(
    <div>

        <label>Liste de courses :</label>
        {
        produits.map((produit) => (
        <input
          type="checkbox"
          checked={ProduitCheckbox[produit]}
          onChange={(e) => handleInputChange(produit, e.target.value)} 

        />
        ));
       
       
        
        <ul>{listItems}</ul>

    </div>
);
}



export default Home;