
import JobList from "@/components/job-listing-pages/job-list";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Job List  || Superio - Job Borad ReactJs Template",
  description: "Superio - Job Borad ReactJs Template",
};

const JobListPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <JobList />
    </>
  );
};

export default JobListPage
