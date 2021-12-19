class EventSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  
  attributes :id, :title, :description, :location, :start_time, :time, :date, :start, :end_time, :event_type, :user_can_modify, :event_picture_thumbnail_url, :event_picture_url, :cloudinary_public_id
  has_one :user
  has_many :invitations
  #has_many :attendees

  def user_can_modify
    current_user.admin? || object.user == current_user
  end

  def time
    "From #{object.start_time.strftime('%A, %m/%d/%y at %I:%M %p')} to #{object.end_time.strftime('%A, %m/%d/%y at %I:%M %p')}"
  end

  def date
    "#{object.start_time.strftime('%b')}"
  end

  def start
    "#{object.start_time.strftime('%d')}"
  end

end
