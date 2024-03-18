import React from 'react'
import Project from "../components/Project.jsx"
import cocktailFinder from '../../assets/cocktail_finder.png';
import culinaryCanvas from '../../assets/culinary_canvas.png';
import codingQuiz from '../../assets/coding_quiz.png';
import passwordGenerator from '../../assets/password_generator.png';
import noteTaker from '../../assets/note_taker.png';
import workDay from '../../assets/work_day_scheduler_screenshot.png';
//The following code creates a card for each project with values to be sent to the projects component
const Portfolio = () => {
  return (
    <div className="body container">
      <h1 className="text-center title">Portfolio</h1>
      <div className="row mb2">
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://baldwisj.github.io/cocktail_finder/"
            img={cocktailFinder}
            alt="Screenshot of the Cocktail Finder application"
            title="Cocktail Finder"
            repo="https://github.com/baldwisj/cocktail_finder"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://literary-voyagers-5d41db9d0f86.herokuapp.com/"
            img={LiteraryVoyager}
            alt="Screenshot of the Literary Voyager application"
            title="Literary Voyager"
            repo="https://github.com/sambrez/Literary-Voyagers"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="file:///Users/frankiederosier/Downloads/Coding%20student%20quiz/index.html"
            img={codingQuiz}
            alt="Screenshot of the Coding Quiz application"
            title="Coding Quiz"
            repo="https://github.com/Fderosier/Multiple-choice-coding-quiz.git"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://github.com/Fderosier/Random-Password-Generator"
            img={passwordGenerator}
            alt="Screenshot of the Password Generator application"
            title="Password Generator"
            repo="https://fderosier.github.io/Random-Password-Generator/"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://desolate-crag-18753-f78ff9a63d6a.herokuapp.com/"
            img={noteTaker}
            alt="Screenshot of the Note Taker application"
            title="Note Taker"
            repo=" https://fderosier.github.io/Note_taker_Application/"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            deploy="https://fderosier.github.io/Work-Day-Scheduler2/"
            img={workDay}
            alt="Screenshot of the Work Day Scheduler application"
            title="Work Day Scheduler"
            repo="https://github.com/Fderosier/Work-Day-Scheduler2.git"
          />
        </div>
      </div>
    </div>

  )
}

export default Portfolio