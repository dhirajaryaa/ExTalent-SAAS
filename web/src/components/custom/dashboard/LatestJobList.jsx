import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";

function LatestJobList() {
const jobs = [
  { id: 1, title: "Frontend Developer", company: "Credit Card", score: "25%", matchSkills: ["HTML", "CSS", "JavaScript", "React"] },
  { id: 2, title: "Backend Engineer", company: "TechNova", score: "67%", matchSkills: ["Node.js", "Express", "MongoDB", "REST API"] },
  { id: 3, title: "Full Stack Developer", company: "InnovaSoft", score: "82%", matchSkills: ["React", "Node.js", "MongoDB", "GraphQL"] },
  { id: 4, title: "UI/UX Designer", company: "PixelCraft", score: "45%", matchSkills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"] },
  { id: 5, title: "React Developer", company: "Webify", score: "73%", matchSkills: ["React", "Redux", "TypeScript", "Next.js"] },
  { id: 6, title: "Node.js Engineer", company: "CodeWorks", score: "56%", matchSkills: ["Node.js", "Express", "PostgreSQL", "JWT"] },
  { id: 7, title: "DevOps Engineer", company: "CloudBridge", score: "88%", matchSkills: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
  { id: 8, title: "Software Tester", company: "BugTrack", score: "39%", matchSkills: ["Selenium", "Jest", "Cypress", "Postman"] },
  { id: 9, title: "Database Administrator", company: "DataCore", score: "63%", matchSkills: ["SQL", "MySQL", "MongoDB", "Performance Tuning"] },
  { id: 10, title: "Mobile App Developer", company: "AppNest", score: "78%", matchSkills: ["React Native", "Flutter", "Firebase", "REST API"] },
  { id: 11, title: "System Analyst", company: "CyberLogic", score: "52%", matchSkills: ["System Design", "UML", "SQL", "Documentation"] },
  { id: 12, title: "Frontend Engineer", company: "Designify", score: "61%", matchSkills: ["React", "SASS", "Webpack", "Responsive Design"] },
  { id: 13, title: "Backend Developer", company: "TechPulse", score: "70%", matchSkills: ["Node.js", "GraphQL", "Redis", "Docker"] },
  { id: 14, title: "Software Engineer", company: "CodeWave", score: "83%", matchSkills: ["JavaScript", "Git", "Agile", "API Integration"] },
  { id: 15, title: "Web Developer", company: "NetSprint", score: "49%", matchSkills: ["HTML", "CSS", "React", "Firebase"] },
  { id: 16, title: "React Native Developer", company: "AppMatrix", score: "91%", matchSkills: ["React Native", "Expo", "Redux", "TypeScript"] },
  { id: 17, title: "MERN Stack Developer", company: "DevLaunch", score: "64%", matchSkills: ["MongoDB", "Express", "React", "Node.js"] },
  { id: 18, title: "API Developer", company: "DataLink", score: "57%", matchSkills: ["REST", "Postman", "Swagger", "Express"] },
  { id: 19, title: "Frontend Architect", company: "UIX Labs", score: "84%", matchSkills: ["React", "Next.js", "TypeScript", "Architecture Design"] },
  { id: 20, title: "Cloud Engineer", company: "SkyTech", score: "76%", matchSkills: ["AWS", "Azure", "Terraform", "CI/CD"] },
  { id: 21, title: "AI Developer", company: "NeuroSoft", score: "92%", matchSkills: ["Python", "TensorFlow", "PyTorch", "ML Models"] },
  { id: 22, title: "Machine Learning Engineer", company: "AlgoWorks", score: "87%", matchSkills: ["Python", "Pandas", "Scikit-learn", "NLP"] },
  { id: 23, title: "Blockchain Developer", company: "ChainLinkers", score: "80%", matchSkills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"] },
  { id: 24, title: "Product Designer", company: "BrightUX", score: "53%", matchSkills: ["Figma", "Illustrator", "Design Systems", "Prototyping"] },
  { id: 25, title: "Quality Assurance Engineer", company: "Testify", score: "59%", matchSkills: ["Jest", "Mocha", "API Testing", "Automation"] },
  { id: 26, title: "Software Support Engineer", company: "HelpSoft", score: "42%", matchSkills: ["Debugging", "Customer Support", "SQL", "Logs Analysis"] },
  { id: 27, title: "Game Developer", company: "PlayWorks", score: "90%", matchSkills: ["Unity", "C#", "3D Modeling", "Animation"] },
  { id: 28, title: "Frontend Intern", company: "StarterTech", score: "38%", matchSkills: ["HTML", "CSS", "JavaScript", "Git"] },
  { id: 29, title: "Junior Web Developer", company: "CodeBegin", score: "46%", matchSkills: ["React", "TailwindCSS", "GitHub", "APIs"] },
  { id: 30, title: "Senior Full Stack Engineer", company: "NextGen Labs", score: "95%", matchSkills: ["React", "Node.js", "GraphQL", "Microservices"] }
];


  return (
  <Table>
    <TableCaption>A list of your recent job scan.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="min-w-[20%]">Job Title</TableHead>
        <TableHead>Company</TableHead>
        <TableHead>Match score</TableHead>
        <TableHead>Match skills</TableHead>
        <TableHead>Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {jobs?.map((job) => (
        <TableRow className="hover:bg-muted/50" key={job.id}>
          <TableCell>{job.title}</TableCell>
          <TableCell>{job.company}</TableCell>
          <TableCell>{job.score}</TableCell>
          <TableCell className="space-x-1">
            {job.matchSkills?.slice(0, 2).map((skill, index) => (
              <Badge variant="outline"  className={'text-xs'} key={index}>{skill}</Badge>
            ))}
            {job.matchSkills?.length > 2 && (
              <Badge variant="outline" className={'text-xs'} >+{job.matchSkills.length - 2} more</Badge>
            )}
          </TableCell>
          <TableCell>
            <Button size="sm">
              <ExternalLink className="mr-1" />
              View
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  );
}

export default LatestJobList;
