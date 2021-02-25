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