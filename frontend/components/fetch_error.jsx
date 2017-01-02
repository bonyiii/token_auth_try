const FetchError = ({message, onRetry}) => (
  <div>
    <p>Could not fetch todos.</p>
    <button onClick={onRetry}>Retry</button>
  </div>
)

export default FetchError
