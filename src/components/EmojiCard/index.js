// Write your code here.

import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emoji, onClickEmoji} = this.props
    const {emojiName, emojiUrl, id} = emoji

    const onclickEmojiItem = () => {
      onClickEmoji(id)
    }
     return (
    <li className="emoji-item">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
  }
}

export default EmojiCard
