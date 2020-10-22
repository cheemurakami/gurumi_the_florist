class Orders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.belongs_to :user
      t.belongs_to :address
      t.column(:payment_method, :string)

      t.timestamps()
    end
  end
end
