type Album = {
    artist: string;
    title: string;
    tracks?: number;
};
function make_album(artist: string, title: string, tracks?: number): object {
    const album = {
        artist: artist,
        title: title,
        tracks: tracks
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three dictionaries representing different albums and print their details
console.log(make_album('Artist1', 'Album Title1'));
console.log(make_album('Artist2', 'Album Title2', 12)); // Includes the number of tracks
console.log(make_album('Artist3', 'Album Title3'));

