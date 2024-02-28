import React from 'react';
import { Gradient, user, FrameCor, MyServices} from "../../assets/Images";
import { TbMailFilled,TbPhone } from "react-icons/tb";
import { Navbar,Footer } from '../layout';







const Home = ({language, setLanguage }) => {


  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />
    <div className=' w-screen mx-auto min-h-screen text-center'>
        <div className='flex flex-col justify-center items-center my-[50px]'>
          <p className=' rounded-full border border-black text-black p-2 m-2 '>Hello!</p>
          {language === "de" ? (
          <h1 className='text-black font-semibold text-8xl'> Ich bin <span className=' text-blue-700 '>Vincent</span>, <br/> UI/UX-Designer </h1>             
          ) : (
            <h1 className='text-black font-semibold text-8xl	'>I'M <span className=' text-blue-700 '>Vicent</span>, <br /> UI/UX Designer </h1>             
          )}
        </div>
      <div className="flex flex-col sm:flex-row h-auto my-8  bg-[#C4C4C4]">
          <div className="flex flex-col justify-center sm:pl-8 sm:mt-8 sm:mb-8 sm:w-full p-8 w-full">
            <div className="w-full p-4 mx-6">
              {language === "de" ? (
                <>
                  <h1 className="sm:text-4xl text-xl font-bold py-4 text-left text-black">
                    Darf ich vorstellen: Vincent Oluwadamilare Akinyoyenu - ein vielseitiger UI/UX-Designer, der seit über 3 Jahren in der Branche tätig ist. Ich bin begeistert von der transformativen Kraft kreativer Designs und liebe es, außergewöhnliche Nutzererlebnisse zu gestalten. <br/> Derzeit schreibe ich meine Masterarbeit in Mediendesign an der Europäischen Fachhochschule Berlin. Derzeit arbeite ich ehrenamtlich als UI/UX-Werkstudentin bei TechLabs. Neben dem Design finde ich Erfüllung im ehrenamtlichen Engagement für umweltfreundliche Zwecke. <br/>

                    Meine Philosophie lässt sich im Wesentlichen mit dem Mantra zusammenfassen: "Alles beginnt mit einer Idee, und am Ende steht die Zufriedenheit der Endnutzer an erster Stelle."
                  </h1>
                   <div className='text-left'>      
                 <button className='bg-blue-700 p-2 rounded-md '>Lebenslauf Herunterladen</button>
              </div>
                </>
                
              ): (
                <>
              <h1 className="sm:text-4xl text-xl font-bold py-4 text-left text-black">
                Meet Vincent Oluwadamilare Akinyoyenu — a versatile UI/UX designer,
                functioning in the industry for 3+ years now. I'm passionate about the 
                transformative power of creative designs and thrive on crafting 
                exceptional user experiences. <br /> I’m currently writing my Master's thesis in <br />
              Media Design at the University of Europe for Applied Sciences, Berlin.
                I currently volunteer as a UI/UX working student at TechLabs. Beyond
                design, I find fulfilment in volunteering for eco-friendly causes. <br />
                <br />
                In essence, my philosophy is encapsulated by the mantra, "Everything starts with an idea, and in the end, the satisfaction of end users is paramount."
              </h1>
              <div className='text-left'>      
                 <button className='bg-blue-700 p-2 rounded-md '>Download Resume</button>
              </div>               
                </>                
              )}
            </div>
          </div>
          <img src={user} alt="user" className="object-cover w-full sm:w-1/2 mt-4 sm:pr-8" style={{ backgroundImage: `url(${Gradient})` }} />
        </div>
      <div className='flex flex-col sm:flex-row h-auto bg-white w-full '>
        <div className='flex flex-col w-full'>
         <h1 className=' font-bold text-left text-black m-4 p-4 text-4xl '>Projects</h1>
         <img src={FrameCor} alt="FrameCor" className='object-cover w-full  my-4 p-0' />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row h-auto '>
         <img src={MyServices} alt="MyServices" className='object-cover w-full my-4 p-0' />        
      </div>
       <div className='flex flex-row sm:flex-row h-auto py-[50px] pb-[100px] bg-white w-full '>
        <div className='flex flex-col w-full pl-[100px] m-[50px] '>
          <h1 className=' font-bold text-left text-black m-2 p-2 text-4xl'>
              {language === "de"
              ? " Begeistert von meinem Portfolio?"
              : " Excited with my portfolio?"
              }</h1>
          <p className=' font-medium text-black m-2 p-2 text-left text-2xl'>
            {language === "de"
              ? " Ich bin bereit, Teil Ihres Teams zu werden. Gemeinsam können wir Ihren Kunden das beste Nutzererlebnis bieten."
              : " I am set to be part of your team. Together we can give your customers the best user experience."
            }</p>
          <div className='text-left my-2 p-2'>      
                 <button className='bg-blue-700 p-2 rounded-md '>
                  {language === "de"
                  ? "Lebenslauf Herunterladen"
                  : "Download Resume"
                  }
                  </button>
           </div>
        </div>
          <div className='flex flex-col w-full m-[50px]'>
                {language === "de" ? (
                  <>
            <div className='flex h-32 mb-4'>
              <div className='w-full h-full rounded-lg text-center justify-center font-medium text-2xl m-2 p-2 flex border-2 border-blue-700'>
                <TbMailFilled className='text-blue-700 text-6xl inline-block mx-4' />
                <p className='text-black tracking-wide'>Chatten Sie mit mir<br/> vindamilare@gmail.com</p>
              </div>
            </div>
            <div className='flex h-32'>
              <div className='w-full h-full rounded-lg text-center justify-center font-medium text-2xl m-2 p-2 flex border-2 border-blue-700 hover:border-6'>
                <TbPhone className='text-blue-700 text-6xl inline-block mx-4' />
                <p className='text-black tracking-wide'>Rufen Sie mich ane <br/> +491786688559</p>
              </div>
            </div>                
                  </>          
            ) : (
                <>
                    <div className='flex h-32 mb-4'>
              <div className='w-full h-full rounded-lg text-center justify-center font-medium text-2xl m-2 p-2 flex border-2 border-blue-700'>
                <TbMailFilled className='text-blue-700 text-6xl inline-block mx-4' />
                <p className='text-black tracking-wide'>Chat with me <br/> vindamilare@gmail.com</p>
              </div>
            </div>
            <div className='flex h-32'>
              <div className='w-full h-full rounded-lg text-center justify-center font-medium text-2xl m-2 p-2 flex border-2 border-blue-700 hover:border-6'>
                <TbPhone className='text-blue-700 text-6xl inline-block mx-4' />
                <p className='text-black tracking-wide'>Call me <br/> +491786688559</p>
              </div>
            </div>                
                </>           
                )}
          </div>   
      </div>
    </div>
  <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Home;
