import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    "Python",
    "Java",
    "React",
    "Spring Boot",
    "Flask",
    "SQL",
    "Shopify",
    "AWS Fundamentals",
    "Testing",
    "Git & GitHub",
    "Agile Collaboration",
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx simple-skill-bx">
              <h2>Core Skills</h2>
              <p>
                I focus on building reliable backend and full stack projects with clean, practical code.
              </p>
              <div className="simple-skill-grid">
                {skills.map((skill) => (
                  <span key={skill} className="simple-skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
