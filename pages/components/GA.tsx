import Script from "next/script";

export default function GA({ id }: { id: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${id}');
          gtag('event', 'conversion', {'send_to': 'AW-936758591/Jj6xCMPbpIcYEL-a174D'});
          `}
      </Script>
    </>
  );
}
