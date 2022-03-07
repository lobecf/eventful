class Event < ApplicationRecord
  belongs_to :user
  has_many :invitations, dependent: :destroy
  validates :title, :description, :location, :start_time, :end_time, presence: true
  validates :title, uniqueness: { scope: [:location, :start_time], message: "has already been taken. Did you already create this event?" }

  
end
