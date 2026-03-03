import React from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Button from './Button.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import MyComponent from './MyComponent.jsx'

function App() {
  const fruits = [{id: 1, name: "apple", calories: 95},
                {id: 2, name: "banana", calories: 105},
                {id: 3, name: "coconut", calories: 150},
                {id: 4, name: "pineapple", calories: 180}];

  const cards = [{id: 1, name: "apple", calories: 95},
              {id: 2, name: "banana", calories: 105},
              {id: 3, name: "coconut", calories: 150},
              {id: 4, name: "pineapple", calories: 180}];
  return (
    <>
      <UserGreeting isLoggedIn={true} username="BroCode"/>
      <Header/>
      <Button/>
      <MyComponent></MyComponent>
      {/* <Card/>
      <Card/> */}
      <Food/>
      <Food/>
      <Footer/>
      <List items={fruits} category="Fruits" />


    </>
  )
}

export default App
