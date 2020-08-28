import React from 'react';


export class RandomQuote extends React.Component {
  constructor(props){
    super(props);
    this.state={
      quote: [{text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
              {text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney"},
              {text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs"},
              {text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt"},
              {text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey"},
              {text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron"},
              {text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt"},
              {text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln"}
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  randomIndex(){
    let index = Math.floor(Math.random() * this.state.quote.length);
    return index;
  }
  handleClick(){
    this.setState({
      quote: this.state.quote[this.randomIndex()].text
    })
  }
  render(){
    let quoteIndex = this.randomIndex();
    return (
      <div>
        <p>{this.state.quote[quoteIndex].text}</p>
        <p>{this.state.quote[quoteIndex].author}</p>
      </div>
      )
  }
}
