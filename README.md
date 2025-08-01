# TenderFlow

A modern React application built with TypeScript, Vite, Tailwind CSS, and Supabase integration.

## 🚀 Features

- **React 19** with TypeScript for type-safe development
- **Vite** for lightning-fast development and build processes
- **Tailwind CSS** for utility-first styling
- **Supabase** integration for backend functionality
- **ESLint** for code quality and consistency
- **Hot Module Replacement (HMR)** for instant development feedback

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Linting**: ESLint

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🧹 Linting

Run ESLint:
```bash
npm run lint
```

## 📂 Project Structure

```
src/
├── components/     # React components
├── lib/           # Utility functions and configurations
│   └── supabase.ts # Supabase client configuration
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles with Tailwind directives
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
#   t e n d e r f l o w  
 