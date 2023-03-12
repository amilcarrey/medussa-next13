import { Image as MedusaImage } from "@medusajs/medusa"
import clsx from "clsx"
import Image from "next/image"
import React from "react"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full"
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
}) => {
  const initialImage = thumbnail || images?.[0]?.url

  return (
    <div
      className={clsx("relative aspect-[29/34] -z-10 ", {
        "w-[180px]": size === "small",
        "w-[290px]": size === "medium",
        "w-[440px]": size === "large",
        "w-full": size === "full",
      })}
    >
      <Image src={initialImage!} alt="Sape" width={1000} height={1000}  />
    </div>
  )
}



export default Thumbnail
