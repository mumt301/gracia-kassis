class Spotify {
  async getWinter() {
    //const WinterKey = "";
    //make request to spotify using the api fetch call 

    const response = await Spotify(
      `curl -X "GET" "https://api.spotify.com/v1/playlists/0NCP9kXhvm6RGYjAxQGFeP%3Fsi%3D96a15e55912c4252" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCw-Uq3OY6rQ614HFjZ4lxQl-zQI7DqH4zeVjYxiLk-6vf9VuyT0zFh2qPLytp89fE6u_XKAksnYYrxqQ5Mh1QR6rz_lZndaonY1BXKYaSjv_-kOlVtLq9j5V0I2EjbI7xHeQHjOvzH-RkYrBCIcFKJfCXomidHxG2a4FfVZJMXYQ"`
    );

    const playlist = await response.json();

    console.log(playlist);

    return playlist;
  }

  async getFall() {

    const response = await Spotify(
      `curl -X "GET" "https://api.spotify.com/v1/playlists/0NCP9kXhvm6RGYjAxQGFeP%3Fsi%3D96a15e55912c4252" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCw-Uq3OY6rQ614HFjZ4lxQl-zQI7DqH4zeVjYxiLk-6vf9VuyT0zFh2qPLytp89fE6u_XKAksnYYrxqQ5Mh1QR6rz_lZndaonY1BXKYaSjv_-kOlVtLq9j5V0I2EjbI7xHeQHjOvzH-RkYrBCIcFKJfCXomidHxG2a4FfVZJMXYQ"`
    );

    const playlist = await response.json();

    console.log(playlist);

    return playlist;
  }

  async getSpring() {

    const response = await Spotify(
      `curl -X "GET" "https://api.spotify.com/v1/playlists/0NCP9kXhvm6RGYjAxQGFeP%3Fsi%3D96a15e55912c4252" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCw-Uq3OY6rQ614HFjZ4lxQl-zQI7DqH4zeVjYxiLk-6vf9VuyT0zFh2qPLytp89fE6u_XKAksnYYrxqQ5Mh1QR6rz_lZndaonY1BXKYaSjv_-kOlVtLq9j5V0I2EjbI7xHeQHjOvzH-RkYrBCIcFKJfCXomidHxG2a4FfVZJMXYQ"`
    );

    const playlist = await response.json();

    console.log(playlist);

    return playlist;
  }

  async getSummer() {

    const response = await Spotify(
      `curl -X "GET" "https://api.spotify.com/v1/playlists/0NCP9kXhvm6RGYjAxQGFeP%3Fsi%3D96a15e55912c4252" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCw-Uq3OY6rQ614HFjZ4lxQl-zQI7DqH4zeVjYxiLk-6vf9VuyT0zFh2qPLytp89fE6u_XKAksnYYrxqQ5Mh1QR6rz_lZndaonY1BXKYaSjv_-kOlVtLq9j5V0I2EjbI7xHeQHjOvzH-RkYrBCIcFKJfCXomidHxG2a4FfVZJMXYQ"`
    );

    const playlist = await response.json();

    console.log(playlist);

    return playlist;
  }
}

