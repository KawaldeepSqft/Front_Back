
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import FreqAskedQues from './FreqAskedQues'
import Team from './Team'
import Clients from './Clients'
import Contact from './Contact'
import Newsletter from './Newsletter'
import Footer from './Footer'
import React from "react";
import {Helmet} from "react-helmet";
const Home = ({subject,setSubject}) => {
  return (
    <div className="container min-w-full min-h-lvh secondary-font">
        <Helmet>
                
                <title>Best digital marketing agency in Gurugram India.</title>
                <link rel="canonical" href="https://www.adsadaptindia.com" />
                 <meta name="description" content='Ads Adapt India is a leading digital marketing company in Gurgaon India, offering best 360 digital marketing solutions with digital marketing experts. Grow your business with us. Call Now' />
                <meta name="keywords" content='PPC agency in Gurugram ,  digital marketing agency Gurgaon, 360 digital marketing solution company, B2B leads generation agency, Digital Marketing company in Gurgaon, Digital Marketing Services, Digital Marketer, Digital Marketing Agency in Gurgaon, Digital Marketing Firm in Gurgaon, Digital Marketing Expert, Digital Marketing Company in India, best digital marketing agency Gurgaon.' />   
            </Helmet>
      
      <NavBar />
      <section className="w-full max-h-fit pt-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Hero />
      </section>
      <section id="about" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <About />
      </section>
      <section id="services" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Services setSubj={setSubject}/>
      </section>
     <section id="portfolio" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Portfolio />
      </section>
   
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <FreqAskedQues />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Team />
      </section>
      {/* <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Clients />
      </section> */}
      <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Contact />
      </section>
       
      {/* <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Newsletter />
      </section> */}
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Footer />
      </section>
    </div>
  )
}

export default Home