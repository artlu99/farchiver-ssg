import { Suspense, useState } from 'preact/compat'
import Castimonials from 'components/Castimonials'
import Menu from 'components/Menu'
import NavBar from 'components/NavBar'
import Order from 'components/Order'
import Pricing from 'components/Pricing'
import Public from 'components/Public'
import Viz from 'components/Viz'

const fiofeURL =
  'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeihmprdfji5meevfujdy6syunmxxzqyb2bg57kws2sz6wk5xwgotoa&w=1920&q=75'

export default function LayoutMainPage() {
  const [selectedCategory, setSelectedCategory] = useState('VIZ')
  return (
    <div className="flex flex-col h-screen">
      <div
        className="hero w-1024 "
        style={{
          backgroundImage: `url(${fiofeURL})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="text-center hero-content text-neutral-content">
          <div className="w-full">
            <div>
              {selectedCategory === 'ORDER' ? (
                <div className="top-6 mb-6 text-3xl font-bold">
                  Farcaster Is Open For Everyone
                </div>
              ) : (
                <button
                  class="btn btn-wide btn-accent"
                  onClick={() => setSelectedCategory('ORDER')}
                >
                  Enter
                </button>
              )}
            </div>
            <div className="container mx-auto max-w-prose p-10 prose">
              <Suspense fallback={<p>Loading...</p>}>
                <Menu
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                <div className="container mx-auto max-w-prose justify-center prose">
                  {selectedCategory == 'VIZ' && <Viz />}
                  {selectedCategory == 'PUBLIC (FREE)' && <Public />}
                  {selectedCategory == 'PRICING' && <Pricing />}
                  {selectedCategory == 'ORDER' && <Order />}
                  {selectedCategory == 'CASTIMONIALS' && <Castimonials />}
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  )
}
