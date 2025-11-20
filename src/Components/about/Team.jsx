import React from 'react'
import {motion} from 'framer-motion'
const Team = () => {
      const team = [
    {
      name: "Feyisayo",
      role: "Founder & Lead Developer",
      image: "/images/daniel.jpg", // replace with your actual image path
      bio: "Passionate about crafting seamless digital experiences and building meaningful products.",
    },
    {
      name: "[Name]",
      role: "Product Designer",
      image: "/images/adaora.jpg",
      bio: "Designs with empathy and precision — turning ideas into stunning visuals.",
    },
    {
      name: "[Name]",
      role: "Frontend Engineer",
      image: "/images/emeka.jpg",
      bio: "Transforms design into delightful, functional, and scalable code.",
    },
    {
      name: "[Name]",
      role: "Marketing Lead",
      image: "/images/kelechi.jpg",
      bio: "Drives brand growth and user engagement through creative storytelling.",
    },
  ];
  return (
<>
    <motion.div 
      initial={{scale:0, opacity:0}}
                whileInView={{scale:1, opacity:1}}
                transition={{duration:1, ease:'easeInOut'}}
    className='mt-40 bg-white'>
     

         <section className="py-20 " id="team">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold primary mb-6">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 tertiary">
          The minds and hearts behind our mission — dedicated to creating impact through innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </motion.div>
</>
  )
}

export default Team