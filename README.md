# Still Positive
Site to host podcasts / create a forum / have a mission to connect with others what are chronically ill
[Check out the live site](https://stillpositive.netlify.app/)

## Table of Contents <!-- omit in toc -->
- [OVERVIEW](#overview)
  - [The MVP Requirements](#mvp-goals)
  - [Wireframe](#wireframe)
  - [Component Hierarchy](#component-hierarchy)
  - [Component Breakdown](#component-breakdown)
  - [The Post MVP Goals](#post-mvp)
  - [Timeframe Estimates](#time-estimates)

# OVERVIEW

 **Still Positive** is a pet project that is coming to life before - our - EYES. Still Positive as a whole will aim to create connection, conversation and comedy around those with and without chonic illness.
 
 To create connection, I will be hosting a weekly podcast entitled Still Positive that will have guests on the show that are or living around people with chronic illness and/or disabilities. This is a weekly podcast that will be a video and audio recording lasting anywhere from 45 min to 1 hour and will be housed on this Still Positive site. In order to increase connection I will also aim to have a public forum where people can discuss topics, ask questions, and connect with others. 
 
 
 Features : 
 - client-side rendering
 - be able to view all episodes and feature the main episode

 
## MVP Goals

- Design mobile first.
- Have the podcast video from youtube and audio from spotify or soundcloud that will be shown on site for all to see.
- Have an about section.


<br>

## Wireframe


> [Whimsical](https://whimsical.com/)

<br>

## Component Hierarchy

**Components**
- LatestCard
- NewestEpisode
- EpisodeCard

**Pages**
- Home - latest
- AllEpisodes
- EpisodeDetail
- About
- Donate 

<br>

## Component Breakdown
``` structure
  AllEpisodes_ _ _ _ _  _Home_ _ _ _ _ _ About_ 
        |                  |            
   EpisodeCards       NewestEpisode
        |                  |           
   EpisodeDetail      EpisodeDetail       
                          
                   
 ```
<br>

## Post-MVP:

   - Be able to like, comment and share the podcast video 
   - Have a forum for people to communicate on.
   - Link to listen on Spotify, Apple Podcasts - etc. 
   - Have a donate button that links you to an organization to donate to. 
   - email subscription using mailto: or emailjs and a formatted message saying you want to join in. 
   - Have a blog!
   
<br>

## Code Showcase:
- _She may be small but I'm proud of this because it was done straight from the noggin.  

``` structure

  const descriptionTeaser = (str) => {
    if (str.length >= 55) {
      const cut = str.slice(0, 55)
      return cut.concat('...')
    }
  };

```


   
