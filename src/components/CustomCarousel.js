import React from "react";
import { Box, Carousel, Image } from "grommet";

function CustomCarousel(props) {
  return (
    <Box height="small" fill overflow="hidden">
      <Carousel fill>
        <Image
          fit="cover"
          src="http://cahayabaru.id/wp-content/uploads/2018/01/gJUMpv_293dfc0e-f5ca-43b4-8075-b202fd202c1c-715x400.jpg"
        />
        <Image
          fit="cover"
          src="http://cahayabaru.id/wp-content/uploads/2018/01/gJUMpv_293dfc0e-f5ca-43b4-8075-b202fd202c1c-715x400.jpg"
        />
        <Image
          fit="cover"
          src="http://cahayabaru.id/wp-content/uploads/2018/01/gJUMpv_293dfc0e-f5ca-43b4-8075-b202fd202c1c-715x400.jpg"
        />
      </Carousel>
    </Box>
  );
}

export default CustomCarousel;
