Rails.application.routes.draw do
  namespace :api do 
    resources :user_groups, only: [:create, :destroy]
    resources :user_events, only: [:create, :update, :destroy]
    resources :events
    resources :groups, only: [:index, :show, :create]
    # resources :users
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    post '/signup', to: 'users#create'
    delete '/logout', to: 'sessions#destroy'
  end

  get "*path", to: "fallback#index", constraints: -> (req) { !req.xhr? && req.format.html }
end
