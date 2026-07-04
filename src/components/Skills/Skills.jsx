import "./Skills.css";

import { skills } from "../../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">
        My Skills
      </h2>

      <div className="skills-container">

        {
          skills.map((skill) => (

            <div
              className="skill-card"
              key={skill.id}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>
                {skill.name}
              </h3>

            </div>

          ))
        }

      </div>

    </section>
  );
}

export default Skills;