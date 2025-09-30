const Projects = () => {
  return (
    <div className="projects">
      <h2 className="purple_subheader">Projects and Certificates</h2>
      <div id="projects_grid">
        <div className="project_card project_card_tall" id="joke_api_card">
          <div className="card_text">
            <h3 className="project_title purple_subheader">Personal Website</h3>
            <p className="project_description">
              This website was built using React and CSS. It showcases my skills
              and projects in a clean and modern design.
            </p>
            <a
              className="project_link"
              href="https://github.com/johndoe/personal-website"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project_card" id="todo_card">
          <div className="card_text">
            <h3 className="project_title purple_subheader">Weather App</h3>
            <p className="project_description">
              A weather forecasting app that provides real-time weather updates
              and forecasts using the OpenWeatherMap API.
            </p>
            <a
              className="project_link"
              href="https://github.com/johndoe/weather-app"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project_card" id="schedule-inator_card">
          <div className="card_text">
            <h3 className="project_title purple_subheader">To-Do List</h3>
            <p className="project_description">
              A simple and intuitive to-do list application that helps users
              manage their tasks efficiently.
            </p>
            <a
              className="project_link"
              href="https://github.com/johndoe/todo-list"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project_card project_card_wide" id="aws_card">
          <div className="card_text">
            <h3 className="project_title purple_subheader">
              AWS Cloud Practitioner
            </h3>
            <p className="project_description">
              Achieved AWS Certified Cloud Practitioner status, demonstrating
              foundational knowledge of AWS Cloud concepts.
            </p>
            <a
              className="project_link"
              href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
