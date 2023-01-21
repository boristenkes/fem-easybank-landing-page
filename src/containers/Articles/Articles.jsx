import React from 'react'

import './Articles.scss';
import { articles } from '../../constants';

const Articles = () => {
  return (
    <section className='container mt-24'>
      <h1 className="headtext !text-4xl mb-12">Latest Articles</h1>

      <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {articles.map((article, index) => (
          <li className='rounded-md overflow-hidden' key={`article-${index + 1}`}>
            <article>
              <img className='lg:h-44 h-64 object-cover w-full' src={article.image} alt={article.title} />
              <div className='p-10 lg:p-4'>
                <h3 className='headtext !text-xl !text-left mb-2 
                               before:content-["By_"attr(data-author)] before:block before:text-xs before:text-neutral-400 before:mb-2' data-author={article.author}>
                  {article.title}
                </h3>
                <p className='body-text !text-left !m-0 lg:text-sm'>
                  {article.content}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Articles
