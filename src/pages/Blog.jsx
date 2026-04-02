import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "Best Mechanical Project Ideas in Coimbatore",
      desc: "Top mechanical final year project ideas with fabrication and real-time implementation for engineering students.",
    },
    {
      title: "Top IoT Projects for Final Year Students",
      desc: "Explore latest IoT project ideas with sensors, cloud integration, and real-time applications.",
    },
    {
      title: "Best Embedded System Projects in Coimbatore",
      desc: "Embedded project ideas using Arduino, Raspberry Pi and real-time hardware systems.",
    },
    {
      title: "Top Software Project Ideas using Python and AI",
      desc: "Latest AI, Machine Learning, and Python-based final year project ideas for students.",
    },
    {
      title: "Low Cost Final Year Projects in Coimbatore",
      desc: "Affordable mechanical, IoT, embedded and software project solutions for students.",
    },
  ];

  return (
    <div className="container py-5">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        Final Year Project Blogs in Coimbatore
      </h1>

      <p className="text-center">
        CODEX PROJECT shares the latest updates, ideas, and trends in final year
        projects for Mechanical, IoT, Embedded, and Software engineering students
        in Coimbatore.
      </p>

      {/* BLOG LIST */}
      <div className="row mt-5">
        {blogs.map((blog, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow p-3">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button className="btn btn-outline-primary">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SEO CONTENT */}
      <section className="mt-5">
        <h2>Best Final Year Project Center in Coimbatore</h2>
        <p>
          CODEX PROJECT provides the best final year project ideas in Coimbatore
          for mechanical, IoT, embedded, and software domains. Our blog helps
          students explore trending technologies, project ideas, and real-time
          applications with affordable pricing and expert guidance.
        </p>
      </section>

    </div>
  );
};

export default Blog;