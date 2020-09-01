class CartItem < ActiveRecord::Migration[5.2]
  def change
    create_table(:cart_items) do |t|
      t.belongs_to :user
      t.belongs_to :flower
      
      t.timestamps()
    end
  end
end
