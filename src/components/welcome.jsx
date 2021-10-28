import { useState } from 'react'
import style from '../assets/style/welcome.scss'
import avatar from '../assets/images/avatar.jpg'

const Welcome = ()=>{
  const [welcomeText] = useState('欢迎使用Carl的React17脚手架😉')
  const [githubLink] = useState('https://github.com/yyISACoder/react17-custom-scaffold')

  return (
    <div className={style.welcome}>
      <img src={ avatar } />
      <p>{ welcomeText }</p>
      <p>
        github地址：<a href={ githubLink } target="_blank" rel="noreferrer">{ githubLink }</a>
      </p>
    </div>
  )
}

export default Welcome