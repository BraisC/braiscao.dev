import React from 'react';
import styled from 'styled-components';

const BioText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: justify;
  margin-bottom: 2rem;

  p {
    margin-bottom: 2rem;
  }
`;

const Bio = ({ children }) => (
  <BioText>
    I am Brais, a <span>front-end</span> web developer from Spain. I studied a couple of years of
    the bachelor’s degree in <span>Computer Science</span> but abandoned it after discovering that
    my passion was <span>web development</span> and college was too broad of a knowledge base and
    also pretty outdated, I didn’t like the learning path, still it was useful to gain a pretty good
    programming base as I touched C, C++, Java and learned about <span>design patterns</span>. After
    dropping school I decided to commit myself to learn web development <span>on my own</span>.
    starting my learning path with <span>CSS</span>, lately I have been fully focused on{' '}
    <span>Javascript</span> and its ecosystem. Since then I took a good number of{' '}
    <span>online courses</span>, mainly at Udemy (Advanced CSS and Sass: Flexbox, Grid, Animations
    and More!, The Complete JavaScript Course 2020: Build Real Projects! and Modern React with
    Redux) and some from Wes Bos (CSS Grid, Javascript30 and ES6). I also read <span>books</span>{' '}
    like Eloquent Javascript and YDKJS and like to listen to dev <span>podcasts</span> like
    Syntax.fm, React Podcast, Javascript Jabber, JS Party or Full Stack Radio and to read some{' '}
    <span>blogs</span> like the one from Kent C. Dodds or Dan Abramov’s. Everytime I learnt
    something new, I made a <span>project</span> in order to practice the knowledge that I just
    acquired.
  </BioText>
);

export default Bio;
