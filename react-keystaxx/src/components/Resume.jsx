import { Helmet } from "react-helmet"

export default function Resume() {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>

            <div className="resume-info">
                <div className="resume-info-wrapper">
                    <h1 style={{paddingBottom: "10px"}}>Mark Simon Z. Bringas</h1>
                    <p style={{paddingBottom: "10px"}}>Baguio City, Philippines 2600</p>
                    <p style={{paddingBottom: "10px"}}>msimonbringas05@gmail.com</p>
                    <div className="social-media" style={{paddingBottom: "10px"}}>
                        <span>
                            {/* Personal GitHub account */}
                            <p className="fa fa-github"></p> <a href="https://github.com/msimonb05" target="_blank" title="Mark's GitHub">GitHub</a> 
                        </span>
                        <span>
                            <p className="fa fa-linkedin"></p> <a href="https://www.linkedin.com/in/mark-simon-bringas/" target="_blank" title="Mark's LinkedIn">LinkedIn</a>
                        </span>
                        <span>
                            <p className="fa fa-facebook"></p> <a href="https://www.facebook.com/msimonb05/" target="_blank" title="Mark's Facebook">Facebook</a>
                        </span>
                        <span>
                            <p className="fa fa-instagram"></p> <a href="https://www.instagram.com/msimonb_05/" target="_blank" title="Mark's Instagram">Instagram</a>
                        </span>
                        <span>
                            <p className="fa fa-twitter"></p> <a href="https://x.com/msimonb_05" target="_blank" title="Mark's Twitter">Twitter/X</a>
                        </span>
                    </div>
                    <hr />
                </div>
                
                <div className="resume-info-wrapper">
                    <h2>Objective</h2>
                    <p>
                        To apply for a position as a web developer or a software engineer where my strong background in statistical analysis, 
                        programming, data visualization, and web development can be applied to achieve success in the computer science industry. 
                        I am a dynamic and detailed-oriented professional who is eager to contribute in a multitude of data science, web, and software methodologies, 
                        committed to continuous knowledge and improvement as a lifelong learner, and aimed at excelling in a collaborative environment that fosters professional growth and creativity.
                    </p>
                    <hr />
                </div>
                
                <div className="resume-info-wrapper">
                    <h2>Education</h2>
                    <div className="resume-info-education">
                        <div>
                            <p><strong>University of Baguio</strong></p>
                            <p><i>Bachelor of Science in Computer Science</i></p>
                        </div>
                        <div className="right-justify">
                            <p><strong>Baguio City, Philippines</strong></p>
                            <p><i>June 2027</i></p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <strong>Relevant Coursework: </strong>
                            Introduction to Computer Science, Introduction to Data Science, Computer Programming (Java),
                            Software Engineering (C++), Data Structures and Algorithms, Probability and Statistics, 
                            Networks and Communications, Web Development, Operating Systems, 
                            Database Systems, Intelligent Systems, Computer Architecture and Organization
                        </li>
                    </ul>
                    <hr />
                </div>

                <div className="resume-info-wrapper">
                    <h2>Projects</h2>
                    <div className="resume-info-project">
                        <div>
                            <p><strong>KeyStaxx</strong></p>
                        </div>
                        <div className="right-justify">
                            <p><i>December 2024</i></p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            Developed a website for a keyboard-selling company using the React framework.
                        </li>
                        <li>
                            Integrated features for product display, user-friendly navigation, and seamless online shopping experience.
                        </li>
                        <li>
                            Focused on front-end development to create a responsive and interactive user interface.
                        </li>
                    </ul>
                </div>

                <div className="resume-info-wrapper">
                    <div className="resume-info-project">
                        <div>
                            <p><strong>React PokéDex</strong></p>
                        </div>
                        <div className="right-justify">
                            <p><i>October 2024</i></p>
                        </div>
                    </div>                    
                    <ul>
                        <li>
                            Developed a Pokémon database website using the React framework.
                        </li>
                        <li>
                            Integrated Axios to fetch data from the PokéAPI and display it dynamically.
                        </li>
                        <li>
                            Implemented search functionality, filtering, and sorting of Pokémon data for an enhanced user experience.
                        </li>
                    </ul>
                </div>

                <div className="resume-info-wrapper">
                    <div className="resume-info-project">
                        <div>
                            <p><strong>Kepler Blog</strong></p>
                            <span style={{userSelect: "none"}}>🔗 </span> <a href="https://kepler-blog.netlify.app/" target="_blank" title="Kepler Blog">https://kepler-blog.netlify.app/</a>
                        </div>
                        <div className="right-justify">
                            <p><i>April 2024</i></p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            Created a space-related research blog showcasing astronomical discoveries using classic HTML, CSS, and JavaScript.
                        </li>
                        <li>
                            Integrated the Astronomy Picture of the Day API to display daily images of space and provide related descriptions.
                        </li>
                        <li>
                            Used the MapTiler SDK JavaScript library to display interactive maps of celestial events and space imagery.
                        </li>
                    </ul>
                    <hr />
                </div>

                <div className="resume-info-wrapper">
                    <h2>Volunteer Experience</h2>
                    <div className="resume-info-experience">
                        <div>
                            <p><strong>University of Baguio Science High School</strong></p>
                            <p><i>Research Assistant</i></p>
                        </div>
                        <div className="right-justify">
                            <p><strong>Baguio City, Philippines</strong></p>
                            <p><i>April 2023 – June 2024</i></p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            Assisted instructors in the completion of a multimethod research that included quantitative data analysis regarding the learning management and scholastic satisfaction of high school students in a certain learning modality.
                        </li>
                        <li>
                            Gathered the survey responses of 408 respondents from junior and senior high school students and calculated for the mean and standard deviation for each survey question using Microsoft Excel.
                        </li>
                        <li>
                            Illustrated pie charts and multivariable Pearson correlation models through images using NumPy and Pandas, and created a dashboard containing previous figures with Django framework.
                        </li>
                    </ul>
                    <hr />
                </div>

                <div className="resume-info-wrapper">
                    <h2>Skills</h2>
                    <ul>
                        <li>
                            <strong>Programming Languages: </strong>
                            Python (NumPy, Pandas, Matplotlib, SciPy, Django), C/C++, Java, SQL (Microsoft SQL Server, SQLite3)
                        </li>
                        <li>
                            <strong>Web Development: </strong>
                            HTML, CSS, JavaScript (MongoDB, Express.js, React.js, Node.js)
                        </li>
                        <li>
                            <strong>Tools/Technology: </strong>
                            Windows, Microsoft Office, Linux (Ubunti, Mint), Git, GitHub, Docker, AWS, Google Suite, PyCharm, Visual Studio Code, Arduino
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}