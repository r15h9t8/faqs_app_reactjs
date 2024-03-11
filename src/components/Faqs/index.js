// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(eachQues => (
              <FaqItem key={eachQues.id} faqDetails={eachQues} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
