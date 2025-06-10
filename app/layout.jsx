import '../src/styles/globals.scss';

export const metadata = {
  title: 'Lunis ☀️🌙',
  description: 'Pastel to-do list with Sun and Moon theme',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
