import { Outlet, useSearchParams} from "react-router-dom"

export const Users = () => {
  const [SearchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = SearchParams.get('filter') === 'active'
  return (
    <div>
    <h2>user 1</h2>
    <h2>user 2</h2>
    <h2>user 3</h2>
    <Outlet />
    <div>
      <button onClick={() => setSearchParams({ filter: 'active'})}>
        Active user
        </button>
      <button onClick={() => setSearchParams({ })}>Reset user</button>
    </div>
    {
      showActiveUsers ? (
        <h2>Showing active user</h2>
      ) : (
        <h2>Showing all users</h2>
      )
    }
    </div>
  )
}
