import { JobCard } from "@/components/custom";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { ListFilter } from "lucide-react";

function JobMatch() {
  // temp job data
  const jobs = [
    {
      _id: "68ebbf08befdab22dd32e91d",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2a8c877e4b67d4c93bb",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2aac877e4b67d4c93bc",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2adc877e4b67d4c93bd",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2b0c877e4b67d4c93be",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2b3c877e4b67d4c93bf",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2b8c877e4b67d4c93c0",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2bbc877e4b67d4c93c1",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2bdc877e4b67d4c93c2",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2bfc877e4b67d4c93c3",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2c2c877e4b67d4c93c4",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2c6c877e4b67d4c93c5",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
    {
      _id: "68ebc2c8c877e4b67d4c93c6",
      jobId: "4258062434",
      title: "Full Stack Developer (MERN + Next.js + Python)",
      companyName: "Cloudely, Inc",
      savedJob: false,
      score: {
        overallScore: 75,
        relevanceScore: 70,
        skillsScore: 80,
      },
      url: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
    },
  ];[
            {
                "_id": "68ebbf08befdab22dd32e91d",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2a8c877e4b67d4c93bb",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2aac877e4b67d4c93bc",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2adc877e4b67d4c93bd",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2b0c877e4b67d4c93be",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2b3c877e4b67d4c93bf",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2b8c877e4b67d4c93c0",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2bbc877e4b67d4c93c1",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2bdc877e4b67d4c93c2",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2bfc877e4b67d4c93c3",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2c2c877e4b67d4c93c4",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2c6c877e4b67d4c93c5",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            },
            {
                "_id": "68ebc2c8c877e4b67d4c93c6",
                "jobId": "4258062434",
                "title": "Full Stack Developer (MERN + Next.js + Python)",
                "companyName": "Cloudely, Inc",
                "savedJob": false,
                "score": {
                    "overallScore": 75,
                    "relevanceScore": 70,
                    "skillsScore": 80
                },
                "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4258062434",
                "createdAt": "2025-10-12T14:45:28.511Z"
            }
        ]

  return (
    <section className="overflow-y-hidden h-full w-full p-3">
      {/* filter and title   */}
      <div className="w-full flex items-center justify-between px-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold ">
            Latest Job scan
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">
            This week job scan is the total number of job scan done in the last
            7 days.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant={"outline"}>
            <ListFilter /> Filter
          </Button>
          <Button variant={"secondary"}>
            <ArrowUpDown /> Sort
          </Button>
        </div>
      </div>
      {/* list of jobs */}
      <div className="w-full mt-6 grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-3 gap-4">
        {jobs?.map((job) => (
          <JobCard job={job} key={job._id} />
        ))}
      </div>
    </section>
  );
}

export default JobMatch;
