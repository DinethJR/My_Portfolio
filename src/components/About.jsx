import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello! I’m Dineth jayawickrama, a passionate BSc (Hons) Computer Science undergraduate with a strong foundation in full-stack development. 
        I thrive on creating dynamic and responsive web applications, leveraging my expertise in HTML, CSS, Java, JavaScript, and React to build seamless user experiences.
        My journey in computer science has equipped me with a solid understanding of database management, enabling me to design and implement efficient data solutions that support robust applications. 
        I love diving into new technologies and staying ahead of industry trends to deliver innovative and effective solutions.
        Whether I’m crafting intuitive front-end interfaces or developing powerful back-end systems, I enjoy every aspect of the development process.
        </p>

        <br />

        <p className="text-xl">
          My goal is to create impactful software that not only meets user needs but also pushes the boundaries of what’s possible.
          When I’m not coding, I enjoy exploring the latest tech gadgets and new technologies, which keeps my creativity and problem-solving skills sharp.
          Feel free to explore my projects below and get in touch if you’d like to collaborate or learn more about my work!
        </p>
      </div>
    </div>
  );
};

export default About;
