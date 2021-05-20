import { useLatestProductsQuery } from '@generate/graphql'
import { HTMLAttributes } from 'react'

const LatestProducts = /* GraphQL */ `
  query LatestProducts {
    products(first: 10) {
      edges {
        node {
          id
          name
          description
          category {
            name
          }
          thumbnail {
            url
            alt
          }
        }
      }
    }
  }
`

export interface ProductListProps extends HTMLAttributes<HTMLDivElement> {}

export function ProductList() {
  const { data, loading, error } = useLatestProductsQuery()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error! {error.message}</div>

  if (data) {
    const latestProducts = data.products.edges || []

    return (
      <ul className="grid grid-cols-5 gap-4">
        {latestProducts.map(
          ({ node: { name, thumbnail, description, category } }) => (
            <li className="bg-white">
              <img src={thumbnail.url} alt={thumbnail.alt} />
              <div className="p-2 border-t border-gray-100">
                <p className="block text-lg text-gray-900 truncate">{name}</p>
                <p className="block text-sm font-medium text-gray-500">
                  {category?.name}
                  {description}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
    )
  }
}
