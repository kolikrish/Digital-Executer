import { useParams } from "react-router-dom"
import { legalContent } from "../legal-data/data"

const LegalPage = () => {
  const { slug } = useParams()
  const page = legalContent[slug]

  if (!page) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl text-white mb-6">Page not found</h1>
        <p className="text-white/70">The requested legal page does not exist.</p>
      </main>
    )
  }

  const renderBlock = (block, index) => {
    const trimmed = block.trim()

    if (trimmed === "---") {
      return <hr key={index} className="my-8 border-white/10" />
    }

    if (trimmed.startsWith("# ")) {
      return (
        <h2 key={index} className="text-3xl font-semibold text-white my-8">
          {trimmed.slice(2).trim()}
        </h2>
      )
    }

    if (trimmed.startsWith("## ")) {
      return (
        <h3 key={index} className="text-2xl font-semibold text-white my-6">
          {trimmed.slice(3).trim()}
        </h3>
      )
    }

    const lines = trimmed.split("\n")
    if (lines.every((line) => line.trim().startsWith("* "))) {
      return (
        <ul key={index} className="list-disc list-inside space-y-2 text-white/80 mb-6">
          {lines.map((line, idx) => (
            <li key={idx} className="leading-relaxed">
              {line.replace(/^\*\s+/, "")}
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p key={index} className="text-white/80 leading-relaxed mb-6">
        {trimmed}
      </p>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl text-white mb-3">{page.title}</h1>
      {page.effectiveDate && (
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-8">
          Effective Date: {page.effectiveDate}
        </p>
      )}
      <div>{page.body.trim().split(/\n{2,}/).map(renderBlock)}</div>
    </main>
  )
}

export default LegalPage;

