import { NoticeCard } from "./NoticeCard"

export const NoticesList = ({ notices }) => {
  return (
    <ul className="notices__grid">
      {
        notices.map( (notice) => (
          <NoticeCard notice={ notice } key={ notice.id } />
        ))
      }
    </ul>
  )
}
