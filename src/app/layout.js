import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.Js CRUD app",
  description: "The app is Next.Js Data CRUD app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <nav style={{display:'flex', gap:'1rem', padding:'1rem',margin:'2rem',backgroundColor:'skyblue'}}>
           <Link href={'/'}>
                <button style={{cursor:'pointer'}}>Home</button >
           </Link>
           
           <Link href={'/api/crudapi'}>
                <button style={{cursor:'pointer'}}>CRUDApi</button >
           </Link>

           <Link href={'/crudapp'}>
                <button style={{cursor:'pointer'}}>CRUD APP</button >
           </Link>
        </nav>

        <main>
              {children}
        </main>
        
      </body>
    </html>
  );
}
