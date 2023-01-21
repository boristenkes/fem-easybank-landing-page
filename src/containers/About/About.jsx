import React from 'react'
import styled from 'styled-components';

import { features } from '../../constants';

const FeatureCard = styled.li`
  padding: 2rem 2.5rem;
  transition: transform, box-shadow, 200ms ease-in-out;
  cursor: default;
  background-color: var(--clr-neutral-300);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: scale(1.05);
  }
  img {
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: var(--fw-regular);
  }
  p {
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

const About = () => {
  return (
    <section className='bg-neutral-200 py-28 mt-28' id='about'>
      
      <div className='about-wrapper container'>
        <h1 className="headtext !text-4xl">
          Why choose Easybank?
        </h1>
        <p className="body-text">
          We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.
        </p>

        <ul className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {features.map((feature, index) => (
          <FeatureCard className='' key={`feature-${index+1}`}>
            <img className='mx-auto md:mx-0' src={feature.icon} alt={feature.title} />
            <h3 className='headtext'>{feature.title}</h3>
            <p className='body-text'>{feature.content}</p>
          </FeatureCard>
        ))}
        </ul>
      </div>

    </section>
  )
}

export default About
