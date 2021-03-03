# Backend Mini Project Synrgy Academy Team A
Content sharing blogs that allow users to create cross-category posts. Every post can contain photos, files, and text. Blogie supports likes, comments, save and sharing posts. Every user can set what categories preferences to be displayed on the homepage.

## Pre-initialization
- Please copy example.env file
- Rename file to .env
- Insert your database credential and port to run this application

## Initialization
1. Cloning this repository to your local computer.
2. Install all dependencies using command:
```
npm install
```
3. Create database using command:
```
sequelize db:create
```
4. Migrate database schema using command:
```
sequelize db:migrate
```
5. Seed data dummy using command:
```
sequelize db:seed:all
```
6. Run this application using command:
```
npm run dev
```
or
```
npm start
```

## Git Workflow
1. Create branch feature from branch deploy with format:
`feature/(feature-name)` <br>
How to create branch?
- Gitlab <br>
Choose icon plus beside list branch and choose this repository new branch.
- Visual Studio Code <br>
Ctrl+Shift+P and then search git:create branch.
2. In visual studio code, checkout to new branch using command:
```
git checkout feature/(feature-name)
```
3. Make change to your code.
4. After that, move modified files to staging area using command:
```
git add .
```
5. Make a note of all changes using command:
```
git commit -m "(your change log)"
```
6. Push your commit to your branch using command:
```
git push origin feature/(feature-name)
```
7. After your feature done, go to repository gitlab and choose create merge request.
- Add title.
- Describe your changes in description column.
- In Assignees, choose assign to me.
- In Reviewers, choose your tech lead.
- Submit merge request

### After Review
<ol>
<li> If there is a problem or code need fixing, tech lead will create comment in your code or create comments in your merge request.
<ol>
<li>Update your branch using command:<br> > git fetch</li>
<li>Pull update your branch using command:<br> > git pull</li>
<li>Fix your code</li>
<li>Make a note of all changes using command:<br> > git commit -m "(your change log)"</li>
<li>Push your commit to your branch using command:<br> > git push origin feature/(feature-name)</li>
<li>Go to gitlab and create comment with tag to your tech lead to inform you already fix your code</li>
</ol>
<li>If there is no problem, tech lead will create comments LGTM (Looks good to me) to your merge request.</li>
<li>Your merge request will be closed</li>
</ol>

## Dependencies
- bcrypt
- dotenv
- ejs
- express
- faker
- jsonwebtoken
- nanoid
- passport
- passport-jwt
- pg
- sequelize

## API Spec
1. Feature signup<br>
   endpoint:
   - `POST` `/signup`

   request example:
   ```json
   {
     "email": "sherlockholmes@gmail.com",
     "password": "1234567890",
     "username": "sherlockholmes",
     "fullName": "Sherlock Holmes",
     "image_profile": "profile.jpg",
     "image_header": "header.jpg",
     "about": "Hi, it's me.",
     "occupation": "Web Developer",
     "location": "Indonesia",
     "role": "User",
   }
   ```
   success response example:
   ```json
   {
     "status": "200 OK",
     "message": "User has been register",
     "data":{
       "id": "EqpcETTeyVJqTI7ReTL9Z",
       "email": "sherlockholmes@gmail.com",
       "username": "sherlockholmes",
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVxcGNFVFRleVZKcVRJN1JlVEw5WiIsImlhdCI6MTYxNDQ4OTk0Nn0.-cZuPQQ2N4kQkAGtZJk0WTXHRmNYymaqdL2wIRmLiFc"
     }
   }
   ```
   error response example:
   ```json
   {
     "status": "409 Conflict",
     "message": "Username/Email already exists"
   }
   ```
2. Feature Login<br>
   endpoint:
   - `POST` `/signup`

   request example:
   ```json
   {
     "email": "sherlockholmes@gmail.com",
     "password": "1234567890"
   }
   ```
   success response example:
   ```json
   {
     "status": "200 OK",
     "message": "Login successful",
     "data":{
       "id": "EqpcETTeyVJqTI7ReTL9Z",
       "email": "sherlockholmes@gmail.com",
       "username": "sherlockholmes",
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVxcGNFVFRleVZKcVRJN1JlVEw5WiIsImlhdCI6MTYxNDQ4OTk0Nn0.-cZuPQQ2N4kQkAGtZJk0WTXHRmNYymaqdL2wIRmLiFc"
     }
   }
   ```
   error response example:
   ```json
   {
     "status": "401 Unauthorized",
     "message": "Email/Password incorrect"
   }
   ```
