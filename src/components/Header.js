import styles from './Header.module.css'

function Header(){

    return(
        <div id="header" className={styles.header}>
            <div className={styles.tstyle}>지역,연월별 남,녀 인구 그래프 조회</div>
        </div>
    );
}

export default Header;