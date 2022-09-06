import React from 'react'
import "./LessonHeader.sass"

const LessonHeader = () => {
  return (
    <header className='lesson_header'>
        <div className="lesson_hero">
            <h1>Открытые уроки</h1>
            <p className='lesson_head'>На открытом уроке у вас есть возможность оценить условия и комфорт, который мы предлагаем, вы сможете посмотреть технику и аудитории, увидите и услышите работу преподавателей, подготовленность материала</p>
        </div>
    </header>
  )
}

export default LessonHeader