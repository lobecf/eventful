class Api::UsersController < ApplicationController
    skip_before_action :confirm_authentication

    def index
      users = User.all 
      render json: users.order('name ASC')
    end

    def user_index_events
      user = User.find_by(id: session[:user_id])
      render json: user.created_events.where('start_time > ?', Time.current).order('start_time ASC')
    end

    def user_index_events_past
      user = User.find_by(id: session[:user_id])
      render json: user.created_events.where('start_time < ?', Time.current).order('start_time ASC')
    end

    def user_index_invitations
      user = User.find_by(id: session[:user_id])
      render json: user.received_invitations.includes(:event).where('events.start_time > ?', Time.current).order('events.start_time ASC')
    end

    def user_index_invitations_past
      user = User.find_by(id: session[:user_id])
      render json: user.received_invitations.includes(:event).where('events.start_time < ?', Time.current).order('events.start_time ASC')
    end

    def user_index_invitations_sent
      user = User.find_by(id: session[:user_id])
      render json: user.sent_invitations.includes(:event).order('events.start_time ASC'), each_serializer: InvitationIndexSerializer
    end
  
    def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: { error: 'No active session' }, status: :unauthorized
      end
    end
  
    def create
      user = User.new(user_params)
      if user.save
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end

    def update
      if current_user.update(update_user_params)
        render json: current_user, status: :ok
      else 
        render json: user.errors, status: :unprocessable_entity
      end
    end


  
    private
  
    def user_params
      params.permit(:name, :username, :password, :password_confirmation, :address, :image_url)
    end

    def update_user_params
      params.permit(:profile_picture_url, :profile_picture_thumbnail_url)
    end
  end
