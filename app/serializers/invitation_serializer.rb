class InvitationSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :sender, :receiver, :rsvp
  belongs_to :event
end
