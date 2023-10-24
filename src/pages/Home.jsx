import styles from '../styles/home.module.css';
import Search from '../components/Search';
import BodyMain from '../components/BodyMain';
import BodySection from '../components/BodySection';
import BodySearchOne from '../components/BodySearchOne';
import BodySearchTwo from '../components/BodySearchTwo';
import BodyRecomendadoOne from '../components/BodyRecomendadoOne';
import BodyRecomendadoTwo from '../components/BodyRecomendadoTwo';

function Home() {
  return (
    <div className={styles.bodyHome}>
      <Search />
      <div className={styles.bodyProducts}>
        <BodySearchOne />
        <BodyRecomendadoOne />
      </div>
      <div className={styles.bodyProductsTwo}>
        <BodyRecomendadoTwo />
        <BodySearchTwo />
      </div>
      <BodyMain />
      <BodySection />
    </div>
  );
}

export default Home;
