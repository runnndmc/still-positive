# Still Positive
Site to host podcasts / create a forum / have a mission to connect with others what are chronically ill



## Table of Contents <!-- omit in toc -->
- [OVERVIEW](#overview)
  - [Important Dates](#important-dates)
  - [The MVP Requirements](#the-mvp-requirements)
- [GETTING STARTED](#getting-started)
  - [Step 1. Make A New Repo](#step-1-make-a-new-repo)
  - [Step 2. Pitch Your Idea](#step-2-pitch-your-idea)
  - [Step 3. Get Hacking](#step-3-get-hacking)
- [EVALUATION](#evaluation)
- [PLAGIARISM](#plagiarism)

# OVERVIEW

 **Still Positive** is a pet project that is coming to life before - our - EYES. Still Positive as a whole will aim to create connection, conversation and comedy around those with and without chonic illness.
 
 To create connection, I will be hosting a weekly podcast entitles Still Positive that will have guests on the show that are or are living around people with chrnoic illness. This weekly podcast will be a video and audio recording that will last anywhere from 45 min to 1 hour and will be housed on this Still Positive site. In order to increase connection there will also be a forum where people can discuss topics, ask questions, and connect with others. 


## MVP Goals

- Design mobile first 
- Have the podcast be shown on site
- Have a forum for people to communicate on 
- Have a donate button 
- Have an about me section with articles


### Server (Back End) <!-- omit in toc -->

- Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables:
    - There must be at least 1 association between your tables. (1:m _or_ m:m)
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between your non-User tables 
    - _Note that if you choose to do Authentication, CRUD on your User table does not count toward this requirement._

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **Ruby on Rails API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front end.
  - _Note that if you decide to implement Auth, your full CRUD actions must be covered amongst your non-User tables._

### Styling <!-- omit in toc -->

- Be styled with CSS (or SCSS, if you'd prefer).
- Use Flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

### Linting <!-- omit in toc -->

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `snake_case`, and `kebab-case` convention.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are okay).

### Deployment <!-- omit in toc -->

- Deploy the fully functional front-end via Surge or Netlify.
- Deploy the back-end via Heroku.

### Procedural <!-- omit in toc -->

- Initialize a **git repo on Github**, with a link to your hosted project.
- Have **frequent commits**, making a _robust_ commit history at least every day. (75 commits minimum)
- Use effective and safe **branching and merging** processes.

<br>

## Step 2. Pitch Your Idea

Before you start coding away, you will meet with all your instructors for a 5 minute pitch to get your idea approved. You must have your idea prepared in the repository's README.md file, **including all of the following items**, to get approved.


   - **Features:** A full feature list for your MVP app.
   - **Goals:** The overarching goals for your project.
   - **Challenges:** An explanation of the challenges you expect to face with this project.
3. **MVP:** An overview of your MVP, including the minimum, need-to-have features of the app.
   - **Client:** Wire-frames, component hierarchy, component breakdown, and time-frame estimates.
   - **Server:** Data architecture, ERD model, and API endpoint documentation.
   - **Dependencies:** A full list of all libraries, frameworks, etc.
4. 

> [Project 4 README Template](./README-template.md)

> ["How detailed should wireframes be?"](https://justuxdesign.com/blog/wireframe-fidelity)
>
> [Wireframe.cc](https://wireframe.cc/)
> 
> [Whimsical](https://whimsical.com/)
> 
> [lucidchart](https://www.lucidchart.com/)
>
> [draw.io](https://www.draw.io/)
>
> [ERDPlus](https://erdplus.com/)


## Post-MVP:
   - be able to like, comment and share the podcast video 
   - have a blog!
