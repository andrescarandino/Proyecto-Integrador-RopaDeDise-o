import styles from '../styles/home.module.css';
import Search from '../components/Search';
import BodyMain from '../components/BodyMain';
import BodySection from '../components/BodySection';
import BodySearch from '../components/BodySearch';
import BodyRecomendado from '../components/BodyRecomendado';

function Home() {
  return (
    <div className={styles.bodyHome}>
      <Search />
      <div className={styles.bodyProducts}>
        <BodySearch />
        <BodyRecomendado />
      </div>
      <BodyMain />
      <BodySection />
    </div>
  );
}

export default Home;
