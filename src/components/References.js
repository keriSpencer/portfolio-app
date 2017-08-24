import React, { Component } from 'react'

class References extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let h2Styles = {
      fontSize: 100,
      fontFamily: 'Baloo Bhaijaan',
      textAlign: 'center',
      marginBottom: 0
    }

    let h4Styles = {
      fontSize: 50,
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      textAlign: 'left',
      marginTop: 100,
      marginLeft: 100,
      marginBottom: 31
    }

    let pStyles = {
      fontSize: 20,
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      textAlign: 'justify',
      marginTop: 0,
      marginLeft: 100,
      marginRight: 100
    }

    return (
      <div>
        <h2 className="h2Styles" style={h2Styles}>
          References
        </h2>
        <h4 style={h4Styles}>FlapJack is just the Best!</h4>
        <p style={pStyles}>
          Stand in front of the computer screen leave fur on owners clothes and climb a tree, wait for a fireman jump to
          fireman then scratch his face. Annoy owner until he gives you food say meow repeatedly until belly rubs, feels
          good under the bed. Find something else more interesting scream at teh bath. Present belly, scratch hand when
          stroked meow for lick arm hair.
        </p>
        <h4 style={h4Styles}>PorkChop gives great tummy rubs!</h4>
        <p style={pStyles}>
          Lick the plastic bag meowing chowing and wowing and eats owners hair then claws head immediately regret
          falling into bathtub but be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all
          day or brown cats with pink ears and intrigued by the shower. Fall over dead (not really but gets sypathy)
          shove bum in owner's face like camera lens proudly present butt to human, yet lick face hiss at owner, pee a
          lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back pet right
          here, no not there, here, no fool, right here that other cat smells funny you should really give me all the
          treats because i smell the best and omg you finally got the right spot and i love you right now.
        </p>
        <h4 style={h4Styles}>BananaRama sings like a throaty cow!</h4>
        <p style={pStyles}>
          Demand to be let outside at once, and expect owner to wait for me as i think about it. Rub whiskers on bare
          skin act innocent get video posted to internet for chasing red dot for find a way to fit in tiny box eat
          owner's food if it fits, i sits you call this cat food. Walk on car leaving trail of paw prints on hood and
          windshield.
        </p>
        <p style={pStyles}>
          Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep
          again fooled again thinking the dog likes me thinking longingly about tuna brine when in doubt, wash.
        </p>
        <h4 style={h4Styles}>PopTart makes the best waffles!</h4>
        <p style={pStyles}>
          Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine
          until owner comes back demand to be let outside at once, and expect owner to wait for me as i think about it,
          and sometimes switches in french and say "miaou" just because well why not, attack dog, run away and pretend
          to be victim.
        </p>
      </div>
    )
  }
}

export default References
