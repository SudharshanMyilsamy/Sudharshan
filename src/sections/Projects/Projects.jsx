import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/SudharshanMyilsamy/Budget-Allocation-App"
          p="Budget App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/SudharshanMyilsamy/AGRI-MONITORING"
          p="Agri Monitoring"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/SudharshanMyilsamy/STUDENT-DB"
          p="Student Database"
        />
    
      </div>
    </section>
  );
}

export default Projects;
