import React from 'react'

import { articles } from '../../constants';

const Articles = () => {
  return (
    <section className='container mt-24' id='blog'>
      <h1 className="headtext !text-4xl mb-12">Latest Articles</h1>

      <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {articles.map((article, index) => (
          <li className='rounded-md overflow-hidden' key={`article-${index + 1}`}>
            <article>
              <img className='lg:h-44 h-64 object-cover w-full' src={article.image} alt={article.title} />
              <div className='p-10 lg:p-4'>
                <p className='content-["By_"attr(data-author)] block text-xs text-neutral-400 mb-2'>
                  By {article.author}
                </p>
                <h2 className='headtext !text-xl !text-left mb-2 hover:text-primary-400 cursor-pointer'>
                  {article.title}
                </h2>
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
