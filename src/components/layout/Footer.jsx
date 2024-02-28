import React from 'react';
import { userImg } from "../../assets/Images";
import { TbBrandLinkedin } from "react-icons/tb";


const Footer = ({ language, setLanguage }) => {
  return (
    <footer className="bg-[#C4C4C4] flex text-black py-4 px-4 md:px-8 xl:px-16"> 
      <div className="container mx-auto px-4"> 
        <hr className="border-1 border-blue-700 mt-4 w-full" />
        <div className="flex  md:flex-row justify-between items-center mt-4 pr-4"> 
          <div className=" flex mb-4 md:mb-0">
            <img src={userImg} alt="userImg" className=" text-black-500" />
             <p className='text-left p-4 text-black font-medium text-xl	'>Vincent Oluwadamilare Akinyoyenu <br /> Berlin</p>
          </div>
          <div className="m-4 flex flex-col md:flex-row md:ml-6 justify-center pl-[100px]">
            <div className='flex flex-col'>
            <h3 className="mb-2 text-black font-bold">Phone</h3>
            <p>+491786688559 <br/> +4915219319686</p>
            </div>
            <div className='flex flex-col mx-4'>
            <h3 className="mb-2 text-black font-bold">Email</h3>
            <p>vindamilare@gmail.com</p>
            </div>
             <div className='flex flex-col mx-4'>
            <h3 className="mb-2 text-black font-bold">
              {language === "de" 
                  ? " Folge mir"
                  : " Follow Me"
              }</h3>
            <a href="#">
            <TbBrandLinkedin className='text-blue-700 text-6xl'/>
            </a>
            </div>
          </div>
        </div>
        <hr className="border-1 border-blue-700 mt-4 w-full mb-4" />
      </div>
    </footer>
  );
};

export default Footer;
