const Client = require("castv2-client").Client;
const DefaultMediaReceiver = require("castv2-client").DefaultMediaReceiver;
const mdns = require("mdns");

const browser = mdns.createBrowser(mdns.tcp("googlecast"));

browser.on("serviceUp", function (service) {
  console.log(
    'found device "%s" at %s:%d',
    service.name,
    service.addresses[0],
    service.port
  );

  browser.stop();
});

browser.start();

const ondeviceup = (host) => {
  console.log(host);
  const client = new Client();

  client.connect(host, function () {
    console.log("connected, launching app ...");

    client.launch(DefaultMediaReceiver, function (err, player) {
      const media = {
        // Here you can plug an URL to any mp4, webm, mp3 or jpg file with the proper contentType.
        contentId:
          "https://storage.googleapis.com/napojiro-public-src/nyaon.mp3",
        contentType: "video/mpeg",
        streamType: "BUFFERED", // or LIVE

        // Title and cover displayed while buffering
        metadata: {
          type: 0,
          metadataType: 0,
          title: "Big Buck Bunny",
          images: [
            {
              url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
            },
          ],
        },
      };

      player.on("status", function (status) {
        console.log("status broadcast playerState=%s", status.playerState);
      });

      console.log(
        'app "%s" launched, loading media %s ...',
        player.session.displayName,
        media.contentId
      );

      player.load(media, { autoplay: true }, function (err, status) {
        // console.log('media loaded playerState=%s', status.playerState);

        // Seek to 2 minutes after 15 seconds playing.
        setTimeout(function () {
          player.seek(2 * 60, function (err, status) {
            //
          });
        }, 15000);
      });
    });
  });

  client.on("error", function (err) {
    console.log("Error: %s", err.message);
    client.close();
  });
};

module.exports = ondeviceup;
