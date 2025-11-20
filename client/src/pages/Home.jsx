function Home() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-5xl font-bold text-gray-900">
          Hi, I'm <span className="text-blue-600">Your Name</span>.
        </h1>

        <h2 className="text-2xl text-gray-700 mt-4">
          Embedded Software Developer → Aspiring Full-Stack Developer
        </h2>

        <p className="text-gray-600 mt-6 leading-relaxed max-w-2xl">
          I’m transitioning from embedded software engineering into full-stack development.  
          I enjoy building clean, efficient applications using modern tools like  
          <span className="font-semibold"> React, Node.js, and JavaScript.</span>
        </p>

        <div className="flex space-x-4 mt-8">
          <a 
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a 
            href="/contact"
            className="px-6 py-3 border border-gray-400 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>

      </div>
      <section className="py-16 bg-white">
         <div className="max-w-4xl mx-auto px-4">

         <h3 className="text-3xl font-semibold mb-6">Skills</h3>

         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
             <div className="p-4 bg-gray-100 rounded-md text-center font-medium">React</div>
             <div className="p-4 bg-gray-100 rounded-md text-center font-medium">Node.js</div>
             <div className="p-4 bg-gray-100 rounded-md text-center font-medium">JavaScript</div>
             <div className="p-4 bg-gray-100 rounded-md text-center font-medium">HTML & CSS</div>
             <div className="p-4 bg-gray-100 rounded-md text-center font-medium">Git</div>
             <div className="p-4 bg-gray-100 rounded-md text-center font-medium">TailwindCSS</div>
         </div>

        </div>
        </section>
    </section>
    
  );
}

export default Home;
