import React from 'react'
import Header from '../components/Header';
import Banner from "../components/Mainpage/Banner";
import WhyService from "../components/Mainpage/WhyService";
import Instruction from "../components/Mainpage/Instruction";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="home-page">
        <Header />
        <main className='main'>
        <Banner 
          text="Вы знали, что мощь ваших желаний может воплотиться в реальность?"
          buttonText="Создать список подарков"/>
        <WhyService/>
        <Banner 
          text="Создание списка подарков на нашем сайте - это просто и удобно."
          buttonText="Регистрация"
          rowRev="true"/>
        <Instruction/>
      </main>
      <Footer />
    </div>
  )
}
