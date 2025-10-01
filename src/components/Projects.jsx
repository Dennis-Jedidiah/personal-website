const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="purple_subheader">Projects and Certificates</h2>
      <div id="projects_grid">
        <div className="project_card project_card_tall" id="joke_api_card">
          <a
            className="card_text"
            href="https://dennis-jedidiah.github.io/Alpine.JS_Joke-api/"
          >
            <h3 className="project_title purple_subheader">Joke API</h3>
            <p className="project_description">
              This is an Alpine.js project that fetches and displays random
              jokes from the JokeAPI with a clean, minimalist design. I built
              this to learn Alpine.js and practice making API calls.
            </p>
          </a>
        </div>

        <div className="project_card" id="todo_card">
          <a className="card_text" href="https://to-do-list-7r1l.vercel.app/">
            <h3 className="project_title purple_subheader">To-Do List</h3>
            <p className="project_description">
              A simple and intuitive to-do list application that helps users
              manage their tasks efficiently. I built this to learn CRUD
              operations.
            </p>
          </a>
        </div>

        <div className="project_card" id="schedule-inator_card">
          <a
            className="card_text"
            href="https://github.com/Dennis-Jedidiah/schedule-inator-2"
          >
            <h3 className="project_title purple_subheader">Schedule-Inator</h3>
            <p className="project_description">
              A simple and intuitive scheduling application that helps OTU
              students manage their class schedules efficiently. I built this
              using Python to practice Regex, file handling, and console
              applications.
            </p>
          </a>
        </div>

        <div className="project_card project_card_wide" id="aws_card">
          <div className="card_text">
            <h3 className="project_title purple_subheader">
              AWS Cloud Practitioner
            </h3>
            <p className="project_description">
              I achieved AWS Certified Cloud Practitioner status, demonstrating
              foundational knowledge of AWS Cloud concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
