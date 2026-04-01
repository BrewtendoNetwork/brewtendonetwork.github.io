export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-display text-6xl text-brand-gold mb-4">404</h1>
      <p className="text-gray-400 text-lg mb-6">This page could not be found.</p>
      <a
        href="/"
        className="inline-flex items-center gap-2 bg-surface-3 text-gray-200 font-semibold px-6 py-3 rounded-xl border border-white/10 hover:bg-surface-4 transition-colors no-underline"
      >
        Go Home
      </a>
    </div>
  )
}
