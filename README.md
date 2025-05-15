# Sajilni Product App - Technical Assessment

A Next.js application with Prisma (MongoDB) for product management, featuring internationalization (i18n) and RTL support.

## Features

- Product listing page
- Product detail page
- Localization (English/Arabic) with language switcher
- RTL layout support for Arabic
- Responsive design with Tailwind CSS

## Technologies Used

- Next.js 14
- Prisma ORM
- MongoDB
- Tailwind CSS
- Next.js i18n routing

## Prerequisites

- Node.js (v18 or later)
- MongoDB Atlas account (or local MongoDB)
- Git

## Getting Started

Follow these steps to set up the development environment:

### 1. Clone the repository
```bash
git clone [https://github.com/BasharST99/sajilni]
cd sajilni

### 2. Install dependencies
```bash
npm install
```

### 3. Set up MongoDB
- Create a MongoDB Atlas cluster or use a local MongoDB instance.
- Create a `.env` file in the root directory and add your MongoDB connection string:
```plaintext
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/sajilni?retryWrites=true&w=majority"
```

### 4. Set up Prisma
```bash
npx prisma generate

```

### 5. Start the development server
```bash
npm run dev
```