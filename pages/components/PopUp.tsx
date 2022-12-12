import Script from "next/script";

export default function PopUp() {
  return (
    <>
      <Script id="mcjs">
        {`
    !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/51f10df1955a211120bfeab13/8884199433175b354e2bb626d.js");
    `}
      </Script>
    </>
  );
}
