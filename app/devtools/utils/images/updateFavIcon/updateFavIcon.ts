type UpdateFavIconProps = { iconPath: string }

export default function updateFavIcon({ iconPath = 'favicon.svg' }: UpdateFavIconProps) {
  const faviconEl =
    document.querySelector("link[rel='icon']") || ({ href: iconPath } as any)
  faviconEl.href = iconPath
}
