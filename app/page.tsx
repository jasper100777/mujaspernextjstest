// pages/index.js
import Head from "next/head";

const resumeData = {
  name: "Jasper Raborar",
  title: "Full Stack Developer",
  email: "jasper@example.com",
  phone: "+63 912 345 6789",
  summary: "Passionate developer with experience in WordPress, Drupal, and modern web technologies. Always keen on optimizing workflows and building user-friendly applications.",
  skills: ["Next.js", "React", "WordPress", "Drupal", "PHP", "Tailwind CSS", "Git"],
  experience: [
    {
      role: "Managed Updates Team",
      company: "Pantheon",
      period: "2024 - Present",
      details: "Managed plugin updates, automated deployment workflows, and ensured smooth release cycles."
    },
    {
      role: "Junior Programmer",
      company: "CER Software Package Inc.",
      period: "1998 - 1999",
      details: "Maintained and improved legacy systems, primarily using Visual FoxPro and VB6."
    }
  ]
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{resumeData.name} | Resume</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-600 text-white font-sans p-6 sm:p-12">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-2">{resumeData.name}</h1>
          <p className="text-2xl">{resumeData.title}</p>
        </header>

        <main className="max-w-4xl mx-auto space-y-10">
          <section className="bg-blue-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            <p>{resumeData.summary}</p>
          </section>

          <section className="bg-blue-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Skills</h2>
            <ul className="flex flex-wrap gap-3">
              {resumeData.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-white text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-blue-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-5">Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold">{exp.role} - {exp.company}</h3>
                <span className="italic text-sm">{exp.period}</span>
                <p className="mt-2">{exp.details}</p>
              </div>
            ))}
          </section>
        </main>

        <footer className="mt-12 text-center text-gray-200 text-sm">
          Contact: {resumeData.email} | {resumeData.phone}
        </footer>
      </div>
    </>
  );
}