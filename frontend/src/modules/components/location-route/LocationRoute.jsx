import { usePage } from "../../hooks";

export const LocationRoute = ({ sectionVisible = true }) => {
  const { getRouteName } = usePage();
  const { route, page } = getRouteName();

  return (
    <>
      <p className="location-route__nav">{ route }</p>
      { sectionVisible && <h1 className="location-route__title">{page}</h1>}
    </>
  )
}
