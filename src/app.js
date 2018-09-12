import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Translate to Pig Latin',
        wordArray: []
      };
      this.words = '';
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }

    handleSubmit(event) {
      this.words = this.state.value;
      let array = this.words.split(/\s+/g).map((word) => {
        if (/^[aeiou]/i.test(word)) {
          return word + 'way';
        } else {
          return word.replace(/^([^aeiou]+)(.*)/i, '$2$1ay');
        }
      });

      this.setState({
        wordArray: array
      });
      event.preventDefault();
    }
    render() {
      return (
   <div className='container'>
        <h1>Pig Latin Translator</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
             Text to Translate
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Translate" />
        </form>
        <p className='overflow-wrap:break-word;'> {this.state.wordArray.map((word,index)=>{
              return <span key={index}>{word}{'\u00a0'}</span> 
            })}</p>
          </div>
      );
    }
  }
  ReactDOM.render(<App/>, document.getElementById('app'));
