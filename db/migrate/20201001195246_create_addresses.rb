class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.column(:first_name, :string)
      t.column(:last_name, :string)
      t.column(:street, :string)
      t.column(:apt_ste_unit, :string)
      t.column(:city, :string)
      t.column(:state, :string)
      t.column(:zip, :integer)
      t.column(:phone, :integer)
      
      t.timestamps()
    end
  end
end
