# Callisto

Callisto is an knowledge platform that enables users to learn by actively answering questions.
Generates questions and answers from content from websites, articles and documents.
Helps users in gauginng there level of understanding in a particular topic.  
Prototype made for the Dhishna Make-A-Ton 2019 hosted by CUSAT.

### Architecture

- **Backend**:
    - [Deno](https://github.com/denoland/deno) is a secure typescript runtime based on V8
    - [Oak](https://github.com/oakserver/oak) is a middleware framework based on Koa 
    - IBM Watson Cloud NLP API for analysis of literature

- **Frontend**:
    - UI in React bundled using Parcel  

##### Routes

- `/` : `index page`
- `/api/:term` : `api route`

#### Project Roadmap

- [x] MVP using data from wikipedia articles
- [ ] Input of links to sites and documents(pdf, docs) as corpus
- [ ] Account system to track progress (firebase)

##### License

MIT licensed. See LICENSE.md