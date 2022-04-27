import styles from './SearchBox.module.css'
import axios from 'axios';
import { useState } from 'react';

function SearchBox(props) {
    const [keywordList,setKeywordList] = useState([]);
    return (
    <div id="search" className={styles.search}>
        <center>
        <h2>검색</h2>
        <form action="/search" onSubmit={(e)=>{            
            e.preventDefault();
            const year=e.target.year.value;
            const month=e.target.month.value;
            const keyword=e.target.keyword.value;
            const url ="http://localhost:5000/search?"+"year="+year+"&month="+month+"&keyword="+keyword; 
            axios.get(url)
            .then((result)=>{props.onSearch(result['data']);})
            .catch((error)=>{console.log(error)});
            props.onSearch("img/loading.gif")
        }} onClick={(e)=>{
            
            if(e.target.className.indexOf(styles.list)!==-1){//이벤트가 발생한 태그의 class속성값이 list값을 포함하고 있다면
                e.target.parentNode.keyword.value=e.target.value;
                setKeywordList([]);
            }
        
        }}>
            <select name="year">
                {new Array(15).fill()
                .map((value,index)=>{return index+2008})
                .map((value,index)=>{return <option key={index} value={value}>{value+"년"}</option>})}
            </select>
            <select name="month">
                {new Array(12).fill()
                .map((value,index)=>{return index+1})
                .map((value,index)=>{return <option key={index} value={value}>{value+"월"}</option>})}
            </select>
            <input type="submit" value="검색" />
            <input className={styles.keyword} type="text" name="keyword" placeholder="지역을 입력하세요" required onChange={(e)=>{
                if(e.target.value!==''){
                    axios("http://localhost:5000/get_region?region="+e.target.value)
                    .then((result)=>{
                        const json=result['data'];
                        const regions = json['regions'];
                        setKeywordList(regions);
                    })
                    .catch((error)=>{console.log(error)});
                }else{
                    setKeywordList([]);
                }
            }}/>
            {keywordList.map((keyword,index)=>{
                return <input key={index} className={`${styles.keyword} ${styles.list}`} value={keyword} onChange={()=>{}}/>
            })}
        </form>
        </center>
    </div>
    );


}

export default SearchBox;