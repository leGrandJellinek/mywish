import React from 'react'
import SecondHeader from '../components/secondHeader';
import ListComponent from '../components/List/ListComponent';
import Footer from "../components/Footer";
function MainList() {
  return (
    <div>
      <SecondHeader/>
      <main>
        <ListComponent/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainList