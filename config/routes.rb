Rails.application.routes.draw do
  namespace :api do 
    resources :invitations
    resources :events
    resources :users
    # resources :users
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    post '/signup', to: 'users#create'
    delete '/logout', to: 'sessions#destroy'

    get "/user_index_events", to: "users#user_index_events"
    get "/user_index_events_past", to: "users#user_index_events_past"
    get "/user_index_invitations", to: "users#user_index_invitations"
    get "/user_index_invitations_past", to: "users#user_index_invitations_past"
    get "/user_index_invitations_sent", to: "users#user_index_invitations_sent"

    post 'uploads/prepare'
    patch "/me", to: "users#update"
  end

  # get "/user_index_invited_events", to: "users#user_index_invited_events"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
