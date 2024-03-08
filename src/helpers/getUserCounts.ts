export default function getUserCount() {
  return (
    getBetaTestersCount() +
    getEarlyBirdsCount() +
    getFreeTrialsCount() +
    getFullSubscribersCount()
  )
}

function getBetaTestersCount(): number {
  const count: number = parseInt(import.meta.env.VITE_COUNT_BETA_TESTERS, 10)
  return count
}

function getEarlyBirdsCount(): number {
  const count = parseInt(import.meta.env.VITE_COUNT_EARLY_BIRDS)
  return count
}

function getFreeTrialsCount(): number {
  const count = parseInt(import.meta.env.VITE_COUNT_FREE_TRIALS)
  return count
}

function getFullSubscribersCount(): number {
  const count = parseInt(import.meta.env.VITE_COUNT_FULL_SUBSCRIBERS)
  return count
}
