import React from 'react'
import { Navbar, Footer } from '../layout';
import { TbMailFilled,TbPhone } from "react-icons/tb";
import {CSSIcon,XdIcon,PsIcon,BoxIcon,AiIcon,InIcon,FigmaIcon,HTML5,MIcon,EyeIcon,Vector,IdIcon,PyramidIcon,gitIcon } from "../../assets/Images";


const About = ({ language, setLanguage }) => {
  
  const icons = [
  { src: CSSIcon, alt: "CSSIcon" },
  { src: XdIcon, alt: "XdIcon" },
  { src: PsIcon, alt: "PsIcon" },
  { src: BoxIcon, alt: "BoxIcon" },
  { src: AiIcon, alt: "AiIcon" },
  { src: InIcon, alt: "InIcon" },
  { src: FigmaIcon, alt: "FigmaIcon" },
  { src: HTML5, alt: "HTML5" },
  { src: MIcon, alt: "MIcon" }
  ];

   const secondIcons = [
  { src: EyeIcon, alt: "EyeIcon" },
  { src: Vector, alt: "Vector" },
  { src: IdIcon, alt: "IdIcon" },
  { src: PyramidIcon, alt: "PyramidIcon" },
  { src: gitIcon, alt: "gitIcon" },
  ];
  

  return (
    <>
    <Navbar
        language={language}
        setLanguage={setLanguage}
      />
      <div className=' w-screen mx-auto min-h-screen text-center'>
        <div className='flex flex-col justify-center items-center my-[50px]'>
          {language === "de" ? (
            <>
          <div className='flex flex-col'>
            <h1 className='font-bold text-4xl	text-black '>Ich freue mich, Sie kennenzulernen</h1>
            <p className='text-2xl font-medium p-4 text-left tracking-wide text-black	'>Ich bin UI/UX-Designer und lebe in Berlin, Deutschland. UX ist zentral für alles, was ich tue. Ich liebe es, <br/> an sinnvollen Projekten mit inspirierenden, kreativen Menschen zu arbeiten, die den Status quo mit<br/> dem Fokus auf User Experience in Frage stellen.</p>              
          </div>
          <div className='flex flex-col bg-[#100BF5] text-white m-[50px] p-[50px]  justify-center '>
            <h1 className='text-2xl font-bold	'>Wie ich Design als Problemlösungsinstrument einsetze.</h1>
            <div className='grid grid-cols-2 gap-2 text-justify'>
              <div className='mt-6 text-2xl font-medium	p-4'>
                <h1 className='mb-4'>1. Strategie und Forschung</h1>
                <p>Der erste Schritt bei jedem Projekt besteht darin, den Kunden besser zu verstehen. Es lohnt sich, diese Arbeit zu erledigen, bevor auch nur ein einziges Pixel bewegt wird, um ein stärkeres Gefühl des Vertrauens zu schaffen und jedem Kunden zu zeigen, dass mir sein Geschäft und sein langfristiger Erfolg am Herzen liegen.</p>
              </div>
              <div className='mt-6 text-2xl font-medium	p-4'>
                <h1 className='mb-4'>2. UX-Design und Interaktionsdesign</h1>
                <p>Das Design eines Projekts ist ähnlich, wenn auch möglicherweise nicht bedeutender als das, wie es aussieht und funktioniert. Ich verwende Design Thinking in jedem Projekt, um die beste nutzerzentrierte Lösung zu finden. Meine Designlösung konzentriert sich auf die Erfahrungen der Benutzer und nicht auf mich selbst, d.h. Voreingenommenheit kommt nicht in Frage.  </p>
              </div>
              <div className='mt-2 text-2xl font-medium	p-4'>
                <h1 className='mb-4'>3. UI-Entwurf & Prototyping</h1>
                <p> Wunderschöne UI-Designs können je nach Benutzer abstrakt sein. Ich genieße die Herausforderung, generell schöne Designs zu entwerfen, die zusätzlich die Miniaturkommunikation beeinflussen. Mit visuellem Design und Prototyping habe ich die Möglichkeit, den Stil meines Kunden zu treffen.</p>
              </div>
              <div className='mt-2 text-2xl font-medium	p-4'>
                <h1 className='mb-4'>4. Benutzertests und Iteration</h1>
                <p>Ein Produkt zu entwerfen und es in die Welt zu setzen, ist außerordentlich erfüllend. Dennoch ist es wesentlich befriedigender, Kritik anzunehmen und Korrekturen vorzunehmen, um das Produkt an die Bedürfnisse der Nutzer anzupassen. Es ist wichtig herauszufinden, wie man den Fortschritt messen und iterieren kann.</p>
              </div>
            </div>
          </div>                 
            </>
          ) : (
              <>
            <div className='flex flex-col'>
            <h1 className='font-bold text-4xl	text-black '>I am  happy to meet you</h1>
            <p className='text-2xl font-medium p-4 text-left tracking-wide text-black	'>I'm a UI/UX designer living in Berlin, Germany. UX is central to everything I do. I love to work on <br/> meaningful projects with inspiring, creative people that challenge the status quo with a focus on user<br/> experience.</p>              
          </div>
          <div className='flex flex-col bg-[#100BF5] text-white m-[50px] p-[50px]  justify-center '>
            <h1 className='text-2xl font-bold	'>How I leverage design as a problem-solving tool</h1>
            <div className='grid grid-cols-2 gap-2 text-justify'>
              <div className='mt-6 text-2xl font-medium	p-4'>
                <h1 className='mb-4'>1. Strategy & Research</h1>
                <p>The first step in any project is to get a better understanding of the client. The worth in accomplishing this work prior to moving a solitary pixel is to lay out a more prominent feeling of trust and to show every client that I care about their business and long-haul achievement.</p>
              </div>
              <div className='mt-6 text-2xl font-medium	p-4'>
                <h1 className='mb-4'>2. UX Design & Interaction Design</h1>
                <p>The design of a project is similar, while possibly not more significant than what it looks like and works. I use design thinking in each project to get the best user-centred solution. My design solution is focused on the user experiences and not myself in order words, bias is out of the question. </p>
              </div>
              <div className='mt-2 text-2xl font-medium	p-4'>
                <h1 className='mb-4'>3. UI Design & Prototyping</h1>
                <p> Wonderful UI designs can be abstract depending on the user, I enjoy the challenge of making generally lovely designs that additionally influence miniature communications. With visual design and prototyping, I have an opportunity to please my client's style.</p>
              </div>
              <div className='mt-2 text-2xl font-medium	p-4'>
                <h1 className='mb-4'>4. User Testing & Iteration</h1>
                <p>Designing a product and putting it out into the world is exceptionally fulfilling. Nonetheless, accepting totalling criticism, and making corrections such that it fits in view of user needs is considerably more satisfying. Figuring out how to gauge progress and iterate is significant.</p>
              </div>
            </div>
          </div>  
              
              </>               
            )}
        </div>      
          {language === "de" ? (
            <>
            <div className='bg-[#9d9ac6] flex flex-col m-[50px] p-[50px] justify-center'>
          <h1 className='text-black font-bold text-3xl mt-[50px]'>Tools</h1>
          <div className='flex p-4 items-center justify-center mt-[150px] '>
            {icons.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className='bg-[#251C31] rounded-full m-4 p-4' />
            ))}
          </div>
          <div className='flex items-center justify-center mb-[200px]'>
            {secondIcons.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className='bg-[#251C31] rounded-full m-4 p-4' />
            ))}
          </div>
        </div>
        <div className='text-black font-normal text-2xl	 text-left m-[50px] p-[50px]  justify-center  '>
          <p className='my-2'> Ich bin im westlichen Teil Nigerias aufgewachsen und war immer fasziniert von der Fähigkeit von Technikern, komplexe Probleme mit Leichtigkeit zu lösen. Diese Faszination führte mich schließlich in den Bereich des Designs, wo ich meine wahre Leidenschaft für Kreativität und Kommunikation entdeckte.</p>
          <p className='my-2'> Nach meinem Bachelor-Abschluss begann ich, mich darauf zu konzentrieren, meine Fähigkeiten im Bereich Design und Kommunikation auszubauen, um meine Fähigkeit zu verbessern, Ideen visuell und mit Worten zu vermitteln. Ich erkannte jedoch auch, wie wichtig technische Fähigkeiten auf dem umkämpften Arbeitsmarkt sind, und brachte mir HTML und CSS bei, um meine Beschäftigungsfähigkeit zu verbessern.</p>
          <p className='my-2'> Heute bin ich bestrebt, ständig zu lernen und mein Wissen zu erweitern, während ich gleichzeitig ein Gleichgewicht zwischen Design, Kommunikation und Problemlösung anstrebe. Die Möglichkeit, durch die Schaffung von Produkten, die das Leben der Menschen verbessern, etwas Positives zu bewirken, motiviert mich, mich weiterzuentwickeln und an meine Grenzen zu gehen. In meiner Freizeit erforsche ich gerne neue Tools und Techniken, um meine Designfähigkeiten zu verbessern und mit den neuesten Trends in der Branche Schritt zu halten. Außerdem bin ich ein begeisterter Leser und lerne gerne über eine Vielzahl von Themen, von Psychologie bis hin zu Nachhaltigkeit. <br /> Zusätzlich zu meinen Designfähigkeiten habe ich Erfahrung in der Arbeit in funktionsübergreifenden Teams und in der Zusammenarbeit mit Interessengruppen, um den Erfolg eines Projekts zu gewährleisten. Ich arbeite gerne in agilen Umgebungen und passe mich an wechselnde Prioritäten an. <br /> Und schließlich ist es mir ein Anliegen, einen positiven Einfluss auf die Welt zu nehmen und mit meinen Fähigkeiten zu ökologischer Nachhaltigkeit und sozialer Gerechtigkeit beizutragen.</p>
          <p className='my-2'>Wenn Sie mit mir Kontakt aufnehmen möchten, erreichen Sie mich unter +491786688559 oder per E-Mail unter vindamilare@gmail.com.</p>
        </div>
         <div className='flex flex-row sm:flex-row h-auto py-[50px] pb-[100px] bg-white w-full '>
        <div className='flex flex-col w-full pl-[100px] m-[50px] '>
          <h1 className=' font-bold text-left text-black m-2 p-2 text-4xl'>Begeistert von meinem Portfolio?</h1>
          <p className=' font-medium text-black m-2 p-2 text-left text-2xl	 '>Ich bin bereit, Teil Ihres Teams zu werden. Gemeinsam können wir  <br />
            Ihren Kunden das beste Nutzererlebnis bieten.</p>
          <div className='text-left my-2 p-2'>      
                 <button className='bg-blue-700 p-2 rounded-md '>Lebenslauf Herunterladen</button>
           </div>
        </div>
          <div className='flex flex-col w-full m-[50px]'>
            <div className='flex h-32 mb-4'>
              <div className='w-full h-full rounded-lg text-center justify-center font-medium text-2xl m-2 p-2 flex border-2 border-blue-700'>
                <TbMailFilled className='text-blue-700 text-6xl inline-block mx-4' />
                <p className='text-black tracking-wide'>Chatten Sie mit mir <br/> vindamilare@gmail.com</p>
              </div>
            </div>
            <div className='flex h-32'>
              <div className='w-full h-full rounded-lg text-center justify-center font-medium text-2xl m-2 p-2 flex border-2 border-blue-700 hover:border-6'>
                <TbPhone className='text-blue-700 text-6xl inline-block mx-4' />
                <p className='text-black tracking-wide'>Rufen Sie mich an<br/> +491786688559</p>
              </div>
            </div>
          </div>   
      </div>
            
            </>
          ) : (
              <>
              <div className='bg-[#9d9ac6] flex flex-col m-[50px] p-[50px] justify-center'>
          <h1 className='text-black font-bold text-3xl mt-[50px]'>Tools</h1>
          <div className='flex p-4 items-center justify-center mt-[150px] '>
            {icons.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className='bg-[#251C31] rounded-full m-4 p-4' />
            ))}
          </div>
          <div className='flex items-center justify-center mb-[200px]'>
            {secondIcons.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className='bg-[#251C31] rounded-full m-4 p-4' />
            ))}
          </div>
        </div>
        <div className='text-black font-normal text-2xl	 text-left m-[50px] p-[50px]  justify-center  '>
          <p className='my-2'>Growing up in the western part of Nigeria, I was always intrigued by the ability of tech professionals to solve complex problems with ease. This fascination eventually led me towards the field of design, where I found my true passion for creativity and communication.</p>
          <p className='my-2'>After completing my bachelor's degree, I began to focus on enhancing my skills in design and communication, seeking to improve my ability to convey ideas visually and through words. However, I also recognized the importance of technical skills in the competitive job market, and taught myself HTML and CSS to increase my employability.</p>
          <p className='my-2'>Today, I am dedicated to constantly learning and expanding my knowledge, while also striving to strike a balance between design, communication, and problem-solving. The ability to make a positive impact by creating products that enhance people's lives is what motivates me to continue growing and pushing my limits. In my spare time, I enjoy exploring new tools and techniques to improve my design skills and stay up-to-date with the latest trends in the industry. I'm also an avid reader and enjoy learning about a variety of topics, from psychology to sustainability. <br /> In addition to my design skills, I have experience working in cross-functional teams and collaborating with stakeholders to ensure the success of a project. I'm comfortable working in agile environments and adapting to changing priorities. <br /> Finally, I'm committed to making a positive impact on the world and using my skills to contribute to environmental sustainability and social justice initiatives.</p>
          <p className='my-2'>If you need to contact me, feel free to reach me at +491786688559 or via email at vindamilare@gmail.com.</p>
        </div>
         <div className='flex flex-row sm:flex-row h-auto py-[50px] pb-[100px] bg-white w-full '>
        <div className='flex flex-col w-full pl-[100px] m-[50px] '>
          <h1 className=' font-bold text-left text-black m-2 p-2 text-4xl'>Excited with my portfolio?</h1>
          <p className=' font-medium text-black m-2 p-2 text-left text-2xl	 '>I am set to be part of your team. Together we can give <br />
            your customers the best user experience.</p>
          <div className='text-left my-2 p-2'>      
                 <button className='bg-blue-700 p-2 rounded-md '>Download Resume</button>
           </div>
        </div>
          <div className='flex flex-col w-full m-[50px]'>
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
          </div>   
      </div>
              
              </>
          )}
        
     </div>
      <Footer language={language} setLanguage={setLanguage} />
    </>

  )
}

export default About
