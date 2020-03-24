# Callisto

An edu-tool prototype made for the Dhishna Make-A-Ton 2019 hosted by CUSAT 

### Technologies Used

- **Deno and Oak**:
    - [Deno](https://github.com/denoland/deno) is a secure typescript runtime based on V8
    - [Oak](https://github.com/oakserver/oak) is a middleware framework based on Koa 
- **React**:
    - frontend bundled using Parcel 
- **IBM Watson Cloud NLP API**:
    - natural language understanding algorithm run on the corpus received from wikipedia articles

### Run

make command bundles the frontend and starts the server on port 5000

- `/` : `index page`
- `/api/:term` : `api route`

##### TODO

- [x] Deno basic backend
- [x] Connection to IBM Watson Cloud
- [x] Basic react frontend
- [ ] Authentication (firebase)