import React from "react";


function About() {

  return (
    <div className="container mx-auto my-12 p-4 space-y-9 font-bold">
      <h1 className="font-bold text-black  text-3xl">About</h1>
      <p className="text-gray-300">
      A blog, short for weblog, is a frequently updated web page used for personal commentary or business content. Blogs are often interactive and include sections at the bottom of individual blog posts where readers can leave comments.
      </p>
      <h2 className="font-bold text-black  text-3xl">
        Technical Expertise:
      </h2>
      <p className="text-gray-300">
     Frontend:  React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
      </p>
      <h2 className="font-bold text-black  text-3xl">
        Professional Highlights:
      </h2>
      <p className="text-gray-300">
      MERN is one of several variations of the 
MEAN stack
 (MongoDB, Express, Angular, Node), where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any front-end JavaScript framework.
      </p>
  
      <h2 className="font-bold text-black  text-3xl">
        Personal Interests and Inspiration:
      </h2>
      <p className="text-gray-300">
        Beyond his professional achievements, Rittik is a big fan of cricket and
        holds immense admiration for <strong> King Kohli.</strong> His favorite
        person and biggest inspiration is his  Father.
    
      </p>
    </div>
  );
}

export default About;