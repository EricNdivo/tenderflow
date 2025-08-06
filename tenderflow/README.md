# TenderFlow Project

TenderFlow is a web application built using React and TypeScript, integrated with Supabase for backend functionality. This README provides an overview of the project, setup instructions, and usage guidelines.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (sign up, login, logout)
- Tender management (create, read, update, delete)
- Application management for tenders and purchase orders
- Responsive design using Tailwind CSS

## Technologies

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS
- **Backend:** Supabase (PostgreSQL database, authentication)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd tenderflow
   ```

2. Copy the environment variable template:
   ```
   cp .env.example .env
   ```

3. Fill in your Supabase credentials in the `.env` file.

4. Install the dependencies:
   ```
   npm install
   ```

5. Start the development server:
   ```
   npm run dev
   ```

## Usage

- Navigate to `http://localhost:3000` in your browser to access the application.
- Use the provided routes to navigate through the application:
  - `/` - Index page
  - `/contact` - Contact page
  - `/login` - Login page
  - `/register` - Registration page
  - `/dashboard` - User dashboard
  - `/tender-application` - Tender application page
  - `/po-application` - Purchase order application page
  - `/source-supply` - Source supply page
  - `*` - Not found page

## Folder Structure

```
tenderflow
├── src
│   ├── lib
│   │   ├── supabase.ts
│   │   └── db
│   │       ├── auth.ts
│   │       ├── tenders.ts
│   │       ├── applications.ts
│   │       ├── purchaseOrders.ts
│   │       └── types.ts
│   ├── components
│   ├── pages
│   │   ├── Index.tsx
│   │   ├── Contact.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Dashboard.tsx
│   │   ├── TenderApplication.tsx
│   │   ├── POApplication.tsx
│   │   ├── SourceSupply.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.