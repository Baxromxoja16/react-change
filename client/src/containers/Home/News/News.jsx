import React from 'react'
import './News.sass'

const News = () => {
    return (
        <section className='news'>
            <div className="container-big">
                <div className="row">
                    <h2>Новости</h2>
                    <div className="news_carts">
                        <div className="news_card_big">
                            <h4>Открыт набор в новую группу по веб - программированию</h4>
                            <p className='news_date'>18 декабря</p>
                        </div>
                        <div className="news_card_small">
                            <h4>Открыт набор в новую группу по веб - программированию</h4>
                            <p className='news_date'>18 декабря</p>
                        </div>
                        <div className="news_card_small">
                            <h4>Открыт набор в новую группу по веб - программированию</h4>
                            <p className='news_date'>18 декабря</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News