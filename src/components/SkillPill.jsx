const SkillPill = ({skill, icon}) => {
    return ( 
        <div className="skill-pill">
            <img src={icon} alt="" />
            <p>{skill}</p>
        </div>
     );
}
 
export default SkillPill;