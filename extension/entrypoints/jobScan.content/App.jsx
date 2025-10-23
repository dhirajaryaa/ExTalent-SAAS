import '@/assets/index.css';
import JobScanBtn from './components/JobScanBtn';
import JobResult from './components/JobResult';

function App() {
  const [loading, setLoading] = useState(false);
  const result = {
  "_id": "68ec29f64426ea38a1e49c0d",
  "userId": "68e9178eeb1e10fe98dc4e24",
  "jobId": "4258062434",
  "title": "Full Stack Developer (MERN + Next.js + Python)",
  "companyName": "Cloudely, Inc",
  "savedJob": false,
  "score": {
    "overallScore": 60,
    "relevanceScore": 65,
    "skillsScore": 55
  },
  "scanSummary": "Strong alignment with the MERN stack but gaps in Next.js, TypeScript, Python and cloud/DevOps skills limit immediate suitability.",
  "logo": "https://media.licdn.com/dms/image/v2/C560BAQG6KMZp1zAiTA/company-logo_100_100/company-logo_100_100/0/1630605289074/weareuplers_logo?e=1762992000&v=beta&t=0_CrmO6zor2g8YSL-ASr4SclZdZHtk9ROROi_X8p_Lg",
  "readyToApply": true,
  "matchSkills": [
    { "skill": "React", "score": 90 },
    { "skill": "Node.js", "score": 85 },
    { "skill": "Express.js", "score": 80 },
    { "skill": "MongoDB", "score": 85 },
    { "skill": "JavaScript", "score": 70 }
  ],
  "missingSkills": [
    { "skill": "Next.js", "score": 80 },
    { "skill": "TypeScript", "score": 75 },
    { "skill": "Python", "score": 70 },
    { "skill": "CI/CD pipelines", "score": 65 },
    { "skill": "Docker", "score": 60 },
    { "skill": "AWS/GCP cloud platforms", "score": 60 }
  ],
  "recommendations": [
    "Acquire proficiency in Next.js and server‑side rendering techniques.",
    "Learn TypeScript to meet modern JavaScript standards.",
    "Develop Python skills for backend scripting and micro‑services.",
    "Gain experience with CI/CD pipelines, Docker, and cloud platforms (AWS or GCP).",
    "Seek additional professional experience beyond internships to meet the 3+ year requirement."
  ],
  "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
  "createdAt": "2025-10-12T22:21:42.927Z",
  "updatedAt": "2025-10-12T22:21:42.927Z",
  "__v": 0
}
  return (
    <div className='my-3 font-sans'>
     <JobScanBtn  action={() => setLoading(!loading)} loading={loading}/>
      {loading && <JobResult result={result}/>}
    </div>
  )
}

export default App