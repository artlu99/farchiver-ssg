import { Dispatch, useState } from 'preact/hooks'

export default function Menu({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string
  setSelectedCategory: Dispatch<string>
}) {
  const [categories] = useState<string[]>([
    'VIZ',
    'PUBLIC (FREE)',
    'PRICING',
    'ORDER',
    'CASTIMONIALS',
  ])

  return (
    <nav>
      <div className="tabs mt-10 justify-center">
        {categories.map((category) =>
          category === 'ORDER' ? null : (
            <p
              key={category}
              onClick={() => setSelectedCategory(category)}
              role="button"
              className={`tab tab-bordered 
							${selectedCategory === category && 'tab-active'}`}
            >
              {category}
            </p>
          )
        )}
      </div>
    </nav>
  )
}
