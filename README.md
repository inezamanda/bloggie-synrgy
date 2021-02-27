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
   endpoint ‘/signup’<br> 
   request: 
   ```
	{
		“id” : nano id,
		“email” : ‘ ‘,
		“password”: ‘ ‘,
		“username” : ‘ ‘,
		“fullname” : ‘ ‘,
		“image” : ‘ ‘,
		“bio” : ‘ ‘,
		“occupation” : ‘ ‘,
		“location” : ‘ ‘,
		“role” : ‘ ‘
	}
    ```
	response:
    ```
	{
		“status” : ‘200 Ok’
		“message” : ‘User has been register’,
		“data” : {
					“id” : nano id,
					“email” : ‘ ‘,
					“username” : ‘ ‘
				}
	}
    ```
2. Feature Login<br>
   endpoint ‘/login’ <br>
   request:
   ```
	{
		“email” : ‘ ‘,
		“password”: ‘ ‘
	}
    ```
	response:
    ```
	{
		“status” : ‘200 Ok’
		“message” : ‘Login successful’,
		“data” : {
					“id” : ‘ ’,
					“email” : ‘ ‘,
					“username” : ‘ ‘
				}
	}
    ```
3. CRUD User <br>
   endpoint ‘/users’ atau ‘/users/:id’
4. CRUD Post
5. CRUD Category
6. CRUD Comment
7. GET Saved Post 
8. GET Search Post Title/User
9. GET Post by Category
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
		