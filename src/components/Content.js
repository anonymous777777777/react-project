import { useState } from 'react';
import styles from './Content.module.css'
import SearchBox from './Content/SearchBox'
import GraphBox from './Content/GraphBox';


function Content(){
    const [image,setImage] = useState("img/default.jpg");
    
    return (
        <div id="content" className={styles.content}>
            <SearchBox onSearch={(image)=>{setImage(image);}}/>
            <GraphBox image={image}/>    
        </div>
    );
}

export default Content;