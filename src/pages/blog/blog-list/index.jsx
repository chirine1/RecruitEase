

import BlogList from "@/components/blog-meu-pages/blog-details/details-content";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Blog List  || Superio - Job Borad ReactJs Template',
  description:
    'Superio - Job Borad ReactJs Template',
  
}



const BlogListpage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />

      <BlogList />
    </>
  );
};

export default BlogListpage