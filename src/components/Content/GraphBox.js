import styles from './GraphBox.module.css'

function GraphBox(props){

    return(
        <div id="graphbox" className={styles.graphbox}>
            <div id="graph" className={styles.graph}>
                <img className={styles.image} src={props.image} alt="๊ทธ๋ํ" />
            </div>
        </div> 
    );
}

export default GraphBox;