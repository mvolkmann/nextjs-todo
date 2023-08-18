import './globals.css';
import { DogContextProvider } from '@app/context/dog-context';

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <DogContextProvider>
          <h1>Next.js Todo App</h1>
          {children}
        </DogContextProvider>
      </body>
    </html>
  );
}
