export default function Spotify({ playlist }: { playlist: string }) {
  return (
    <iframe
      style={{ borderRadius: "0px" }}
      frameBorder="0"
      src={`https://open.spotify.com/embed/playlist/${playlist}?utm_source=generator&theme=0`}
      width="280px"
      height="80"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
