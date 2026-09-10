export interface UnsplashCredit {
  id: string
  author: string
  username: string
}

export const unsplashUrl = (id: string, width: number, height?: number) => {
  const params = new URLSearchParams({
    fm: 'jpg',
    q: '80',
    auto: 'format',
    fit: 'crop',
    w: String(width)
  })
  if (height) params.set('h', String(height))
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`
}

export const unsplashCreditUrl = (credit: UnsplashCredit) =>
  `https://unsplash.com/@${credit.username}`

export const IMAGES = {
  heroPortrait: { id: '1684607776189-24a70a10a804', author: 'Nicolas Houdayer', username: 'ascalaphe' },
  aboutStatPortrait: { id: '1611403119860-57c4937ef987', author: 'Hà Nguyễn', username: 'lavinhha' },
  aboutSidePortrait: { id: '1754473397061-e18dc1091855', author: 'Mehdi Pezhvak', username: 'mehdipezhvak' },
  teaser1: { id: '1701901492183-5f59f341c70e', author: 'Pawel Czerwinski', username: 'pawel_czerwinski' },
  teaser2: { id: '1679931974860-1af5ac3cc051', author: 'Pat Hayden', username: '11pathayden' },
  teaser3: { id: '1741869218100-42951c3b0568', author: 'Pawel Czerwinski', username: 'pawel_czerwinski' },
  works1: { id: '1761058240432-1dbd1db26d02', author: 'Steve A Johnson', username: 'steve_j' },
  works2: { id: '1705046332420-abc89468ef92', author: 'Pawel Czerwinski', username: 'pawel_czerwinski' },
  works3: { id: '1753695115211-12629cb8d4e9', author: 'Abhishek Kumar', username: 'abhi1204' },
  blog1: { id: '1741879080203-1247224b4f64', author: 'Li Zhang', username: 'sunx' },
  blog2: { id: '1633280605337-5766f7eb3319', author: 'Pawel Czerwinski', username: 'pawel_czerwinski' },
  blog3: { id: '1677611998429-1baa4371456b', author: 'ilgmyzin', username: 'ilgmyzin' }
} as const satisfies Record<string, UnsplashCredit>
