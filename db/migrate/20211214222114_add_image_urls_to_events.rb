class AddImageUrlsToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :event_picture_url, :string
    add_column :events, :event_picture_thumbnail_url, :string
    add_column :events, :cloudinary_public_id, :string
  end
end
