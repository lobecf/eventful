class Api::EventsController < ApplicationController
    before_action :set_event, only: [:show, :update, :destroy]
    before_action :authorize_user, only: [:update, :destroy]
  
    def index
      event = Event.all
      render json: event.order('start_time ASC')
    end
  
    def show
      render json: @event
    end
    
    def create 
      @event = current_user.created_events.build(event_params)
      if @event.save 
          @invitations = params[:receivers].map do |receiver|
            Invitation.create({event_id: @event.id, sender_id: current_user.id, receiver_id: receiver[:id]})
            end
          render json: @event
      else 
        render json: @event.errors, status: :unprocessable_entity
      end 
  end 
  
    def update
      if @event.update(event_params)
        @invitations = params[:receivers].map do |receiver|
          Invitation.create({event_id: @event.id, sender_id: current_user.id, receiver_id: receiver[:id]})
        end
        render json: @event, status: :ok
      else
        render json: @event.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @event.destroy
    end
  
    private
  
    def event_params
      params.permit(:title, :description, :location, :start_time, :end_time, :event_type, :event_picture_url, :event_picture_thumbnail_url)
    end
  
    def set_event
      @event = Event.find(params[:id])
    end
  
    def authorize_user
      user_can_modify = current_user.admin? || @event.user == current_user
      if !user_can_modify
        render json: { error: "You don't have permission to perform that action" }, status: :forbidden
      end
    end
  end
