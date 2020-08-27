class AddFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table(:favorites) do |t|
      t.belongs_to :user
      t.belongs_to :flower
      
      t.timestamps()
    end
  end
end
