class Event < ApplicationRecord
  belongs_to :user
  has_many :invitations, dependent: :destroy
  #has_many :attendees, through: :invitations, source: :receiver

  
end
