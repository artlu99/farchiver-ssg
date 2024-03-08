export const fiofeURL =
  'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeihmprdfji5meevfujdy6syunmxxzqyb2bg57kws2sz6wk5xwgotoa&w=1920&q=75'

export default function () {
  return (
    <div
      className="hero w-1024 aspect-square"
      style={{
        backgroundImage: `url(${fiofeURL})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="top-6 mb-6 mx-6 text-3xl font-bold text-gray-200">
        Farcaster Is Open For Everyone
      </div>
    </div>
  )
}
