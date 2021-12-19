class InvitationIndexSerializer < ActiveModel::Serializer
    # include FastJsonapi::ObjectSerializer
    belongs_to :receiver

  end