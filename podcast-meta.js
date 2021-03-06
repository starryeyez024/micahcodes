module.exports = function(file, metadata) {
  var podcastData = [];

  // Featured Image
  if (file.featuredImage) {
    podcastData.push(
      {
        'itunes:image': {
          _attr: {
            href: 'https://micah.codes/assets/img/' + file.featuredImage,
          }
        }
      }
    );
  }
  // Summary Field
  if (file.summary) {
    podcastData.push({'itunes:summary': file.summary});
  }

  // MP3 File
  if (file.audio) {
    podcastData.push(
      {
        'enclosure': {
          _attr: {
            url: 'https://micah.codes/assets/audio/' + file.audio,
            type: "audio/mpeg"
          }
        }
      }
    );
  }

  // Podcast Duration
  if (file.duration) {
    podcastData.push({'itunes:duration': file.duration});
  }

  // Misc
  podcastData.push(
    {'pubDate': file.date}
  );

  return podcastData;
}
