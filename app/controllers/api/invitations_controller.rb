class Api::InvitationsController < ApplicationController
    
    def index 
      invitation = Invitation.all
      render json: invitation.includes(:event).order('events.start_time ASC')
    end 

    def show 
      render json: @invitation
    end 
    
      def update
        @invitation = current_user.invitations.find(params[:id])
        if @invitation.update(update_invitation_params)
          render json: @invitation, status: :ok
        else
          render json: @invitation.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        invitation = Invitation.find(params[:id])
        invitation.destroy
      end
    
      private
    
      def update_invitation_params
        params.permit(:rsvp)
      end
    
    end
