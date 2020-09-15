class AddTotalPriceForCartItems < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :total_price, :integer
  end
end
