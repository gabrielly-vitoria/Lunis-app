// Imports

// Importando o estilo global do site 
import '../src/styles/globals.scss';

// especificação do site para amplificar o alcance do site manipulando os navegadores
export const metadata = {
  title: 'Lunis ☀️🌙',
  description: 'Pastel to-do list with Sun and Moon theme',
  icons: {
    icon: '/favicon.png',
  },
};

// estou exportando de forma padrão a função RootLayout, que recebe um children (arquivo page.jsx que está na raiz do projeto)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
