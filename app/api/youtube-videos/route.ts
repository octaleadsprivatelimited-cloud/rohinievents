import { NextResponse } from 'next/server';

// YouTube Channel Handle: @RohiniEvents
const YOUTUBE_CHANNEL_HANDLE = 'RohiniEvents';
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || '';

export async function GET() {
  try {
    // First, get the channel ID from the handle
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${YOUTUBE_CHANNEL_HANDLE}&type=channel&key=${YOUTUBE_API_KEY}&maxResults=1`
    );

    if (!channelResponse.ok) {
      // If API key is not available, return empty array
      // Videos can be manually added in the gallery page
      return NextResponse.json({ videos: [] });
    }

    const channelData = await channelResponse.json();
    
    if (!channelData.items || channelData.items.length === 0) {
      return NextResponse.json({ videos: [] });
    }

    const channelId = channelData.items[0].snippet.channelId;

    // Get the uploads playlist ID
    const channelDetailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
    );

    if (!channelDetailsResponse.ok) {
      return NextResponse.json({ videos: [] });
    }

    const channelDetails = await channelDetailsResponse.json();
    const uploadsPlaylistId = channelDetails.items[0].contentDetails.relatedPlaylists.uploads;

    // Get videos from the uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&key=${YOUTUBE_API_KEY}&maxResults=50`
    );

    if (!videosResponse.ok) {
      return NextResponse.json({ videos: [] });
    }

    const videosData = await videosResponse.json();

    const videos = videosData.items.map((item: any, index: number) => {
      const videoId = item.snippet.resourceId.videoId;
      return {
        id: index + 1,
        title: item.snippet.title,
        description: item.snippet.description || '',
        thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        videoId: videoId,
        category: 'Event',
        duration: '0:00',
        views: '0',
        date: item.snippet.publishedAt.split('T')[0]
      };
    });

    return NextResponse.json({ videos });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json({ videos: [] });
  }
}

