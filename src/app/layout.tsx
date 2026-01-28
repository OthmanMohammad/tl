// Root layout - required by Next.js
// CSS is imported here to ensure it's bundled in static export
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
