class CreateInvitations < ActiveRecord::Migration[6.1]
  def change
    create_table :invitations do |t|
      t.belongs_to :event, null: false, foreign_key: true
      t.references :sender, references: :users, foreign_key: { to_table: :users }
      t.references :receiver, references: :users, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
