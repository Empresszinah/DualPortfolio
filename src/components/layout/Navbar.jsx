import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { profileImage,hamburgerMenu,close } from "../../assets/Images"
import { TbCaretDown,  } from "react-icons/tb";




const Navbar = ({ portfolio, language, setLanguage,  id }) => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;

  const handleClick = () => setToggle(!toggle);

  const handleProjectsClick = () => setIsOpen(!isOpen); 

  const projects = [
    { title: 'Project 1', link: '/project1' },
    { title: 'Project 2', link: '/project2' },
  ];
    
    const changeLanguage = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    localStorage.setItem("language", lang);
   };


    return (
        <div className='mt-6 w-screen h-full bg-[#C4C4C4] '>
            <div className='px-4 md:px-8 xl:px-16 md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center space-x-8 '>
                <Link className='flex ' to="/"> 
                    <img src={profileImage} alt="profileImage" className="w-16 h-16 lg:inline-block" />
                    <span className="mt-2 p-2 font-medium text-4xl text-black">Oluwadamilare Vincent Akinyoyenu</span>
                </Link>
                <div className='hidden md:flex items-center space-x-4 text-black text-xl '>
                    <ul className='flex gap-4'>
                        <li className={location === "/" ? "active" : ""}><Link to="/">Home</Link></li>
                        <li className={location === "/about" ? "active" : ""}><Link to="/about">{language === "de" ? "Über Mich" : "About me"}</Link></li> 
                         <li className={`my-dropdown ${location === "/project/" + id ? "active" : ""}`}>
                            <Link to="#" className='text-black text-lg font-medium flex items-center space-x-2'>
                                Project <TbCaretDown className="h-4 w-4 ml-2 cursor-pointer" />
                            </Link>
                            <div className="my-dropcontent">
                                {portfolio?.items?.map((slug) => (
                                <Link
                                    key={slug.sys.id}
                                    className="my-dropcontent-link"
                                    to={`/project/${slug.sys.id}`}
                                >
                                    {slug.fields.title}
                                </Link>
                                ))}
                            </div>
                            </li>
                        {/* <li className="relative dropdown">
                        <Link
                        to="/projects"
                        className="text-black text-lg font-medium flex items-center space-x-2"
                        onClick={handleProjectsClick}
                        >
                        Projects
                        <TbCaretDown className="h-4 w-4 ml-2 cursor-pointer" />
                        </Link>
                        {isOpen && projects.length > 0 && (
                        <ul className="absolute bg-white top-full left-0 z-10 w-40 mt-2 shadow-md rounded-md">
                            {projects.map((project) => (
                            <li key={project.title}>
                                <Link
                                to={project.link}
                                className="block px-4 py-2 text-black text-lg hover:bg-gray-200"
                                >
                                {project.title}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        )}
                    </li> */}
                    <li className={location === "/contact" ? "active" : ""}><Link to="/contact">{language === "de" ? "Kontakt" : "Contact"}</Link></li>
                    <div className="flex items-center ">
                        <select
                        onChange={changeLanguage}
                        value={language}
                        className="form-select shadow-none"
                        >
                        <option value="en">EN</option>
                        <option value="de">DE</option>
                        </select>
                    </div>
                    </ul>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} alt="menu-icon" />
                </div>
            </div>

            <div className={toggle ? 'absolute z-10 p-4 bg-[#C4C4C4] text-black w-full px-8 md:hidden border-b' : 'hidden'}>
                <ul className='flex flex-col space-y-4'>
                    <li className='p-4 hover:bg-gray-100'><Link to="/home">Home</Link></li> 
                    <li className='p-4 hover:bg-gray-100'><Link to="/about">About me</Link></li> 
                    <li className='p-4 hover:bg-gray-100'><Link to="/projects">Projects</Link></li> 
                    <li className='p-4 hover:bg-gray-100'><Link to="/contact">Contact</Link></li> 
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
