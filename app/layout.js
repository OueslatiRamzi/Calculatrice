import "./globals.css";



export const metadata = {
  title: "Calculator",
  description: "application web de calculatrice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200"
        
      >
        {children}
      </body>
    </html>
  );
}
