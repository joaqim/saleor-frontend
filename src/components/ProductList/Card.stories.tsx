import { ProductList, ProductListProps } from './ProductList'
import { Meta, Story } from '@storybook/react'
import React from 'react'

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/ProductList',
  component: ProductList,
  argTypes: {
    variant: { control: 'select' },
  },
} as Meta

// With named export we define component's story
export const Default: Story<ProductListProps> = (args) => (
  <ProductList {...args} />
)
// Define default arguments for the Default story
Default.args = {
  variant: 'elevation',
  classes: 'w-64 h-64',
}

// Second story
export const WithText: Story<ProductListProps> = (args) => (
  <ProductList {...args}>
    <div>
      <span>Story that shows ProductList component with text</span>
    </div>
  </ProductList>
)
// Define default arguments for the WithText component and inherit arguments from Default component
WithText.args = {
  ...Default.args,
  classes: 'w-64 h-64 text-xl',
}
