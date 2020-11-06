# Still Positive
Site to host podcasts / create a forum / have a mission to connect with others what are chronically ill



## Table of Contents <!-- omit in toc -->
- [OVERVIEW](#overview)
  - [The MVP Requirements](#mvp-goals)
  - [ERD](#erd)
  - [Wireframe](#wireframe)
  - [Component Hierarchy](#component-hierarchy)
  - [Component Breakdown](#component-breakdown)
  - [The Post MVP Goals](#post-mvp)
  - [Timeframe Estimates](#time-estimates)

# OVERVIEW

 **Still Positive** is a pet project that is coming to life before - our - EYES. Still Positive as a whole will aim to create connection, conversation and comedy around those with and without chonic illness.
 
 To create connection, I will be hosting a weekly podcast entitled Still Positive that will have guests on the show that are or living around people with chrnoic illness. This is a weekly podcast that will be a video and audio recording lasting anywhere from 45 min to 1 hour and will be housed on this Still Positive site. In order to increase connection I will also aim to have a public forum where people can discuss topics, ask questions, and connect with others. 
 
 As a user, I want to be able to be able to add new video and audio episodes for my audience to listen or view.
 As a user, I want to be able to edit and delete my podcast episodes.
 As a user, I want to be able to upload mp3's 
 As a user, I want to be able to listen to my podcast
 As a user, I want to be able to view my podcast
 
 Features : 
 - store assets on Amazon S3
 - email subscription 
 - be able to view latest episodes
 - have a like be clickable by anyone and saves to that podcast episode.
## MVP Goals

- Design mobile first.
- Have the podcast video and audio be shown on site for all to see.
- Have an about me section with articles/ features.
- Have a donate button that links you to an organization to donate to. 


### Server (Back End) <!-- omit in toc -->

- Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables:
    - There must be at least 1 association between your tables. (1:m _or_ m:m)
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between your non-User tables 
    - _Note that if you choose to do Authentication, CRUD on your User table does not count toward this requirement._


<br>

## ERD

**Podcast**
has_many :episodes
  - title 
  - description 
  - thumbnail 
  - episode 
  - iTunes Link
  - Stitcher Link
  - Spotify Link

**Episode**
belongs_to :podcast
  - Title 
  - Date
  - Description
  - Podcast_id
  - Episode_id
  - Thumbnail 
  - mp3
  - video 

<br>

## Wireframe

**Pages**
- Podcasts (podcast#show)
- Episode  (episode#show)


> [Whimsical](https://whimsical.com/)

<br>

## Component Hierarchy


<br>

## Component Breakdown



<br>

## Post-MVP:
   - Be able to like, comment and share the podcast video 
   - Have a forum for people to communicate on.
   - Link to listen on Spotify, Apple Podcasts - etc. 
   - Have a blog!
   
<br>
   
## Timeframe Estimates
