# To deliver this notification:
#
CommentNotification.with(post: @post).deliver_later(current_user)
CommentNotification.with(post: @post).deliver_later(User.all)

class CommentNotification < Noticed::Base
  # Add your delivery methods
  #
  deliver_by :database, format: :to_database
  # deliver_by :email, mailer: "UserMailer"
  # deliver_by :slack
  # deliver_by :custom, class: "MyDeliveryMethod"

  # Add required params
  #
  # param :post
  def to_database
    {
      type: self.class.name,
      params: params,
      account: Current.account,
    }
  end

  param :post
  # Define helper methods to make rendering easier.
  #
  def message
    t(".message")
    en.notifications.comment_notification.message
  end
  #
  def url
    post_path(params[:post])
  end
end