3. CRUD User<br>
   *Create User*<br>
   endpoint:
   - `POST` `/users`

   request example:
   ```json
   {
     "email": "sherlockholmes@gmail.com",
     "password": "1234567890",
     "username": "sherlockholmes",
     "fullName": "Sherlock Holmes",
     "image_profile": "profile.jpg",
     "image_header": "header.jpg",
     "about": "Hi, it's me.",
     "occupation": "Web Developer",
     "location": "Indonesia",
     "role": "User",
   }
   ```
   success response example:
   ```json
   {
     "status": "200 OK",
     "message": "User has been register",
     "data":{
       "id": "EqpcETTeyVJqTI7ReTL9Z",
       "email": "sherlockholmes@gmail.com",
       "username": "sherlockholmes",
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVxcGNFVFRleVZKcVRJN1JlVEw5WiIsImlhdCI6MTYxNDQ4OTk0Nn0.-cZuPQQ2N4kQkAGtZJk0WTXHRmNYymaqdL2wIRmLiFc"
     }
   }
   ```
   error response example:
   ```json
   {
     "status": "409 Conflict",
     "message": "Username/Email already exists"
   }
   ```   
4. CRUD Post
5. CRUD Category
6. CRUD Comment<br>
   *Create Comment*<br>
   endpoint:
   - `POST` `/api/comments`

   request example:
   ```json
   {
     "content": "i have no idea."
   }
   ```
   success response example:
   ```json
   {
     "status": "200 OK",
     "message": "Add Comments successful",
     "data":{
       "id": "U1g-lBI6BHhgHu5IfAC2I",
       "posts_id": "o19vozmrZ_yVBa6hV_g0Q",
       "users_id": "EqpcETTeyVJqTI7ReTL9Z",
       "content": "i have no idea.",
       "createdAt": "2021-02-27T10:11:40.406Z",
       "updatedAt": "2021-02-27T10:11:40.406Z"
     }
   }
   ```
   error response example:
   ```json
   {
     "status": "403 Forbidden",
     "message": "You need to login first"
   }
   ```
   *Read Comment*<br>
   endpoint:
   - `GET` `/api/comments`
   - `GET` `/api/comments/:id`

   success response example:
   ```json
   {
     "status": "200 OK",
     "message": "Read comments successful",
     "data":{
       "id": "U1g-lBI6BHhgHu5IfAC2I",
       "posts_id": "o19vozmrZ_yVBa6hV_g0Q",
       "users_id": "EqpcETTeyVJqTI7ReTL9Z",
       "content": "i have no idea.",
       "createdAt": "2021-02-27T10:11:40.406Z",
       "updatedAt": "2021-02-27T10:11:40.406Z"
     }
   }
   ```
   error response example:
   ```json
   {
     "status": "404 Not Found",
     "message": "Comments not found"
   }
   ```
   *Edit Comment*<br>
   endpoint:
   - `PUT` `/api/comments/:id`

   request example:
   ```json
   {
     "content": "i have idea."
   }
   ```
   success response example:
   ```json
   {
     "status": "200 OK",
     "message": "Edit comments successful"
   }
   ```
   error response example:
   ```json
   {
     "status": "400 Bad Request",
     "message": "Comments can't be empty"
   }
   ```
   *Delete Comment*<br>
   endpoint: 
   - `DELETE` `/api/comments/:id`

   success response example:
   ```json
   {
     "status": "200 OK",
     "message": "Delete comments successful"
   }
   ```
   error response example:
   ```json
   {
     "status": "404 Not Found",
     "message": "Comments not found"
   }
   ```

7. GET Saved Post 
8. GET Search Post Title/User
9.  GET Post by Category
10. GET Post by (latest activity)
11. GET Users by Following’s Followers (suggestion)
12. GET Post by Active User
13. PATCH User (User’s side) 	
14. GET Saved Post by Month
15. GET Saved Post by Week
16. GET Post by Post’s Likes
17. GET Post by CreatedAt
18. GET Post by id
19. CREATE Post (user’s side)
20. GET Post user by Interest
		