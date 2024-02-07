import { EarlyBirdUsers, FreeTrialUsers } from 'components/UserCount'

export default function () {
  return (
    <div className="text-left">
      <h3>Farchiver Subscription</h3>
      <h4>4 snapshots per calendar year</h4>
      <h4>Price: 0.02 ETH (or equiv in USDC) </h4>
      <h4>Turnaround: ~24hrs</h4>
      <hr />
      <h3>Early Bird Discount</h3>
      <h4>Same as full subscription </h4>
      <h4>Price: 0.01 ETH (or equiv in USDC) </h4>
      <h4>
        First 20 paid customers: 50% discount <EarlyBirdUsers />
      </h4>
      <hr />
      <h3>Free Trials</h3>
      <h4>Last 2 weeks of data</h4>
      <h4>
        10 Free trials: <FreeTrialUsers />
      </h4>
      <h4>Choose Free trial in the DeForm signup</h4>
    </div>
  )
}
