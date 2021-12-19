class User < ApplicationRecord
    has_many :events
    has_many :created_events, class_name: "Event"
    has_many :sent_invitations, class_name: "Invitation", foreign_key: "sender_id"
    has_many :received_invitations, class_name: "Invitation", foreign_key: "receiver_id"

    has_many :notifications, as: :recipient
    has_secure_password

    def invitations
        Invitation.where("sender_id = ? OR receiver_id = ?", id, id)
    end

    def received_invitations
        Invitation.where("receiver_id = ?", id)
    end

    def sent_invitations
        Invitation.where("sender_id = ?", id)
    end
    
end
