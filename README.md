### What is React Query?

A library for fetching data in a React application.

### Why use React Query?

1. Since React is a UI library, there is no specific pattern for data fetching.
2. useEffect hook for data fetching and useState hook to maintain component state like loading, error or resulting data.
3. If the data is needed through the app, we tend to use state management libraries.
4. Most of the state management libraries are good for working with client state. Ex: ‘theme’ for the application / whether a modal is open
5. State management libraries are not great for working with asynchronous or server state.

### Client vs server state

**client state**

Persisted in our app memory and accessing or updating it is synchronous.

**server state**

Persisted remotely and requires asynchronous APIs for fetching or updating.

Has shared ownership.

Data can be updated by someone else without our knowledge.

UI data may not be in sync with the remote data.

Challenging when we have to deal with caching, deduping multiple requests for the same data, updating stale data in the background, performance optimizations etc.

### Checklists

1. Basic queries(RQSuperHeroes)
2. Poll data
3. RQ dev tools(index.js)
4. Create reusable query hooks(fetchSuperHeroes.js)
5. Query by ID
6. Parallel queries(ParalletQueries.jsx)
7. Dynamic queries(DynamicParallel.jsx)
8. Dependent queries(DependentQueries.jsx)
9. Infinite & paginated queries(PaginatedQueries.jsx and InfiniteQueries.jsx)
10. Update data using mutations(RQSuperHeroes.jsx)
11. Invalidate queries(useSuperHeroesData.js)
12. Optimistic updates(useSuperHeroesData.js)
13. Axios interceptor(axios-utils)
