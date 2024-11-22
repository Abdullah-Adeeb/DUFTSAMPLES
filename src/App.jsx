import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Components/Heading'
import Container from './Components/Container'
import Flex from './Components/Flex'
import Images from './Components/Images'
import Logo from './assets/logo.png'
import Menu from './Components/Menu'
import Icon1 from './assets/icon1.png'
import Icon2 from './assets/icon2.png'
import Button from './Components/Button'
import Brand from './assets/brand.png'
import P1 from './assets/p1.png'
import P2 from './assets/p2.png'
import P3 from './assets/p3.png'
import P4 from './assets/p4.png'
import Creed1 from './assets/creed1.png'
import Creed2 from './assets/creed2.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import Flogo from './assets/flogo.png'
import Fimage from './assets/Fimage.png'
import Farrow from './assets/arrow.png'


function App() {
 

  return (
    <>
   {/* Menu part start */}
   <div className='py-[30px] fixed w-[100%] bg-white z-10'>
    <Container>
      <Flex className={'justify-between'}>
        <div>
         <Images imgsrc={Logo}/>
        </div>
        <div>
          <Flex className={'gap-x-7 pt-3 justify-center'}>
          <Menu mText={'Düfte'} className={'text-[16px] font-mont'}/>
          <Menu mText={'Über Uns'} className={'text-[16px] font-mont '}/>
          <Menu mText={'Blog'} className={'text-[16px] font-mont '}/>
          </Flex>
        </div>
        <div>
          <Flex className={'gap-x-8'}>
        <Images imgsrc={Icon1}/>
        <Images imgsrc={Icon2}/>
          </Flex>
        </div>
      </Flex>
    </Container>
   </div>
   {/* Menu part end */}
   {/* banner part start */}
   <div className='pt-[200px] pb-[120px] bg-bannerbg bg-no-repeat bg-center bg-cover '>
    <Container>
      <Heading text={'Ihr exklusiver Anbieter von Luxus-Parfümproben!'} as={'h1'} className={'font-mont font-semibold text-[64px] text-white pr-[660px]'} />
      <Heading text={'Bei Duft Samples verstehen wir, dass die Auswahl des perfekten Duftes eine zutiefst persönliche und einzigartige Erfahrung ist.'} as={'p'} className={'font-mont font-semibold text-[16px] text-white pr-[732px] py-10'} />
      <Button btext={'Jetzt einkaufen'} className={'py-4 px-8 font-mont text-[16px] bg-white '}/>
    </Container>
   </div>
   {/* banner part end */}

   {/* brand */}
   <Container>
   <Flex className={'justify-center py-10'}>
   <Images imgsrc={Brand}/>
   </Flex>
   </Container>
   {/* brand */}

   {/* Perfume */}
   <Heading text={'Unsere Top 4 Mini-Flacons'} as={'h1'} className={'font-mont font-semibold text-[38px] text-center py-10'} />
   <div>
    <Container>
      <Flex className={'justify-between py-[60px]'}>
        <div className='w-[22%] shadow-lg'>
         <Images imgsrc={P1}/>
         <Heading text={'Creed - Aventus'} as={'p'} className={'font-mont font-semibold text-[16px] text-[#333333] text-center py-5'}/>
         <Heading text={'6,00 € - 40,00  €'} as={'p'} className={'font-mont font-bold text-[18px] text-[#333333] text-center pb-7'}/>
        </div>
        <div className='w-[22%] shadow-lg'>
         <Images imgsrc={P2}/>
         <Heading text={'Xerjoff - Alexandria 2'} as={'p'} className={'font-mont font-semibold text-[16px] text-[#333333] text-center py-5'}/>
         <Heading text={'11,00 € - 79,00 €'} as={'p'} className={'font-mont font-bold text-[18px] text-[#333333] text-center pb-7'}/>
        </div>
        <div className='w-[22%] shadow-lg'>
         <Images imgsrc={P3}/>
         <Heading text={'Xerjoff - Naxos'} as={'p'} className={'font-mont font-semibold text-[16px] text-[#333333] text-center py-5'}/>
         <Heading text={'6,00 € - 36,00  €'} as={'p'} className={'font-mont font-bold text-[18px] text-[#333333] text-center pb-7'}/>
        </div>
        <div className='w-[22%] shadow-lg'>
         <Images imgsrc={P4}/>
         <Heading text={'Xerjoff - Accento'} as={'p'} className={'font-mont font-semibold text-[16px] text-[#333333] text-center py-5'}/>
         <Heading text={'7,00 € - 37,00  €'} as={'p'} className={'font-mont font-bold text-[18px] text-[#333333] text-center pb-7'}/>
        </div>
        
      </Flex>
    </Container>
   </div>
   {/* Perfume */}

   {/* grand */}
   <div className='pt-[100px] pb-[150px] bg-grand bg-no-repeat bg-center bg-cover'>
    <Container>
    <Heading text={'MAISON FRANCIS KURKDJIAN'} as={'h1'} className={'font-mont text-white font-semibold text-[30px] py-10'}/>
    <Heading text={'Entdecke die Welt von Maison Francis Kurkdjian mit unseren edlenDuftproben. Erlebe die einzigartigen Düfte und die Exklusivitätunserer Marke in kompakten Proben. Genieße den Luxus und dieKunst der Parfümherstellung, bevor du dich für deinen Favoritenentscheidest.'} as={'p'} className={'font-mont font-semibold text-[16px] text-white pr-[732px] py-10'}/>
    <Button btext={'ZU MFK'} className={'py-4 px-8 font-mont text-[16px] bg-white '}/>
    </Container>
   </div>
   {/* grand */}

   {/* Creed part */}
  <div className='py-[200px]'>
    <Container>
      <Flex className={'justify-between'}>
        <div className='w-[48%]'>
          <Images imgsrc={Creed1} className={'relative '}/>
          <div className='bg-white px-6 py-8 shadow-xl w-[465px]  absolute top-[3025px] m-auto ml-[42px]'>
         <Heading text={'LOUIS VUITTON'} as={'h4'} className={'font-mont font-semibold text-[20px] '}/>
         <Heading text={'Entdecke Louis Vuitton in kleinen Proben. Teste den Luxus, bevor du dich für das Original entscheidest.'} as={'p'} className={'font-mont text-[14px] py-8 pr-[40px]'}/>
         <Button btext={'ZU LOUIS VUITTON'} className={'py-4 px-8 font-mont text-[16px] bg-black text-white '}/>
          </div>
        </div>
        <div className='w-[48%]'>
          <Images imgsrc={Creed2} className={'relative '}/>
          <div className='bg-white px-6 py-8 shadow-xl w-[465px]  absolute top-[3025px] m-auto ml-[42px] '>
         <Heading text={'LOUIS VUITTON'} as={'h4'} className={'font-mont font-semibold text-[20px] '}/>
         <Heading text={'Entdecke Louis Vuitton in kleinen Proben. Teste den Luxus, bevor du dich für das Original entscheidest.'} as={'p'} className={'font-mont text-[14px] py-8 pr-[40px]'}/>
         <Button btext={'ZU LOUIS VUITTON'} className={'py-4 px-8 font-mont text-[16px] bg-black text-white '}/>
          </div>
        </div>
      </Flex>
    </Container>
  </div>


   {/* creed part */}

   {/* FAQ part */}
   <div className='py-20'>
    <Heading text={'FAQ'} as={'h1'} className={'font-mont font-semibold text-[45px] text-center pb-[120px]'}/>
  <Container>
    <div className='border-y-[2px] '>
      <Flex>
        <Heading text={'Sind die Düfte original?'} as={'p'} className={'font-mont font-semibold text-[16px] py-5 pl-3'} />
        <MdKeyboardArrowDown className={'text-[25px] font-semibold ml-[1050px] my-5'} />
      
      </Flex>
    </div>
    <div className='border-b-[2px] '>
      <Flex>
        <Heading text={'Wie werden die Duftproben verpackt?'} as={'p'} className={'font-mont font-semibold text-[16px] py-5 pl-3'} />
        <MdKeyboardArrowDown className={'text-[25px] font-semibold ml-[927px] my-5'} />
      
      </Flex>
    </div>
    <div className='border-b-[2px] '>
      <Flex>
        <Heading text={'Haben die Parfümproben einen Zerstäuber?'} as={'p'} className={'font-mont font-semibold text-[16px] py-5 pl-3'} />
        <MdKeyboardArrowDown className={'text-[25px] font-semibold ml-[879px] my-5'} />
      
      </Flex>
    </div>
    <div className='border-b-[2px] '>
      <Flex>
        <Heading text={'Wie oft kann ich eine Parfümprobe sprühen?'} as={'p'} className={'font-mont font-semibold text-[16px] py-5 pl-3'} />
        <MdKeyboardArrowDown className={'text-[25px] font-semibold ml-[871px] my-5'} />
      
      </Flex>
    </div>

  </Container>
   </div>
   {/* FAQ part */}

   {/* Footer part  */}
  <div className='mt-[80px] bg-black py-[50px]'>
    <Container className={'mt-8'}>
      <Flex className={'justify-between'}>
        <div className='w-[18%]'>
          <Images imgsrc={Flogo}/>
        </div>
        <div className='w-[18%]'>
       <Heading text={'HILFE'} as={'h4'} className={'font-mont font-semibold text-[20px] text-white'}/>
       <Heading text={'FAQ'} as={'p'} className={'font-mont  text-[14px] text-white py-3'}/>
       <Heading text={'Rückgaberecht'} as={'p'} className={'font-mont  text-[14px] text-white py-3'}/>
        </div>
        <div className='w-[18%]'>
       <Heading text={'UNTERNEHMEN'} as={'h4'} className={'font-mont font-semibold text-[20px] text-white'}/>
       <Heading text={'Kontakt'} as={'p'} className={'font-mont  text-[14px] text-white py-3'}/>
       <Heading text={'Über Uns'} as={'p'} className={'font-mont  text-[14px] text-white py-3'}/>
        </div>
        <div className='w-[18%]'>
       <Heading text={'RECHTLICHES'} as={'h4'} className={'font-mont font-semibold text-[20px] text-white'}/>
       <Heading text={'Impressum'} as={'p'} className={'font-mont  text-[14px] text-white py-3'}/>
       <Heading text={'Datenschutzerklärung'} as={'p'} className={'font-mont  text-[14px] text-white py-3'}/>
        </div>
        <div className='w-[18%]'>
       <Heading text={'UNSER ZIEL'} as={'h4'} className={'font-mont font-semibold text-[20px] text-white'}/>
       <Heading text={'Bei Duft Samples verstehen wir, dass die Auswahl des perfekten Duftes eine zutiefst persönliche und einzigartige Erfahrung ist.'} as={'p'} className={'font-mont  text-[14px] text-white py-4 pr-[45px]'}/>
        </div>
         </Flex>
         <div className='mt-20'>
          <Flex className={'justify-between'}>
            <div>
            <Heading text={'DUFTSAMPLES © 2023 . All Rights Reserved.'} as={'p'} className={'font-mont  text-[14px] text-white py-3'}/>
            </div>
            <div>
              <Images imgsrc={Fimage}/>
            </div>
          </Flex>
         </div>
        
    </Container>
    <Images imgsrc={Farrow} className={'ml-[1620px] mt-10'}/>
  </div>

   {/* Footer part */}
    </>
  )
}

export default App


