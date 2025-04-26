import { CheckCircle } from 'lucide-react'

function Skill_section() {
    const skills = [
        {
            category: "Frontend",
            items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"],
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "API REST", "PosgresQL", "SQL"],
        },
        {
            category: "Herramientas",
            items: ["Git", "GitHub", "VS Code", "Figma", "Terminal"],
        },
    ]
    return (
        <div id='skills' data-aos="fade-up" className=' w-screen'>
            <section className="py-16 bg-black/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl font-bold mb-4">My skills</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                        These are the technologies and tools I work with daily to create modern and efficient web solutions.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={index}
                                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:shadow-orange-500/10 hover:shadow-lg "
                            >
                                <h3 className="text-xl font-bold mb-4 text-orange-500">{skillGroup.category}</h3>
                                <ul className="space-y-3 ">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <li key={skillIndex} className="flex items-center gap-2"  >
                                            <CheckCircle className="h-5 w-5 text-orange-500" />
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='mt-12 text-center'>
                        <div className='inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 font-medium'>
                            Always learning new things
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skill_section