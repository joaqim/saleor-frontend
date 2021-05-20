import { ProductList } from '../src/components/ProductList'
import styles from '@styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow">
          <div className="flex justify-center h-16">
            <div className="space-x-8">
              <div className="mx-auto max-w-7xl">Products</div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <main className="mx-auto max-w-7xl">
            <ProductList />
          </main>
        </div>
      </div>
    </div>
  )
}
