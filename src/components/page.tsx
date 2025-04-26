import Layout from './Layout'
import PortafolioHero from './section/PortafolioHero'
import Skill_section from './section/Skill_section'
import Project_section from './section/Project_section'
import Contact_section from './section/Contact_section'

function Page() {
  return (
        <Layout>
             <PortafolioHero/>
             <Skill_section/>
             <Project_section/>
             <Contact_section/>
        </Layout>
  )
}

export default Page