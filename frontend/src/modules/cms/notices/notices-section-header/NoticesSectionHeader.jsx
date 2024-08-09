export const NoticesSectionHeader = ({ title, text }) => {
  return (
    <div className="notices-section-header flex flex-column mb-4">
      <h2>{title}</h2>
      <p className="notices-section-header__text">{text}</p>
    </div>
  );
};
