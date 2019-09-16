###ReadME

#Application Setup
##Application Install
1. Download or "git clone https://github.com/joonseoan/movie.git" in git hub (public)
2. "npm install" at applicain's root directory your terminal
3. Setup OMDb api key
   1) Make an environment file named ".env.local" under project's root directory.
   2) On the file, just type "REACT_APP_MOVIE_KEY=api_key" (Do not type double quotation marks)
   3) I will send you "api_key" value via email.
4. Run "npm start" in your terminal.

#Assumptions
##Environment
1. I am assuming that it is for production environment. Therefore, I tried to break down React components as much as possible.

2. I believe "functiona components" of React is faster than "class-based" components. On this point of view, I did not make a use of "class-based components" in this project. However, I can fluently develop the React app by using "class based component" and its life-cycle functions.

3. The api server error. I believe that "origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource." is from the api server, not from the React application. The root cause might be "http" and "localhost:3000" that I uses for the development. The server might accept the secure protocol "https" only.

4. As mentioned above, I am assuming that I am in production environment. Therefore, I did not use Redux-Form which is heavier than Formik. Both are same but Formik does not have the direct dispatch to Redux.

5. Regarding for ".env.local" file mentioned, I assuming that I can not make ".env.production". 