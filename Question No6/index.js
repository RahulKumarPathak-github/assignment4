function managePlaylists() {
    // Private object to hold multiple playlists
    const playlists = {};
  
    // Function to create or get a playlist
    function getOrCreatePlaylist(playlistName) {
      if (!playlists[playlistName]) {
        playlists[playlistName] = createPlaylist(playlistName);
      }
      return playlists[playlistName];
    }
  
    // Function to list all playlists
    function listPlaylists() {
      return Object.keys(playlists);
    }
  
    // Return an object with methods to manage playlists
    return {
      getOrCreatePlaylist,
      listPlaylists
    };
  }
  
  // Example usage:
  const playlistManager = managePlaylists();
  const myPlaylist = playlistManager.getOrCreatePlaylist('My Favorite Hits');
  myPlaylist.addSong('Song 1', 'Artist A');
  myPlaylist.addSong('Song 2', 'Artist B');
  
  const anotherPlaylist = playlistManager.getOrCreatePlaylist('Chill Vibes');
  anotherPlaylist.addSong('Chill Song 1', 'Artist C');
  
  console.log(playlistManager.listPlaylists());
  // Outputs: [ 'My Favorite Hits', 'Chill Vibes' ]
  
  console.log(myPlaylist.listSongs());
  // Outputs: [ { songName: 'Song 1', artist: 'Artist A' }, { songName: 'Song 2', artist: 'Artist B' } ]
  
  console.log(anotherPlaylist.listSongs());
  // Outputs: [ { songName: 'Chill Song 1', artist: 'Artist C' } ]