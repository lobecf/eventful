# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# u1 = User.create(name: 'Charlie Lobe', username: 'lobeigh', password: '1234', password_confirmation: '1234', address: '225 W 23rd St', image_url: 'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg')
# u2 = User.create(name: 'Loke Chan', username: 'lchan', password: '1234', password_confirmation: '1234', address: '555 W 24th St', image_url: 'https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg')
# u3 = User.create(name: 'Erin Parker', username: 'eparker', password: '1234', password_confirmation: '1234', address: '444 W 10th St', image_url:'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg')
# u4 = User.create(name: 'Madison Neugebauer', username: 'mneug', password: '1234', password_confirmation: '1234', address: '706 W 4th St', image_url: 'https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg' )
# u5 = User.create(name: 'Sam Schultz', username: 'sschultz', password: '1234', password_confirmation: '1234', address: '809 W 55th St', image_url: 'http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg')
# u6 = User.create(name: 'Angela Lobe', username: 'alobe', password: '1234', password_confirmation: '1234', address: '444 W 10th St', image_url:'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg')
# u7 = User.create(name: 'Bob Windorski', username: 'bwindo', password: '1234', password_confirmation: '1234', address: '706 W 4th St', image_url: 'https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg' )
# u8 = User.create(name: 'Alex Hacker', username: 'ahack', password: '1234', password_confirmation: '1234', address: '809 W 55th St', image_url: 'http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg')
# u9 = User.create(name: 'Sharon Windorski', username: 'swindo', password: '1234', password_confirmation: '1234', address: '706 W 4th St', image_url: 'https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg' )
# u10 = User.create(name: 'Nick DAngelo', username: 'ndangelo', password: '1234', password_confirmation: '1234', address: '809 W 55th St', image_url: 'http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg')
# u11 = User.create(name: 'Zach Kipples', username: 'zkipps', password: '1234', password_confirmation: '1234', address: '706 W 4th St', image_url: 'https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg' )
# u12 = User.create(name: 'Shawn Johnson', username: 'sjohnson', password: '1234', password_confirmation: '1234', address: '809 W 55th St', image_url: 'http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg')
# u13 = User.create(name: 'Mariah Carey', username: 'MC', password: '1234', password_confirmation: '1234', address: '706 W 4th St', image_url: 'https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg' )
# u14 = User.create(name: 'Ariana Grande', username: 'AG', password: '1234', password_confirmation: '1234', address: '809 W 55th St', image_url: 'http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg')


# u1 creates an event and POST to /events
# e1 = Event.create(
#     title: 'Christmas Party', 
#     description: 'Join us for a great party', 
#     location: '225 W 23rd St', 
#     start_time: Time.new(2021, 10, 21, 11), 
#     end_time: Time.new(2021, 10, 21, 13),
#     event_type: 1,
#     user_id: u1.id)

 
# Invitation.create(
#     event_id: e1.id,
#     sender_id: u1.id,
#     receiver_id: u2.id,
#     rsvp: true 
# )

# Invitation.create(
#     event_id: e1.id,
#     sender_id: u1.id,
#     receiver_id: u3.id,
#     rsvp: false
# )

# Invitation.create(
#     event_id: e1.id,
#     sender_id: u1.id,
#     receiver_id: u4.id, 
#     rsvp: true
# )

# Invitation.create(
#     event_id: e1.id,
#     sender_id: u1.id,
#     receiver_id: u5.id, 
# )

# e2 = Event.create(
#     title: 'Halloween Party', 
#     description: 'Join us for a great party', 
#     location: '225 W 23rd St', 
#     start_time: Time.new(2021, 10, 21, 11), 
#     end_time: Time.new(2021, 10, 21, 13),
#     event_type: 2,
#     user_id: u2.id)

# Invitation.create(
#     event_id: e2.id,
#     sender_id: u2.id,
#     receiver_id: u1.id, 
#     rsvp: true
# )

# Invitation.create(
#     event_id: e2.id,
#     sender_id: u2.id,
#     receiver_id: u3.id,
#     rsvp: false
# )

# Invitation.create(
#     event_id: e2.id,
#     sender_id: u2.id,
#     receiver_id: u4.id, 
# )

# Invitation.create(
#     event_id: e2.id,
#     sender_id: u2.id,
#     receiver_id: u5.id, 
#     rsvp: true
# )

# e3 = Event.create(
#     title: 'New Years Party', 
#     description: 'Join us for a great party', 
#     location: '225 W 23rd St', 
#     start_time: Time.new(2021, 10, 21, 11), 
#     end_time: Time.new(2021, 10, 21, 13),
#     event_type: 3,
#     user_id: u3.id)

# Invitation.create(
#     event_id: e3.id,
#     sender_id: u3.id,
#     receiver_id: u1.id, 
#     rsvp: true
# )

# Invitation.create(
#     event_id: e3.id,
#     sender_id: u3.id,
#     receiver_id: u4.id,
#     rsvp: false
# )

# Invitation.create(
#     event_id: e3.id,
#     sender_id: u3.id,
#     receiver_id: u5.id, 
#     rsvp: true
# )
# Invitation.create(
#     event_id: e3.id,
#     sender_id: u3.id,
#     receiver_id: u2.id, 
# )

# e4 = Event.create(
#     title: 'Thanksgiving', 
#     description: 'Join us for a great party', 
#     location: '225 W 23rd St', 
#     start_time: Time.new(2021, 10, 21, 11), 
#     end_time: Time.new(2021, 10, 21, 13),
#     event_type: 4,
#     user_id: u4.id)

# Invitation.create(
#     event_id: e4.id,
#     sender_id: u4.id,
#     receiver_id: u1.id, 
#     rsvp: true
# )

# Invitation.create(
#     event_id: e4.id,
#     sender_id: u4.id,
#     receiver_id: u2.id,
# )

# Invitation.create(
#     event_id: e4.id,
#     sender_id: u4.id,
#     receiver_id: u3.id, 
#     rsvp: true
# )

# Invitation.create(
#     event_id: e4.id,
#     sender_id: u4.id,
#     receiver_id: u5.id, 
#     rsvp: true
# )

# e5 = Event.create(
#     title: 'Birthday', 
#     description: 'Join us for a great party', 
#     location: '225 W 23rd St', 
#     start_time: Time.new(2021, 10, 21, 11), 
#     end_time: Time.new(2021, 10, 21, 13),
#     event_type: 5,
#     user_id: u2.id)

# Invitation.create(
#     event_id: e5.id,
#     sender_id: u5.id,
#     receiver_id: u1.id, 
#     rsvp: true
# )

# Invitation.create(
#     event_id: e5.id,
#     sender_id: u5.id,
#     receiver_id: u2.id,
#     rsvp: false
# )

# Invitation.create(
#     event_id: e5.id,
#     sender_id: u5.id,
#     receiver_id: u4.id, 
#     rsvp: true
# )

# Invitation.create(
#     event_id: e5.id,
#     sender_id: u5.id,
#     receiver_id: u3.id
# )







