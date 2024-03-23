import { Bars3BottomRightIcon, EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Profil from './assets/images/foto.jpg';
import data from './data.json';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const shouldBeTransparent = scrollTop === 0; // Ganti kondisi ini sesuai kebutuhan

      setIsScrolled(shouldBeTransparent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [openToggle, setOpenToggle] = useState(false);
  const [form, setForm] = useState({
    name: null,
    email: null,
    message: null,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.name);
    const urlEmail = `mailto:agusalfin1@gmail.com?subject=Message%20From%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    window.location.href = urlEmail;
  };

  return (
    <div className="bg-slate-100">
      <div className={`px-7 lg:px-60 py-5 flex items-center justify-between sticky shadow-md top-0 ${isScrolled ? 'transparent' : 'bg-white'}`}>
        <h1 className="text-lg lg:text-xl font-bold font-roboto text-sky-700">MyProfile</h1>
        <div className="lg:flex hidden">
          <a className="hover:font-semibold w-32 text-end" href="#homepage">
            Homepage
          </a>
          <a className="hover:font-semibold w-32 text-end" href="#about">
            About Me
          </a>
          <a className="hover:font-semibold w-32 text-end" href="#portfolio">
            Portfolio
          </a>
          <a className="hover:font-semibold w-32 text-end" href="#contact">
            Contact
          </a>
        </div>

        <Bars3BottomRightIcon
          className={`h-7 lg:hidden cursor-pointer text-gray-800 ${openToggle ? 'hidden' : 'block'}`}
          onClick={() => {
            setOpenToggle(!openToggle);
          }}
        />

        <XMarkIcon
          className={`h-7 lg:hidden cursor-pointer text-gray-800 ${openToggle ? 'block' : 'hidden'}`}
          onClick={() => {
            setOpenToggle(!openToggle);
          }}
        />

        <div className={` lg:hidden flex flex-col text-gray-800 gap-4 right-7 top-16 bg-white py-5 w-36 pl-5 shadow-md rounded-lg ${openToggle ? 'absolute' : 'hidden'}`}>
          <a href="#homepage" className="hover:font-semibold">
            Homepage
          </a>
          <a href="#about" className="hover:font-semibold">
            About Me
          </a>
          <a href="#portfolio" className="hover:font-semibold">
            Portfolio
          </a>
          <a href="#contact" className="hover:font-semibold">
            Contact
          </a>
        </div>
      </div>

      <div id="homepage" className="flex items-center lg:gap-14 justify-between font-montserrat text-gray-800 py-10 lg:py-32 lg:mb-20 w-full lg:px-60">
        <div className="flex flex-col gap-2 items-center lg:items-start px-7 lg:px-0 lg:w-[80%]">
          <h1 className="font-semibold text-lg lg:text-xl">Halloo!</h1>
          <h1 className="text-3xl lg:text-4xl font-bold">
            I'm <span className="text-sky-700">Alfin Afifan</span>
          </h1>
          <h5 className="font-roboto text-sm lg:text-base -mt-2 text-gray-700">Frontend Web Developer</h5>
          <div className="w-52 h-52 border-8 border-sky-800 rounded-full mt-5 overflow-hidden lg:hidden">
            <img src={Profil} alt="" className="mb-10" />
          </div>
          <p className="text-justify text-sm lg:text-base mt-5 text-gray-700">
            I am a person who loves the challenges and the world of technology. I am committed to continuously learning and keeping up with the developments in programming languages. The reason I love programming is because of the
            challenges inherent in the programming world, especially when encountering errors during the application development process.
          </p>
          <a href="https://drive.google.com/file/d/1BY5Fg9t47yNPweu3NK87TRoaP48Jn6wT/view?usp=sharing" target="_blank" className="bg-sky-700 mt-8 px-5 text-sm lg:text-base hover:bg-sky-800 py-2 rounded-full text-white">
            Curriculum Vitae
          </a>
        </div>
        <div className="w-[50%] border-8 border-sky-800 rounded-full mt-5 overflow-hidden hidden lg:block">
          <img src={Profil} alt="" />
        </div>
      </div>

      <div id="about" className=" flex flex-col items-center font-montserrat text-gray-800 py-20 lg:py-40">
        <div className="px-7 lg:px-60 flex flex-col">
          <div className="text-sm lg:text-base mx-auto">About Me</div>
          <h1 className="text-xl lg:text-2xl font-semibold mx-auto text-sky-800">Let Me Introduce Myself</h1>
          <p className="text-sm lg:text-base text-justify mx-auto mt-5">My full name is Agus Alfin 'Afifan Mahfudh, commonly known as Alfin. At my age that's 22 years old I have some experience, including :</p>
          <div className="flex items-center gap-7 mt-5 justify-start">
            <h1 className="font-semibold w-[30%] ">Front End Web Developer</h1>
            <p className="text-justify w-[70%]">Internship program at Sekawan Media company as a frontend web developer using React Typescript.</p>
          </div>
          <div className="h-0.5 w-full bg-slate-300 my-6"></div>
          <div className="flex items-center gap-7 mt-5 justify-start">
            <h1 className="font-semibold w-[30%] ">Web Developer</h1>
            <p className="text-justify w-[70%]">As a freelance web developer with various projects that have been completed.</p>
          </div>
          <div className="h-0.5 w-full bg-slate-300 my-6"></div>
          <div className="flex items-center gap-7 justify-start">
            <h1 className="font-semibold w-[30%] ">Web Developer</h1>
            <p className="text-justify w-[70%]">Internship program at BAKORWIL 3 Malang instance as a fullstack web developer using React Js, Express Js and MySql.</p>
          </div>
          <div className="h-0.5 w-full bg-slate-300 my-6"></div>
          <div className="flex items-center justify-start gap-7">
            <h1 className="font-semibold w-[30%]">Web Developer</h1>
            <p className="text-justify w-[70%]">Bootcamp as fullstack web developer during 4 months in PT. Arkatama Multi Solusindo using Laravel and MySql.</p>
          </div>
          <div className="h-0.5 w-full bg-slate-300 my-6"></div>
          <div className="flex items-center gap-7 lg:mt-10 justify-start">
            <h1 className="font-semibold w-[30%] ">Graphic Designer Instructor</h1>
            <p className="text-justify w-[70%]">As a freelance graphic designer and graphic design instructor at one of the training institutions called LKP Andalas.</p>
          </div>
        </div>
      </div>

      <div id="portfolio" className="flex flex-col items-center font-montserrat text-white bg-sky-950 py-20 lg:py-32">
        <div className="px-7 lg:px-60 flex flex-col items-center">
          <div className="text-sm lg:text-base">Portfolio</div>
          <h1 className="text-xl lg:text-2xl font-semibold">Project Completed</h1>
          <div className="grid gap-y-5 lg:gap-y-12 grid-cols-1 lg:grid-cols-2 lg:gap-x-20 mt-3 lg:mt-10">
            {data.map((video) => (
              <div className="flex flex-col gap-3 mt-7 items-center" key={video.id}>
                <iframe src={video.link} className="rounded-lg lg:w-full lg:h-60"></iframe>
                <h1 className="font-semibold text-center lg:text-lg">{video.title}</h1>
                <p className="text-center text-sm lg:text-base">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className=" flex flex-col items-center font-montserrat text-gray-800 py-20 lg:py-24">
        <div className="px-7 lg:px-60 flex flex-col items-center w-full">
          <div className="text-sm lg:text-base">Contact</div>
          <h1 className="text-xl lg:text-2xl font-semibold text-sky-800">Contact Me</h1>
          <p className="text-sm lg:text-base text-center mt-5">Above is my identity and experience briefly, please see my cv to see my identities in detail. You can contact me if you need my skill</p>
          <form action="" onSubmit={sendEmail} className="mt-10 text-sm lg:text-base w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="font-semibold text-sky-800">
                Your Name
              </label>
              <input required id="name" type="text" className="w-full bg-slate-300 py-2 px-4 rounded-md" onChange={(e) => setForm({ name: e.target.value })} />
            </div>
            <div className="flex flex-col w-full mt-5">
              <label htmlFor="email" className="font-semibold text-sky-800">
                Your Email
              </label>
              <input required id="email" type="email" className="w-full bg-slate-300 py-2 px-4 rounded-md" onChange={(e) => setForm({ email: e.target.value })} />
            </div>
            <div className="flex flex-col w-full mt-5">
              <label htmlFor="message" className="font-semibold text-sky-800">
                Your Message
              </label>
              <textarea required name="" id="message" cols="30" rows="10" className="w-full bg-slate-300 py-2 px-4 rounded-md" onChange={(e) => setForm({ message: e.target.value })}></textarea>
            </div>
            <button type="submit" className="py-2 px-3 mt-5 rounded-md bg-sky-800 hover:bg-sky-900 text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>

      <footer className="flex flex-col items-center font-montserrat text-white bg-sky-950 mt-10 py-10 text-sm lg:text-base">
        <h1 className="">Made by</h1>
        <h1 className="text-base py-3 font-semibold">Agus Alfin 'Afifan Mahfudh</h1>
        <h1 className="">Using React Js & Tailwind CSS</h1>
      </footer>
    </div>
  );
}

export default App;
