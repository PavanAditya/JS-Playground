class SongNode {  
    constructor(title) {  
        this.title = title;  
        this.next = null;  
    }  
}  

class Playlist {  
    constructor() {  
        this.head = null;  
        this.tail = null;  
        this.songSet = new Set();  // To keep track of unique songs  
    }  

    addSong(title) {  
        if (this.songSet.has(title)) {  
            return "Song already exists in the playlist.";  
        }  

        const newSong = new SongNode(title);  
        if (!this.head) {  
            this.head = newSong;  
            this.tail = newSong;  
        } else {  
            this.tail.next = newSong;  
            this.tail = newSong;  
        }  

        this.songSet.add(title);  
        return `Added '${title}' to the playlist.`;  
    }  

    removeSong(title) {  
        let current = this.head;  
        let previous = null;  

        while (current) {  
            if (current.title === title) {  
                if (previous) {  
                    previous.next = current.next;  
                } else {  
                    this.head = current.next; // If removing the head  
                }  

                if (current === this.tail) {  // If it's the last song  
                    this.tail = previous;  
                }  

                this.songSet.delete(title);  
                return `Removed '${title}' from the playlist.`;  
            }  
            previous = current;  
            current = current.next;  
        }  

        return "Song not found in the playlist.";  
    }  

    playNext() {  
        if (!this.head) {  
            return "No songs to play.";  
        }  

        const songToPlay = this.head.title;  
        this.head = this.head.next; // Move to the next song  
        if (!this.head) {  // If the playlist becomes empty  
            this.tail = null;  
        }  

        return `Playing '${songToPlay}'.`;  
    }  

    shufflePlaylist() {  
        // Convert linked list to an array to shuffle  
        const songs = [];  
        let current = this.head;  
        while (current) {  
            songs.push(current.title);  
            current = current.next;  
        }  

        // Shuffle the array  
        for (let i = songs.length - 1; i > 0; i--) {  
            const j = Math.floor(Math.random() * (i + 1));  
            [songs[i], songs[j]] = [songs[j], songs[i]]; // Swap  
        }  

        // Rebuild the linked list  
        this.head = null;  
        this.tail = null;  
        this.songSet.clear();  

        // Add shuffled songs back to the playlist  
        for (const song of songs) {  
            this.addSong(song);  
        }  

        return "Shuffled the playlist.";  
    }  
}  

// Example Usage  
const playlist = new Playlist();  
console.log(playlist.addSong("Song A"));  // Output: Added 'Song A' to the playlist.  
console.log(playlist.addSong("Song B"));  // Output: Added 'Song B' to the playlist.  
console.log(playlist.addSong("Song A"));  // Output: Song already exists in the playlist.  
console.log(playlist.playNext());          // Output: Playing 'Song A'.  
console.log(playlist.removeSong("Song C")); // Output: Song not found in the playlist.  
console.log(playlist.removeSong("Song A")); // Output: Removed 'Song A' from the playlist.  
console.log(playlist.shufflePlaylist());    // Output: Shuffled the playlist.  
console.log(playlist.playNext());           // Output: Playing 'Song B' (or next song).