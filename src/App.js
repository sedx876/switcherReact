import React, { useState, useEffect } from 'react'
import './App.css'
import './switcher.scss'

function App() {

  const [colorTheme, setColorTheme] = useState('theme-white')

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color')

    if (currentThemeColor){
      setColorTheme(currentThemeColor)
    }
  }, [])

  const handleClick = (theme) =>{
    setColorTheme(theme)
    localStorage.setItem('theme-color', theme)
  }

  return (
    <div className={`App ${colorTheme}`}>
      <div className='theme-options'>
        <div id='theme-white' 
          onClick={() => handleClick('theme-white')}
          className={`${colorTheme === 'theme-white' ? 'active' : ''}`}
        />
        <div id='theme-blue' 
          onClick={() => handleClick('theme-blue')}
          className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}
        />
        <div id='theme-orange' 
          onClick={() => handleClick('theme-orange')}
          className={`${colorTheme === 'theme-orange' ? 'active' : ''}`}
        />
        <div id='theme-purple' 
          onClick={() => handleClick('theme-purple')}
          className={`${colorTheme === 'theme-purple' ? 'active' : ''}`}
        />
        <div id='theme-green' 
          onClick={() => handleClick('theme-green')}
          className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
        />
        <div id='theme-black' 
          onClick={() => handleClick('theme-black')}
          className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
        />
        <div id='theme-new' 
          onClick={() => handleClick('theme-new')}
          className={`${colorTheme === 'theme-new' ? 'active' : ''}`}
        />
        <div id='theme-syracuse' 
          onClick={() => handleClick('theme-syracuse')}
          className={`${colorTheme === 'theme-syracuse' ? 'active' : ''}`}
        />
      </div>
      <div className='content-box'>
        <h3>Multiple Theme Switcher</h3>
        <h5>(ReactJS, SCSS/CSS, Local Storage)</h5>
        <p>
        Cookie donut jelly cupcake chocolate cake pudding. Dessert 
        muffin jelly-o sesame snaps topping cupcake chocolate bar 
        sesame snaps cupcake. Gingerbread powder oat cake cake powder 
        jelly cupcake lollipop sugar plum. Caramels chocolate gummi 
        bears shortbread jujubes biscuit. Liquorice powder sesame 
        snaps toffee gummi bears shortbread. Candy canes bonbon 
        caramels soufflé candy canes chocolate cake marzipan I love 
        ice cream. I love cotton candy wafer cake liquorice brownie 
        powder cheesecake. Dragée croissant cookie croissant oat cake 
        I love sesame snaps topping.

        Muffin tiramisu dragée cake danish sweet cotton candy. 
        Croissant fruitcake biscuit icing I love cupcake halvah. 
        Topping muffin chocolate marzipan chocolate shortbread. 
        Liquorice I love liquorice oat cake pudding donut croissant. 
        I love donut dessert toffee ice cream. Lollipop toffee sweet 
        roll biscuit danish cotton candy. Candy cheesecake dragée 
        muffin candy. Dragée jelly beans donut oat cake I love donut. 
        Dragée I love cheesecake shortbread donut. Candy canes 
        liquorice powder I love pudding sugar plum oat cake bonbon.

        Wafer pastry muffin gummies muffin. Jelly beans wafer sesame 
        snaps I love cupcake. Brownie dessert chocolate cake danish I 
        love cotton candy biscuit I love pie. Soufflé wafer icing 
        lemon drops cake. I love donut dessert chocolate cake topping. 
        Brownie ice cream tart sesame snaps marzipan bonbon cupcake.
        Tootsie roll I love lollipop ice cream cheesecake topping 
        dragée. Pie jelly beans sugar plum cake fruitcake soufflé 
        chocolate bar wafer. Marshmallow cookie sesame snaps pastry 
        candy canes fruitcake candy biscuit. Cupcake macaroon bonbon 
        cake bear claw tootsie roll fruitcake. Brownie halvah gummi 
        bears I love I love chocolate bar. Macaroon sweet cheesecake 
        cookie marzipan ice cream. I love I love marzipan lemon drops 
        sweet roll shortbread dessert toffee. Topping bonbon jujubes 
        I love caramels cheesecake shortbread. Lemon drops gummies I 
        love I love pie.

        Jelly toffee jelly lollipop tart cake candy canes lemon drops 
        sugar plum. Lollipop sweet sweet roll I love pudding I love I 
        love. Chocolate cake I love muffin ice cream I love 
        cheesecake. Chocolate candy canes soufflé soufflé topping 
        tiramisu ice cream liquorice tiramisu. Pie cake oat cake 
        fruitcake dessert powder jelly beans bear claw tootsie roll. 
        Fruitcake gingerbread carrot cake pie topping oat cake 
        tiramisu fruitcake pastry. Muffin cotton candy chocolate bar 
        tiramisu apple pie cheesecake carrot cake ice cream croissant.
        </p>
      </div>
    </div>
  )
}

export default App
