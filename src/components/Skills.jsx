import SkillPill from "./SkillPill";
import * as Icons from "../assets/icons/export.js";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h2 className="purple_subheader">Skills</h2>
      <div className="skill-section">
        <h3>Languages</h3>
        <div className="pill-holder">
          <SkillPill skill={"HTML5"} icon={Icons.HTML5}></SkillPill>
          <SkillPill skill={"CSS3"} icon={Icons.CSS3}></SkillPill>
          <SkillPill skill={"JavaScript"} icon={Icons.JavaScript}></SkillPill>
          <SkillPill skill={"C++"} icon={Icons.CPlusPlus}></SkillPill>
          <SkillPill skill={"Java"} icon={Icons.Java}></SkillPill>
          <SkillPill skill={"Python"} icon={Icons.Python}></SkillPill>
          <SkillPill skill={"Dart"} icon={Icons.Dart}></SkillPill>
        </div>
      </div>
      <div className="skill-section">
        <h3>Frameworks</h3>
        <div className="pill-holder">
          <SkillPill skill={"ReactJS"} icon={Icons.ReactJS}></SkillPill>
          <SkillPill
            skill={"React Router"}
            icon={Icons.ReactRouter}
          ></SkillPill>
          <SkillPill skill={"Bootstrap"} icon={Icons.Bootstrap4}></SkillPill>
          <SkillPill skill={"Flutter"} icon={Icons.Flutter}></SkillPill>
          <SkillPill skill={"Express"} icon={Icons.ExpressJS}></SkillPill>
          <SkillPill skill={"NodeJS"} icon={Icons.NodeJS}></SkillPill>
          <SkillPill skill={"TailwindCSS"} icon={Icons.TailwindCSS}></SkillPill>
          <SkillPill skill={"Numpy"} icon={Icons.Np}></SkillPill>
        </div>
      </div>
      <div className="skill-section">
        <h3>Other Technologies</h3>
        <div className="pill-holder">
          <SkillPill skill={"Figma"} icon={Icons.Figma}></SkillPill>
          <SkillPill skill={"Canva"} icon={Icons.Canva}></SkillPill>
          <SkillPill skill={"GitHub"} icon={Icons.GitHub}></SkillPill>
          <SkillPill skill={"PostGreSQL"} icon={Icons.PostgreSQL}></SkillPill>
          <SkillPill skill={"Vercel"} icon={Icons.Vercel}></SkillPill>
          <SkillPill skill={"AWS"} icon={Icons.AWS}></SkillPill>
          <SkillPill skill={"NPM"} icon={Icons.NPM}></SkillPill>

        </div>
      </div>
    </div>
  );
};

export default Skills;
