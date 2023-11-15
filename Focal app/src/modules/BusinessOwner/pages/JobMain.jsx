import './JobMain.css'
import JobName from '../components/JobInfo'
import JobInfo from '../components/JobName'
import InputEmployee from '../components/InputEmployee';
/*import Footer from '../../../../src/components/COPMPO/Footer/Footer'
import AllNav from '../../../../src/components/COPMPO/NavBarAll/NavBar'*/

function JobMain() {
  const employee1 = {
    title: [
      "Job Title",
      "Job Role",
      "Job Level",
      "Experience",
      "Education Level",
      "Languages",
      "Age Range",
      "Gender"
    ],
    content: [
      "Art Director",
      "Art Director",
      "Senior Graphic Designer",
      "3 years",
      "College degree",
      "Arabic",
      "25-30 years",
      "Male"
    ]
  };

  const employee2 = {
    title: [
      "Job Type:",
      "City:",
      "Address:",
      "Work Hours:",
      "Salary Range:",
      "Languages"
    ],
    content: [
      "volunteering",
      "Latakia",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Full time",
      "200,000 SYP - 300,000 SYP",
      "JavaScript, Python"
    ]
  };



  return (
    <>
      <div className='Ah-main-job'>
        <JobInfo />
        <InputEmployee title={employee1.title} content={employee1.content} />
        <InputEmployee title={employee2.title} content={employee2.content} showDivider={true} dividerText="A human resources employee was appointed to provide advice during the interview." />
        <JobName />
      </div>
     {/* <footer>
        <Footer />
  </footer>*/}
    </>
  )
}
export default JobMain