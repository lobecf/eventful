class AddRsvpToInvitations < ActiveRecord::Migration[6.1]
  def change
    add_column :invitations, :rsvp, :boolean
  end
end
