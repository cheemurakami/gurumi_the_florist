class addedFlowers < ActiveRecord::Migration[5.2]
  def change
    create_table(:flowers) do |t|
      t.column(:title, :string)
      t.column(:description, :string)
      t.column(:price, :integer)

      t.timestamps()
    end
  end
end
