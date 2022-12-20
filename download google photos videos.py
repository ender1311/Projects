from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

# Set up the credentials for the API
creds = Credentials.from_authorized_user()

# Build the API client
service = build('photoslibrary', 'v1', credentials=creds)

# List the albums in your Google Photos account
albums = service.albums().list().execute()

# Download each video in the albums
for album in albums:
    album_name = album['title']
    album_id = album['id']
    
    # List the videos in the album
    media_items = service.mediaItems().list(
        albumId=album_id,
        mediaTypeFilter='VIDEO'
    ).execute()
    
    # Download each video in the album
    for item in media_items:
        item_id = item['id']
        item_name = item['filename']
        
        # Get the URL for the video
        base_url = item['baseUrl']
        
        # Download the video
        response = service.mediaItems().get(
            mediaItemId=item_id,
            baseUrl=base_url
        ).execute()
        
        # Save the video to a file
        with open(f'{album_name}/{item_name}', 'wb') as f:
            f.write(response)
