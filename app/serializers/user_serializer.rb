class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :address, :image_url, :profile_picture_thumbnail_url, :profile_picture_url, :cloudinary_public_id
  has_many :invitations
end
