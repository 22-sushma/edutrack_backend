# EduTrack - Student Management System (Backend)

This repository contains a Node.js + Express + MySQL backend scaffold for EduTrack.

## Setup
1. Copy `.env.example` to `.env` and fill values.
2. Create database `edutrack` and run migration SQL in `migrations/001_initial_schema.sql`:
   `mysql -u root -p edutrack < migrations/001_initial_schema.sql`
3. Install deps: `npm install`
4. Seed admin: `npm run seed-admin`
5. Start: `npm run dev` or `npm start`

## Structure
See project tree in the repository. Models use Sequelize. Auth uses JWT and bcrypt.
