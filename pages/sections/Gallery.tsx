import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Device } from "../../hooks/useDevice";
import useInView from "../../hooks/useInView";
import styles from "../../styles/Home.module.css";
import { Header, Image } from "../components";
import React from "react";
import { Gallery as RGallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useDevice } from "../../hooks/useDevice";

const pad: Record<Device, number> = {
  tablet: 10,
  desktop: 20,
  mobile: 2,
  unknown: 20,
};

const dimensions = [
  [1, `2160x1728`],
  [2, `2160x1728`],
  [3, `1440x2160`],
  [4, `1121x1620`],
  [5, `1571x2226`],
  [6, "1006x1462"],
  [7, `875x1340`],
  [8, `703x711`],
  [9, `686x1203`],
  [10, `2160x1436`],
  [11, `1207x1620`],
  [12, `2160x1428`],
  [13, `1620x1080`],
  [14, `720x1080`],
  [15, `720x1080`],
  [16, `1619x1080`],
  [17, `810x1080`],
  [18, `1620x1080`],
  [19, `1620x1080`],
  [20, `720x1080`],
  [21, `3024x3666`],
  [22, `1058x1620`],
  [23, `3264x3358`],
  // [24, `1204x1265`],
] as const;

const images = dimensions.map(([number, dimensions]) => {
  const [width, height] = dimensions.split("x");

  return {
    src: `/imgs/${number}.webp`,
    original: `/imgs/${number}.webp`,
    isSelected: false,
    caption: "",
    width,
    height,
  };
});

const heightMap: Record<Device, number> = {
  desktop: 420,
  tablet: 360,
  mobile: 200,
  unknown: 200,
};

export default function Gallery() {
  const ref = useInView("gallery");

  const device = useDevice();
  const height = heightMap[device];
  const margin = device === "desktop" ? 6 : 4;

  const [index, setIndex] = React.useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: any) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <section ref={ref}>
      <Header text="Gallery" />

      <div className={styles.gallery}>
        {/* @ts-ignore */}
        <RGallery
          images={images as any}
          rowHeight={height}
          onClick={handleClick}
          enableImageSelection={false}
          margin={margin}
        />
      </div>

      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          // too
          // toolbarButtons={[<>HEY!</>]}
        />
      )}

      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 900: 3 }}
        style={{ padding: `80px` }}
      >
        <Masonry gutter={"20px"}>
          

          {/* <div /> */}
      {/* <Image image={`6`} className={styles.pic} /> */}
    </section>
  );
}
