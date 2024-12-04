import { Helmet } from "react-helmet"

export default function Resume() {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>

            <div className="resume-info">
                <h1>Mark Simon Z. Bringas</h1>
                <p>Baguio City, Philippines 2600</p>
                <p>msimonbringas05@gmail.com</p>
                <div className="social-media">
                    <span>
                        {/* Personal GitHub account */}
                        <p className="fa fa-github"></p> <a href="https://github.com/msimonb05" target="_blank">GitHub</a> 
                    </span>
                    <span>
                        <p className="fa fa-linkedin"></p> <a href="https://www.linkedin.com/in/mark-simon-bringas/" target="_blank">LinkedIn</a>
                    </span>
                    <span>
                        <p className="fa fa-facebook"></p> <a href="https://www.facebook.com/msimonb05/" target="_blank">Facebook</a>
                    </span>
                    <span>
                        <p className="fa fa-instagram"></p> <a href="https://www.instagram.com/msimonb_05/" target="_blank">Instagram</a>
                    </span>
                    <span>
                        <p className="fa fa-twitter"></p> <a href="https://x.com/msimonb_05" target="_blank">Twitter/X</a>
                    </span>
                </div>
                <hr />
                
                <h2>Objective</h2>
                <p>
                    To apply for a position as a web developer or a software engineer where my strong background in statistical analysis, 
                    programming, data visualization, and web development can be applied to achieve success in the computer science industry. 
                    I am a dynamic and detailed-oriented professional who is eager to contribute in a multitude of data science, web, and software methodologies, 
                    committed to continuous knowledge and improvement as a lifelong learner, and aimed at excelling in a collaborative environment that fosters professional growth and creativity.
                </p>
                <hr />
                
                <h2>Education</h2>
                <p><strong>University of Baguio</strong></p>
                <p><i>Bachelor of Science in Computer Science</i></p>
                <p><strong>Baguio City, Philippines</strong></p>
                <p><i>June 2027</i></p>
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

                <h2>Projects</h2>
                <p><strong>KeyStaxx</strong></p>
                <p><i>December 2024</i></p>
                <ul>
                    <li>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est velit iure voluptate ut doloribus. Rem aut corporis sequi libero beatae. Magnam aliquam, reprehenderit velit dicta dolor voluptas dolorum quam perspiciatis.
                    </li>
                    <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam molestiae laboriosam quos quae officiis veritatis dolorum libero. Consectetur laudantium alias cum ullam molestiae neque accusantium repellendus dolore unde vel?
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque non perferendis officia recusandae, ducimus reprehenderit accusamus. Voluptatum corporis, accusamus dolorem vero ullam quasi, voluptas eum placeat, rerum nam possimus dicta!
                    </li>
                </ul>
                
                <p><strong>React PokéDex</strong></p>
                <p><i>October 2024</i></p>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore nam, incidunt nihil tenetur unde debitis animi nesciunt atque! Iure necessitatibus laborum maxime at eveniet enim aperiam fugit veritatis corrupti!
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure laudantium quam similique repellendus possimus dicta quod ducimus ad nostrum aliquam expedita officia animi voluptate unde ullam voluptatum, ipsam sit eum.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a aliquam doloremque quia praesentium, inventore sed excepturi quidem aliquid corrupti quasi odio, omnis blanditiis voluptatibus perspiciatis. Eius animi magni at.    
                    </li>
                </ul>


                <p><strong>Kepler Blog</strong></p>
                <a href="https://kepler-blog.netlify.app/" target="_blank">https://kepler-blog.netlify.app/</a>
                <p><i>April 2024</i></p>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint facere, quae perferendis incidunt et iusto vitae, laboriosam aspernatur, nesciunt itaque corporis. Mollitia reprehenderit nisi, culpa earum odit necessitatibus eaque.
                    </li>
                    <li>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, eum? Sit optio impedit neque enim. Esse dolores delectus saepe nostrum quibusdam eveniet magni, autem sequi aspernatur minus vero nihil fugiat.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi, in quae voluptate porro unde officia expedita consequuntur doloremque, animi sapiente cumque hic accusamus placeat iste rerum tempore, laboriosam cum.
                    </li>
                </ul>
                <hr />

                <h2>Volunteer Experience</h2>
                <p><strong>University of Baguio Science High School</strong></p>
                <p><i>Research Assistant</i></p>
                <p><strong>Baguio City, Philippines</strong></p>
                <p><i>April 2023 – June 2024</i></p>
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
        </>
    )
}