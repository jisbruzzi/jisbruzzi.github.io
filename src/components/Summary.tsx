interface SummaryProps {
  content: string
}

export function Summary({ content }: SummaryProps) {
  return (
    <div className="mb-6 border-t border-b border-gray-300 py-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Professional Summary</h2>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  )
}

